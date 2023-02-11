import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./index.css"
import { addPostRequest, updatePostRequest, closeModal } from "../../store/modules/posts/actions";
import { useDispatch } from "react-redux";

export default function PostForm({ post = { userId: '', title: '', body: '', id: 0 }, isUpdating }) {
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
        resetForm();
    };

    const editPost = (values, { setSubmitting, resetForm }) => {
        submitEditPost(values);
        setSubmitting(false);
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

                        <div className="form-input">
                            <div>User Id</div>
                            <Field name="userId" type="number"/>
                            <ErrorMessage className="error-message" name="userId" component="div" />
                        </div>

                        <div className="form-input">
                            <div>Title</div>
                            <Field name="title" />
                            <ErrorMessage className="error-message" name="title" component="div" />
                        </div>

                        <div className="form-input">
                            <div id="body-label">Body</div>
                            <Field name="body" as="textarea" rows="5" />
                            <ErrorMessage className="error-message" name="body" component="div" />
                        </div>

                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary btn-lg button" disabled={isSubmitting}>Submit</button>
                    <button type="submit" className="btn btn-danger btn-lg button" onClick={() => dispatch(closeModal())}>Cancel</button>
                </Form>
            )}
        </Formik>
    )
}