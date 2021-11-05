import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import firebaseInitAuthentication from '../Pages/Login/Firebase/firebase.init';

firebaseInitAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    //register user
    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));

    }
    // sign in user
    const LoginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const destination = location?.state?.from || '/';
            history.push(destination);
            setUser(result.user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false))

    }
    // logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=>setIsLoading(false))
    }
    //user state change
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe;
    },[])
    return {
        user,
        registerUser,
        logOut,
        LoginUser,
        isLoading,
        error
    }
};

export default useFirebase;