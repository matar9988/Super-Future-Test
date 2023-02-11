import { useDispatch } from 'react-redux';
import React from "react";
import { getPostsRequest, openModal, updatePost, deletePost } from '../../store/modules/posts/actions';
import FloatingButton from '../button';
import "./index.css"

let page = 0;
export default function Table(props) {
    const dispatch = useDispatch();

    return (
        <>
            <table id="table">
                <thead>
                    <tr>
                        {props.columns.map((col, index) => <th key={`column-${index}`}>{col.placeholder}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <tr key={`row-${index}`}>
                            <td>{row.id}</td>
                            <td>{row.userId}</td>
                            <td>{row.title}</td>
                            <td>{row.body}</td>
                            {
                                props.columns.map(col => col.key).indexOf("actions") !== -1 && (
                                    <td>
                                        <div className="actions">
                                            {
                                                props.columns.find(col => col.key === "actions")['value'].map((action, indexAction) => (
                                                    <React.Fragment key={`row-${index}-action-${indexAction}`}>
                                                        {action == 'update' &&
                                                            <button className="btn btn-info" onClick={() => { dispatch(updatePost(row)); dispatch(openModal()) }}>
                                                                <span className="glyphicon glyphicon-edit"></span> Edit
                                                            </button>}

                                                        {action == 'delete' &&
                                                            <button className="btn btn-danger" onClick={() => { dispatch(deletePost(row)); dispatch(openModal()) }}>
                                                                <span className="glyphicon glyphicon-remove-circle"></span> Remove
                                                            </button>}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </div>
                                    </td>
                                )
                            }

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => { page--; dispatch(getPostsRequest(page)) }} disabled={!page}>Previous Page</button>
                <button onClick={() => { page++; dispatch(getPostsRequest(page)) }}>Next Page</button>
            </div>
        </>
    )
}