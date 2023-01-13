import React from 'react';
// import {Route, Link } from 'react-router-dom';
import {Route, Link, Switch } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';

import {Navbar, Exchanges , Homepage,Cryptocurrencies, CryptoDetails, News } from './components';

import './App.css';
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Switch>
                <Route exact path='/'>
                  <Homepage />
                </Route>
                <Route exact path='/exchanges'>
                  <Exchanges />
                </Route>
                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
                </Route>
                <Route exact path='/crypto/:coinId'>
                  <CryptoDetails />
                </Route>
                <Route exact path='/news'>
                  <News />
                </Route>
              </Switch>
              {/* <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                </Routes>
                <Routes>
                  <Route path="/exchange" element={<Exchanges />} />
                </Routes>
                <Routes>
                  <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                </Routes>
                <Routes>
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                </Routes>
                <Routes>
                  <Route path="/news" element={<News />} />
                </Routes>
              </BrowserRouter> */}
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
              Cryptomania <br/>
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div>
        </div>
        
    </div>
  )
}

export default App