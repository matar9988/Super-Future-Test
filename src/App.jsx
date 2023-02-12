import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/modal';
import PostForm from './components/form';
import { getPostsRequest } from './store/modules/posts/actions';
import { errorSelector, loadingSelector, modalSelector, postSelector, updatingSelector, deletingSelector } from './store/modules/posts/selector';
import "./App.css"
import PostDelete from './components/post-delete';
import Snackbar from './components/snackbar';
import PostsList from './pages/posts-list';
import Navbar from './components/Navbar';


function App() {

  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const isModalOpen = useSelector(modalSelector);
  const selectedPost = useSelector(postSelector);
  const isUpdating = useSelector(updatingSelector);
  const isDeleting = useSelector(deletingSelector);


  useEffect(() => {
    dispatch(getPostsRequest())
  }, [])

  return (
    <>

      {loading &&
        <div className='loader-background'>
          <span className="loader"></span>
        </div>}
        
      <Navbar />

      <div className='app-container'>

        {error.exist && <Snackbar />}

        <PostsList />

        {isModalOpen &&
          <Modal title={isDeleting ? "Delete Post" : (isUpdating ? "Update Post" : "Create Post")}>
            {
              isDeleting ?
                <PostDelete post={selectedPost} />
                : (isUpdating ?
                  <PostForm post={selectedPost} isUpdating={isUpdating} />
                  : <PostForm isUpdating={isUpdating} />)
            }
          </Modal>}
      </div>
    </>
  )
}

export default App
