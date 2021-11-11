import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Home/Firebase/Firebase.init";

// initializeAuthentication 
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In Method
    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch((error) => setError(error.message))
            .finally(()=> setLoading(false));
    }

    // handleRegister with Email amd Password
    const handleRegister = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(()=> setLoading(false))
            ;
    }

    // LogIn With email and password
    const handleLogin = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setError("")

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(()=> setLoading(false));
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

    //LogOut 
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => { })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=> setLoading(false));
    }
    return {
        googleSignIn,
        user,
        loading,
        error,
        logOut,
        handleRegister,
        handleLogin,





    }
}
export default useFirebase;