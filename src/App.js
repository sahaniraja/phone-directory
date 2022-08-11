import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Homepage from './components/Homepage';
import CreateContact from './components/contactlist/CreateContact';
import ViewContact from './components/contactlist/ViewContact';
import UpdateContact from './components/contactlist/UpdateContact';
import DeleteContact from './components/contactlist/DeleteContact';
import ListContact from './components/contactlist/ListContact';

const App =() => {
  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/contact/list'} element={<ListContact/>}/>
      <Route path={'/contact/create'} element={<CreateContact/>}/>
      <Route path={'/contact/update/:contid'} element={<UpdateContact/>}/>
      <Route path={'/contact/view/:contid'} element={<ViewContact/>}/>
      <Route path={'/contact/delete/:contid'} element={<DeleteContact/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
