import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/Homepage';
import CreateContact from './components/contactlist/CreateContact';
import ViewContact from './components/contactlist/ViewContact';
import UpdateContact from './components/contactlist/UpdateContact';
import ListContact from './components/contactlist/ListContact';

const App =() => {
  return (
    <React.Fragment>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/contacts'} element={<ListContact/>}/>
      <Route path={'/contacts/create'} element={<CreateContact/>}/>
      <Route path={'/contacts/edit/:ContId'} element={<UpdateContact/>}/>
      <Route path={'/contacts/view/:ContId'} element={<ViewContact/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
