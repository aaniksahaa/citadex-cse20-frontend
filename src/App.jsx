import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

import Demo from './Demo'
import Citadex from './Citadex'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="" Component={Citadex}/>
          <Route path="/citadex" Component={Citadex}/>
          <Route path="/demo" Component={Demo}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App


