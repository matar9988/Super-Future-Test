import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./index.css"
import { addPostRequest, updatePostRequest, closeModal } from "../../store/modules/posts/actions";
import { useDispatch } from "react-redux";

export default function PostForm({ post = { userId: '', title: '', body: '', id:0 }, isUpdating }) {
    const dispatch = useDispatch();

    const submitAddPost = async (submittedData) => {
        dispatch(addPostRequest(submittedData))
    }

    const submitEditPost = async (submittedData) => {
        dispatch(updatePostRequest({ ...submittedData, id: post.id }))
    }

    const addPost = (values, { setSubmitting, resetForm }) => {
        submitAddPost(values);
        setSubmitting(false);
        alert("Post Added!");
        resetForm();
    };

    const editPost = (values, { setSubmitting, resetForm }) => {
        submitEditPost(values);
        setSubmitting(false);
        alert("Post Updated!");
        resetForm();
    }

    return (
        <Formik
            initialValues={{ userId: post.userId, title: post.title, body: post.body }}
            onSubmit={isUpdating ? editPost : addPost}
            validate={(values) => {
                const errors = {};
                if (!values.userId) {
                    errors.userId = 'Required';
                }
                if (!values.title) {
                    errors.title = 'Required';
                }
                if (!values.body) {
                    errors.body = 'Required';
                }
                return errors;
            }}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="wrapper">
                        <label>User Id:</label>
                        <Field name="userId" type="number" />
                        <div>
                            <ErrorMessage name="userId" component="div" />
                        </div>

                        <label>Title:</label>
                        <Field name="title" />
                        <div>
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <label id="body-label">Body:</label>
                        <Field name="body" as="textarea" />
                        <div>
                            <ErrorMessage name="body" component="div" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}