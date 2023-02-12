import { useDispatch } from 'react-redux';
import React from "react";
import { useNavigate } from "react-router-dom";
import { getPostsRequest, openModal, updatePost, deletePost } from '../../store/modules/posts/actions';
import "./index.css"
import InfiniteScroll from 'react-infinite-scroll-component';

let page = 1;
export default function Table(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <InfiniteScroll
                dataLength={props.data.length}
                next={() => { dispatch(getPostsRequest(page)); page++; }}
                hasMore={true}
                loader={<h4>Loading...</h4>}
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