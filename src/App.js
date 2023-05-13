import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Bag from "./bag/Bag";
import Home from "./Home";
import Itemdetail from "./Itemdetails/Itemdetail";
import Login from "./login/Login";
import { AuthContext } from "./util/AuthContext";
import "./App.css";
function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter basename="/shopping-site-myntra">
      <Routes>
        <Route path="/">
          <Route exact path="/login" element={<Login />} />
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route exact path="/tshirt" element={<Itemdetail />} />
          <Route
            exact
            path="/card"
            element={
              <RequireAuth>
                <Bag />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
