import { Outlet } from "react-router-dom";
import { modalSelector, postSelector, updatingSelector, deletingSelector } from '../../store/modules/posts/selector';
import { useSelector } from 'react-redux';
import Navbar from "../../components/Navbar";
import PostDelete from '../../components/post-delete';
import Modal from '../../components/modal';
import PostForm from '../../components/form';

import "./index.css";

const Layout = () => {
  const isModalOpen = useSelector(modalSelector);
  const selectedPost = useSelector(postSelector);
  const isUpdating = useSelector(updatingSelector);
  const isDeleting = useSelector(deletingSelector);

  return (
    <>
      <Navbar />
      <div className='app-container'>
        <Outlet />
        {isModalOpen &&
          <Modal title={isDeleting ? "Delete Post" : (isUpdating ? "Update Post" : "")}>
            {
              isDeleting &&
                <PostDelete post={selectedPost} />
            }
          </Modal>}
      </div>
    </>
  )
};

export default Layout;
