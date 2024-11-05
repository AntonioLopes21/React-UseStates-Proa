import { useState } from 'react'
import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import AutenticacaoGoogleBtn from './Components/AutenticacaoGoogle'



function App() {
  

const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[image, setImage] = useState("")
const[isActive, setIsActive] = useState(false)



  return (
    <>
      <GoogleOAuthProvider clientId='644562500895-d1huqhj4kjs140pj2eqp0jgqfulniq1b.apps.googleusercontent.com'>
        <AutenticacaoGoogleBtn
        setName={setName}
        setEmail={setEmail}
        setImage={setImage}
        setIsActive={setIsActive}
        />
      </GoogleOAuthProvider>



      {isActive ? ( 
      <div>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{email}</p>
      </div>
      ) : (
        ""
      )

      }
    </>
  )
}

export default App
