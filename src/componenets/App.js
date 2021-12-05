import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../database/useDB';

import Home from './Home';
import Chat from './Chat';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate('/chat')
  }, [user])

  if (loading) {
    return <></>
  }

  return (<>
    <header>

    </header>
    <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/chat" element={
            <ProtectedRoute isAuth={user ? true : false}>
              <Chat />
            </ProtectedRoute>
          }/>
        </Routes>
    </main>
  </>)
}

export default App;