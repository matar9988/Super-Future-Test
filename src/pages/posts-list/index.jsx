import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector, hasMoreSelector } from '../../store/modules/posts/selector';
import List from '../../components/list';
import { getPostsRequest } from "../../store/modules/posts/actions";
import "./index.css";

export default function PostsList() {
    const posts = useSelector(dataSelector);
    const hasMore = useSelector(hasMoreSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if(posts.length === 0)
            dispatch(getPostsRequest())
    }, [])

    const columns = [{ key: "id", placeholder: "ID" }, { key: "userId", placeholder: "User ID" }, { key: "title", placeholder: "Title" }, { key: "body", placeholder: "Body" }, { key: "actions", placeholder: "Actions", value: ["update", "delete"] }];

    return (
        <div className='posts-container'>
            <h4 className="title">
                Posts List
            </h4>
            <List columns={columns} data={posts} hasMore={hasMore} />
        </div>
    )
}