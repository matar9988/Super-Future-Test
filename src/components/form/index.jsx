import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./index.css"
import { addPostRequest, closeModal } from "../../store/modules/posts/actions";
import { useDispatch } from "react-redux";

export default function PostForm({post={userId:'',title:'',body:''}}) {
    const dispatch = useDispatch();

    const submitPost = async (post) => {
        dispatch(addPostRequest(post))
    }

    return (
        <Formik
            initialValues={{ userId: post.userId, title: post.title, body: post.body}}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                submitPost(values);
                setSubmitting(false);
                alert("Post Added!");
                dispatch(closeModal())
                resetForm();
            }}
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
                        <label>Body:</label>
                        <Field name="body" />
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