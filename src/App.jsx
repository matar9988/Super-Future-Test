import { useSelector } from 'react-redux';
import { errorSelector, loadingSelector, modalSelector, postSelector } from './store/modules/posts/selector';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Snackbar from './components/snackbar';
import Modal from './components/modal';
import PostsList from './pages/posts-list';
import Layout from './pages/layout';
import CreatePost from './pages/create-post';
import EditPost from './pages/edit-post';
import PostDelete from './components/post-delete';


function App() {
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const isModalOpen = useSelector(modalSelector);
  const selectedPost = useSelector(postSelector);

  return (
    <>
      {
        loading &&
        <div className='loader-background'>
          <span className="loader"></span>
        </div>
      }

      {error.exist && <Snackbar />}

      {
      isModalOpen &&
        <Modal title="Delete Post">
          <PostDelete post={selectedPost} />
        </Modal>
        }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />
            <Route exact path="create-post" element={<CreatePost />} />
            <Route exact path="edit-post" element={<EditPost />} />
            <Route path="*" element={<div>wrong asnwoi</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
