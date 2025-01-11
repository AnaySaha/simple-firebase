

import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider} from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const googlrProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googlrProvider)

            .then(result => {
                const loggedInuser = result.user;
                console.log(loggedInuser);
                setUser(loggedInuser);
            })

            .catch(error => {

                console.log(error);
            })     
    }

        const handleGithubSignIn = () => {
            signInWithPopup(auth, githubProvider)
            .then( result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                setUser(loggeduser);
            })

            .catch(error => {

                console.log(error);
            })    
        }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {
                user ? 
                <button onClick={handleSignOut}>Sign Out</button> : 
                <div>
                    <button onClick={handleGoogleSignIn}>Google login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
               
                </div>
            }
            
            
            
            {user &&
                <div>
                    <h3>User: {user.displayName} </h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;