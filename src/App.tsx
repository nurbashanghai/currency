// Libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Custom components and functions
import MainContext from './components/context/context';
import Layout from './components/layout/layout';
import MainPage from './components/pages/main-page/main-page';

const App = () => {
  return (
    <>
      <MainContext>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </MainContext>
    </>
  );
}

export default App;
