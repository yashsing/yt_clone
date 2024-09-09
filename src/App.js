import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchResults from './components/SearchResults';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });

    return () => unsubscribe(); 
  }, []); 


  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;