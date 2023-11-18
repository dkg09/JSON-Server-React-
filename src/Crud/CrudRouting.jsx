import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddUser from './AddUser'
import EditUser from './EditUser'
import FetchUser from './FetchUser'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrudRouting = () => {
  return (
    <>
     <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<FetchUser/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>         
        </Routes>
      </Router>
    </>
  )
}

export default CrudRouting