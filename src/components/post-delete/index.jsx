import React from "react";
import { deletePostRequest } from "../../store/modules/posts/actions";
import { useDispatch } from "react-redux";

export default function PostDelete({ post = { userId, title, body, id } }) {
    const dispatch = useDispatch();

    return (
        <>
            <h4>Are you sure you want to delete the post with the ID: {post.id} ?</h4>
            <button className="btn btn-danger btn-lg" onClick={() => {dispatch(deletePostRequest(post));alert("Post Deleted!")}}>
                Approve
            </button>
        </>
    )
}