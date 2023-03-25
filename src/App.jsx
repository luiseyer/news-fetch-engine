// import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Home, News } from './components/'

export function App () {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />}>
          <Route path=':id' />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}
