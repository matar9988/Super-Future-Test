import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './components/table';
import FloatingButton from './components/floating-button';
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

  const columns = [{ key: "id", value: "id" }, { key: "userId", value: "userId" }, { key: "title", value: "title" }, { key: "body", value: "body" }, { key: "actions", value: ["update", "delete"] }];

  useEffect(() => {
    dispatch(getPostsRequest())
  }, [])

  return (
    <>
      {error ? "Something went wrong!" : (
        <>
          {loading ? '...Loading' : (
            <>
              <Table columns={columns} data={posts} />
              <FloatingButton />
              {isModalOpen ?
                <Modal title={isUpdating ? "Update Form:" : "Post Form:"}>
                  {
                    isDeleting ?
                      <PostDelete post={selectedPost} /> : (isUpdating ? <PostForm post={selectedPost} isUpdating={isUpdating} /> : <PostForm isUpdating={isUpdating} />)
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
