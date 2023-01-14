import { signInwithGooglePopUp } from "../../utils/firebase/firebase.utlils"

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInwithGooglePopUp();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn