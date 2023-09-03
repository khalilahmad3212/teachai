import { forwardRef, useRef, useState } from "react"
import GoogleLogin from "react-google-login"

const clientId = '701706349964-qs7l3rc6td3anqm53l8r04ib83aaqdh7.apps.googleusercontent.com'


const Login = () => {

    const [login, setLogin] = useState(false)

    const onSuccess = (res) => {
        console.log('Login Sucess!: ', res);
        setLogin(true)
    }

    const onFailure = (res) => {
        console.log('Login Failed!: ', res);
    }

    return (
        <div className={`absolute ${login ? "-right-20" : "right-0"} opacity-0 top-2 bg-red-400 w-12 overflow-hidden`}>

            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn={true}
            />
        </div>
    )
}

export default Login