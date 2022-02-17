import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Fetch from './Pages/Fetch'
import Match from './Pages/Match'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/fetch" element={<Fetch/>}/>
          <Route path="/match" element={<Match/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;