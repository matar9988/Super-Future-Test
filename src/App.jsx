import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './components/table';
import Button from './components/button';
import Modal from './components/modal';
import PostForm from './components/form';
import { getPostsRequest } from './store/modules/posts/actions';
import { dataSelector, errorSelector, loadingSelector, modalSelector, postSelector, updatingSelector, deletingSelector } from './store/modules/posts/selector';
import "./App.css"
import PostDelete from './components/post-delete';


function App() {

  const dispatch = useDispatch();
  const posts = useSelector(dataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const isModalOpen = useSelector(modalSelector);
  const selectedPost = useSelector(postSelector);
  const isUpdating = useSelector(updatingSelector);
  const isDeleting = useSelector(deletingSelector);

  const columns = [{ key: "id", placeholder: "ID" }, { key: "userId", placeholder: "User ID" }, { key: "title", placeholder: "Title" }, { key: "body", placeholder: "Body" }, { key: "actions", placeholder: "Actions", value: ["update", "delete"] }];

  useEffect(() => {
    dispatch(getPostsRequest())
  }, [])

  return (
    <>
      {error ? "Something went wrong!" : (
        <>
          {loading ? '...Loading' : (
            <>
              <div className='posts-container'>
                <div className='post-table-title' style={{display:"flex"}}>
                  <h3>Posts List</h3>
                  <Button />
                </div>
                <Table columns={columns} data={posts} />
              </div>
              {isModalOpen ?
                <Modal title={isDeleting ? "Delete Post" : (isUpdating ? "Update Post" : "Create Post")}>
                  {
                    isDeleting ?
                      <PostDelete post={selectedPost} />
                      : (isUpdating ?
                        <PostForm post={selectedPost} isUpdating={isUpdating} />
                        : <PostForm isUpdating={isUpdating} />)
                  }
                </Modal> : null}
            </>
          )}
        </>
      )}
    </>
  )
}

export default App
