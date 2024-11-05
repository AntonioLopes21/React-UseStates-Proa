import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"


function AutenticacaoGoogleBtn( {setName, setEmail, setImage, setIsActive} ) {
    return (
        <>
            <GoogleLogin
                onSuccess={(response) => {
                    //optional chain
                    const decoded = jwtDecode(response?.credential)
                    // const name = decoded?.name
                    // const email = decoded?.email
                    

                    //destructure tem que estar igual ao nome do console as props
                    const{name, email, picture} = decoded
                    //props
                    setName(name)
                    setEmail(email)
                    setImage(picture)
                    setIsActive(true)

                }}

            />
                
        </>
    )
}

export default AutenticacaoGoogleBtn