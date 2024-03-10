/* eslint-disable no-unused-vars */
import React from "react";
import './App.css'
import { LOGIN_URL, REGISTER_URL } from "./constants/url";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';

// // Importando los módulos de firebase
// import appFirebase from '../firebase'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// const auth = getAuth(appFirebase)




import "./App.css";

function App() {

  // const [usuario, setUsuario] = useState(null)
  // onAuthStateChanged(auth, (usuarioFirebase) => {
  //   if (usuarioFirebase) {
  //     setUsuario(usuarioFirebase)
  //   }
  //   else {
  //     setUsuario(null)
  //   }
  // })

  return (
      <BrowserRouter>
    
    <Routes>
        <Route path={LOGIN_URL} exact={true} element={<Login />} />


        <Route path={REGISTER_URL} exact={true} element={<Register />} />

        {/* <Route path="*" exact={true} element={<h1> NOT FOUND</h1>} />  */}

     
    </Routes>


</BrowserRouter>

  )
}


export default App
