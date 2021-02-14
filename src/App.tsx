import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/modules/Header'
import MainPage from './views/MainPage/'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route component={MainPage} path="/" exact />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
