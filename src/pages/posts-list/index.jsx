import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../../store/modules/posts/selector';
import Table from '../../components/table';
import { getPostsRequest } from "../../store/modules/posts/actions";
import "./index.css";

export default function PostsList() {
    const posts = useSelector(dataSelector);
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
            <Table columns={columns} data={posts} />
        </div>
    )
}