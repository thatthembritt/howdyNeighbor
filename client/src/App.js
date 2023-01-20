import React from "react";

import {
  ApolloClient, // connection
  InMemoryCache, // cache authentication
  ApolloProvider, // wraps around app component and allows access to graphql
  createHttpLink, // format the authentication link --> used for creating client
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // function :D

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarLoggedIn from "./components/Navbar/NavbarLoggedIn";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Search from "./components/Search/Search";
import Auth from "./utils/auth";
import "./style.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

console.log(httpLink);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AuthWrapper = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <Navigate to="/search" replace />
  ) : (
    <Navigate to="/home" replace />
  );
};

const Logout = ({isAuthenticated}) => {
  if (isAuthenticated) {
    Auth.logout("id_token")
    return <Navigate to="/home" replace />
  }
}

function App() {
  const isAuthenticated = () => {
    if (localStorage.getItem("id_token")) {
      return true;
    } else {
      return false;
    }
  }
  if (isAuthenticated()) {
    return (
      <ApolloProvider client={client}>
        <Router>
        <>
          <NavbarLoggedIn />
          <Routes>
            <Route
              path="/"
              element={<AuthWrapper isAuthenticated={isAuthenticated} />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/logout" element={<Logout isAuthenticated={isAuthenticated} />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
          <Footer />
        </>
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<AuthWrapper isAuthenticated={isAuthenticated} />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
          <Footer />
        </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;