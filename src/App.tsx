import React from 'react';
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import Profile from "./Components/Profile/Profile";
import PasswordRecovery from "./Components/Auth/PasswordRecovery";
import ChangePassword from "./Components/Auth/ChangePassword";
import TestPage from "./Components/TestPage/TestPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<div><h2>Home</h2></div>} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/registration'} element={<Registration />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/password-recovery'} element={<PasswordRecovery />} />
          <Route path={'/change-password'} element={<ChangePassword />} />
          <Route path={'/test-page'} element={<TestPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
