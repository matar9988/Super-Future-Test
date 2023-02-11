import React from "react";
import { useDispatch } from 'react-redux';
import { openModal } from "../../store/modules/posts/actions";
import "./index.css"

export default function Button() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(openModal())} className="float">
           Add Post
        </button>
    )
}