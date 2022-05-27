import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {

  // Will run when component first mounts, AND
  // after redirect from Google SignIn
  useEffect(() => {
    async function getUserFromRedirect(){
      const response = await getRedirectResult(auth);
      console.log({'user from redirect':response})
      if (response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getUserFromRedirect();
  }, [])

  const logGoogleUser = async() => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  

  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirec</button>
    </div>
  )

};

export default SignIn;