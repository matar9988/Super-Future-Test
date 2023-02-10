import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./index.css"

export default function PostForm() {
    const submitPost = async (post) => {
        let response = await addItem(item);
        dispatch(addItemAction(response))
    }

    return (
        <Formik
            initialValues={{ userId: undefined, title: '', body: '' }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                submitPost(values);
                setSubmitting(false);
                alert("Post Added!")
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
                        <Field name="userId" type="number"/>
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
                    <button type="submit" class="btn btn-primary btn-lg" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}