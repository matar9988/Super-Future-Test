import React from "react";
import "./index.css"

export default function Table(props) {

    return (
        <>
            <table id="table">
                <thead>
                    <tr>
                        {props.columns.map((col, index) => <th key={`column-${index}`}>{col}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <tr key={`row-${index}`}>
                            <td>{row.id}</td>
                            <td>{row.userId}</td>
                            <td>{row.title}</td>
                            <td>{row.body}</td>
                            <td>{row.actions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <a href="#">❮</a>
                <a href="#">❯</a>
            </div>
        </>
    )
}