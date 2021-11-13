import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Home/Firebase/Firebase.init";

// initializeAuthentication 
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);
    //admin state  
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // handleRegister with Email amd Password
    const handleRegister = (email, password, text, location, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result.user);
                setError("")
                // // save user to database
                const newUser = { email, displayName: text }
                setUser(newUser)
                saveUser(email, text)
                // udate from firebase user
                updateProfile(auth.currentUser, {
                    displayName: text
                }).then(() => {

                }).catch((error) => {

                });

                // redict location destionation come
                const destionation = location?.state?.from || '/';
                history.replace(destionation)

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    // Google Sign In Method
    const googleSignIn = (location, history) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                // redict location destionation come
                const destionation = location?.state?.from || '/';
                history.replace(destionation)

                //saveUser database
                const user = result.user;
                saveGoogleUser(user.email, user.displayName)

                setError('')

            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }

    // LogIn With email and password
    const handleLogin = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                // redict location destionation come
                const destionation = location?.state?.from || '/';
                history.replace(destionation)

                setError("")

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [])

    // admin
    useEffect(() => {
        fetch(`https://enigmatic-earth-85911.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsAdmin(data.admin)
            })
    }, [user.email])
    console.log(isAdmin);

    //LogOut 
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => { })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

    // saveUser send database
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://enigmatic-earth-85911.herokuapp.com/users', {
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    // saveUser send database
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://enigmatic-earth-85911.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        googleSignIn,
        user,
        loading,
        isAdmin,
        error,
        logOut,
        handleRegister,
        handleLogin,
    }
}
export default useFirebase;