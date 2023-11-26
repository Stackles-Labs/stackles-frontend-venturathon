import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import StartPage from './components/StartPage/StartPage'
import Form from './components/Form/Form'

function App() {
  
  return (
    <>
   <Header/>
  <StartPage/>
  <Form/>
    </>
  )
}

export default App
