import React from "react";
import { closeModal, deletePostRequest } from "../../store/modules/posts/actions";
import { useDispatch } from "react-redux";
import "./index.css";

export default function PostDelete({ post = { userId, title, body, id } }) {
    const dispatch = useDispatch();

    return (
        <div className="delete-wrapper">
            <h4>Are you sure you want to delete the post with the ID: {post.id} ?</h4>
            <button className="btn btn-danger btn-lg button" onClick={() => {dispatch(deletePostRequest(post))}}>
                Approve
            </button>
            <button className="btn btn-info btn-lg button" onClick={() => {dispatch(closeModal())}}>
                Cancel
            </button>
        </div>
    )
}