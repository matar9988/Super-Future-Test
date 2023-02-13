import { Outlet } from "react-router-dom";
import { modalSelector, postSelector, updatingSelector, deletingSelector } from '../../store/modules/posts/selector';
import { useSelector } from 'react-redux';
import Navbar from "../../components/Navbar";
import "./index.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='layout'>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;
