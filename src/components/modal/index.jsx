import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modules/posts/actions";
import "./index.css"

export default function Modal({ title, children }) {
    const dispatch = useDispatch();
    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={() => dispatch(closeModal())} className="close">&times;</span>
                <div className="title">{title}</div>
                {children}
            </div>
        </div>
    )
}