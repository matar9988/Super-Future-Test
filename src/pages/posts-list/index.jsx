import React from "react";
import { useSelector } from 'react-redux';
import { dataSelector } from '../../store/modules/posts/selector';
import Table from '../../components/table';
import Button from '../../components/button';
import "./index.css";

export default function PostsList() {
    const posts = useSelector(dataSelector);
    const columns = [{ key: "id", placeholder: "ID" }, { key: "userId", placeholder: "User ID" }, { key: "title", placeholder: "Title" }, { key: "body", placeholder: "Body" }, { key: "actions", placeholder: "Actions", value: ["update", "delete"] }];
  
    return (
        <div className='posts-container'>
            <div className='post-table-title'>
                <h3>Posts List</h3>
                <Button />
            </div>
            <Table columns={columns} data={posts} />
        </div>
    )
}