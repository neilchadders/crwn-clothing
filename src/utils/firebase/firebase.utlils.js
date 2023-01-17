import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInnWithPopup,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN2I9-MKLhFYN-Yet_oJUvAjAS9hNIoVE",
    authDomain: "crwn-clothing-6ae24.firebaseapp.com",
    projectId: "crwn-clothing-6ae24",
    storageBucket: "crwn-clothing-6ae24.appspot.com",
    messagingSenderId: "1064364712427",
    appId: "1:1064364712427:web:09173ba3730fb228e4b9ae"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInwithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};