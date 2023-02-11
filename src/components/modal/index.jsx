import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modules/posts/actions";
import "./index.css"

export default function Modal({ title, children }) {
    const dispatch = useDispatch();
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header-title">
                    <span onClick={() => dispatch(closeModal())} className="close">&times;</span>
                    {title}
                </div>
                <hr />
                <div className="header-body">
                    {children}
                </div>
            </div>
        </div>
    )
}