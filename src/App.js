import React from 'react';
import { UserProvider } from './Providers/UserProvider';
import Layout from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}

export default App;
