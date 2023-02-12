import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeFailure } from "../../store/modules/posts/actions";
import { errorSelector } from '../../store/modules/posts/selector';

import "./index.css";

const Snackbar = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();


  return ReactDOM.createPortal(
    <div className="snackbar__container">
      <div className="snackbar__label">{error.message || "Error Happened"}</div>
      <div className="snackbar__dismiss" onClick={() => dispatch(removeFailure())}>
        &times;
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Snackbar;