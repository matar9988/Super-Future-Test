import React from "react";
import { useSelector } from 'react-redux';
import { updatingSelector } from '../../store/modules/posts/selector';
import PostForm from '../../components/form';

export default function CreatePost() {

    const isUpdating = useSelector(updatingSelector);

    return (
        <>
            <h4 className="title">
                Create Post
            </h4>
            <PostForm isUpdating={isUpdating} />
        </>
    )
}