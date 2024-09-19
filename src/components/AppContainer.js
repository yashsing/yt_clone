import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import Login from "./Login";
import Signup from "./Signup";
import SearchResults from "./SearchResults";
import Home from "./Home";
import { Body } from "./Body";
import Head from "./Head";
import { useEffect, useState } from "react";
import { auth } from ".././firebase/firebase"; // Import the auth instance from your Firebase config file
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth"; // Import necessary auth functions
import { login, logout } from "../utils/authSlice";
import { useDispatch } from "react-redux";

const AppContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set Firebase authentication persistence
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setLoading(false);
          if (currentUser) {
            setUser(currentUser);
            dispatch(login());
            console.log("User logged in:", currentUser);
          } else {
            setUser(null);
            console.log("No user logged in");
          }
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
      })
      .catch((error) => {
        setLoading(false);
        dispatch(logout());
        console.error("Error setting persistence:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or a skeleton loader
  }

  return (
    <BrowserRouter>
      <div>
        <Head />
        <Routes>
          <Route path="/" element={user ? <Body /> : <Navigate to="/home" />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="search" element={<SearchResults />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppContainer;
