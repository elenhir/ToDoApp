import React, { useState } from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import ToDoForm from './ToDoForm';
import ToDoComponent from './ToDoComponent';


function Layout() {
  const [showToDoForm, setShowToDoForm] = useState(false);

  const handleOpen = () => setShowToDoForm(true);
  const handleClose = () => setShowToDoForm(false);

  return (
    <div>
      <Header />
      <Toolbar />
      <ToDoForm />
      <ToDoComponent />
    </div>
  );
}

export default Layout;
