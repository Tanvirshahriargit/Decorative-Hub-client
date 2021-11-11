import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Home/Firebase/Firebase.init";

// initializeAuthentication 
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In Method
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => setError(error.message));
    }

    // handleRegister with Email amd Password
    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // LogIn With email and password
    const hnadleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

            })
            .catch((error) => {
                setError(error.message);
            });
    }
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    //LogOut 
    const logOut = () => {
        signOut(auth).then(() => { })
            .catch((err) => {
                console.log(err);
            });
    }
    return {
        googleSignIn,
        user,
        logOut,
        handleRegister,
        hnadleLogin,





    }
}
export default useFirebase;