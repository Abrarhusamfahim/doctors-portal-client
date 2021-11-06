import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , updateProfile  } from "firebase/auth";
import firebaseInitAuthentication from '../Pages/Login/Firebase/firebase.init';

firebaseInitAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    //register user
    const registerUser = (email, password,name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            const newUser = {email, displayName: name}
            setUser(newUser)
            //post user to database
            saveUser(email, name, 'POST')
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
                setError(error.message);
              });
        
          setError("");
          history.replace('/');
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
            history.replace(destination);
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

    //google with sign in
    const googleWithSignIn = (location, history)=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
           setUser(result.user);
           //update user to database
           saveUser(result.user.email, result.user.displayName, 'PUT')
           setError("")
        }).catch((error) => {
           setError(error.message);
        })
        .finally(()=> setIsLoading(false))

    }

    //save user
    const saveUser = (email, displayName, method)=>{
        const user = {email, displayName}
        fetch('http://localhost:5000/users',{
            method: method,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
    }
    return {
        user,
        registerUser,
        logOut,
        LoginUser,
        googleWithSignIn,
        isLoading,
        error
    }
};

export default useFirebase;