/**
    -------------------------------
            INITIAL SETUP
    --------------------------------
1. visit: console.firebase.google.com
2. create project (skip google analytics)
3. Register app (create congig)
4. install firebase: npm install firebase
5. add config file to your project
6. DANGER: Do not publish or make firebase config to public by
pushing those to github
        ----------------------------------------
                        INTERRATION
        -----------------------------------------
7. Visit: Go to docs > Build > Authentication > Web > Get Started
8. export app from the firebase.config.js file: export default app 
9. Log in. jsx: import getAuth from firebase/auth
10. create const auth = getAuth (app)

        --------------------------------------------
                    AUTH PROVIDER
        --------------------------------------------
11. import googleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider
13. activate sign in method (google, fb, git, )
14. [VITE]: change 127.0.0.1 to localhost

--------------------------------------------------
More Auth Provider
---------------------

1. activate the auth provider (create app, provide redirect url, client id, clint secret)
2.
* */ 