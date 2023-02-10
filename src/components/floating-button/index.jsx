import React from "react";
import { useDispatch } from 'react-redux';
import { openModal } from "../../store/modules/posts/actions";
import "./index.css"

export default function FloatingButton() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(openModal())} className="float">
            <i className="fa fa-plus"></i>
        </button>
    )
}