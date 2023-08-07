import './App.scss';
import Home from './page/Home';
import Not from './page/Not';
import Product from './page/Product';
import React, { useEffect, useState } from 'react'
import data from './page/data.json';
import axios from 'axios'
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import ParamItem from './page/ParamItem';




function App() {

  return (
    <BrowserRouter basename='/react-tears'> 
      <div className="wrap">

        <header>
       
          <nav>
            <Link to='/'> Home </Link>
            <Link to='/product'> 상영작 </Link>
            <Link to='/paramItem/code100'> 자세히보기 </Link>
          </nav>

        </header>

        <main>

          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/product' element={ <Product data={data}/> } />
            <Route path='/paramItem/:code' element={ <ParamItem data={data}/>} />
            <Route path='/*' element={ <Not/> } />
          </Routes>
          

        </main>

      </div>
    </BrowserRouter>
    
  );
}

export default App;