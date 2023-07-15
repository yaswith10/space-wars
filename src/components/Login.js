import React from 'react'
import { useEffect,useState } from 'react'
import jwt_decode from 'jwt-decode';

export const Login = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response){
        let userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById('signIn').hidden = true;   
    }

    let handleSignOut = (event) => {
        setUser({});
        document.getElementById('signInDiv').hidden = false;    
    }

    useEffect(() => {
      /* global google */
      google.account.id.initialize({
        client_id: "369563455735-glphqks8fkv2nnfhutp0qqv062hl52tn.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.account.id.renderButton(
        document.getElementById("signIn"),
        { theme: "outline" , size: "large"}
      );

      google.accounts.id.prompt();
    }, [])
    

  return (
    <div id='Login'>
        <div id="signIn"></div>
    </div>
  )
}
