import React from 'react';
// import {Route, Link } from 'react-router-dom';
import {Route, Link, Switch } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';

import {Navbar , Homepage,Cryptocurrencies, } from './components';

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
                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
                </Route>
              </Switch>
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