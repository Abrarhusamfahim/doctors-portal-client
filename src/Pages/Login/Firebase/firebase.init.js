import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitAuthentication;