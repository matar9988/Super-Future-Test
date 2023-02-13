import { useDispatch } from 'react-redux';
import React from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPostsRequest, openModal, updatePost, deletePost } from '../../store/modules/posts/actions';
import "./index.css"

let page = 1;
export default function List(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <InfiniteScroll
                dataLength={props.data.length}
                next={() => { dispatch(getPostsRequest(page)); page++; }}
                hasMore={props.hasMore}
                endMessage={
                    <p style={{ textAlign: 'center', fontSize: "20px" }}>
                        <b>You have seen all the posts!</b>
                    </p>}
                loader={
                    <p style={{ textAlign: 'center', fontSize: "20px" }}>
                        <b>loading...</b>
                    </p>}
                scrollThreshold={'5px'}
            >
                {props.data.map((row, index) => (
                    <div key={index} id="container">
                        <div className="post-details">
                            <h1>{row.title}</h1>
                            <p className="information">{row.body}</p>


                            <div className="actions">

                                <button className="btn-info" onClick={() => { dispatch(updatePost(row)); navigate("/edit-post") }}>
                                    Edit
                                </button>

                                <button className="btn-danger" onClick={() => { dispatch(deletePost(row)); dispatch(openModal()) }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>

        </>
    )
}