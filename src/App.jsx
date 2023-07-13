import React, { useRef, useState, useEffect } from 'react';
import './App.css';

import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/analytics';

import { useStoreState } from 'pullstate';
import { UserStore } from "../store.js";


import { auth, firestore } from '/firebase.js'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import ChatLayout from './components/ChatLayout';

// const analytics = getAnalytics(app);


function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      UserStore.update((s) => {
        s.user = user;
      });
    });
    return () => unsubscribe();
  }, []);

  const user = useStoreState(UserStore, s => s.user);


  return (
    <div className="App">
      <section>
        {user ? <ChatLayout /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
  )
}

export default App;
