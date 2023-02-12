import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { updatingSelector, postSelector } from '../../store/modules/posts/selector';
import PostForm from '../../components/form';
import { useNavigate } from "react-router-dom";

export default function EditPost() {
    const navigate = useNavigate();
    const selectedPost = useSelector(postSelector);
    const isUpdating = useSelector(updatingSelector);

    useEffect(() => {
        if(!Object.keys(selectedPost).length)
            navigate("/")
    } ,[])
    return (
        <>
            <h4 className="title">
                Edit Post
            </h4>
            <PostForm post={selectedPost} isUpdating={isUpdating} />
        </>
    )
}