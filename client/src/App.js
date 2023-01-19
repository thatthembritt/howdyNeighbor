// import React, { useState } from "react";
import React from "react";

import {
  ApolloClient, // connection
  InMemoryCache, // cache authentication
  ApolloProvider, // wraps around app component and allows access to graphql
  createHttpLink, // format the authentication link --> used for creating client
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // function :D

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./style.css";

function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if (currentPage === 'Login') {
  //     return <Login />;
  //   }
  //   if (currentPage === 'Signup') {
  //     return <Signup />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Donate') {
  //     return <Donate />;
  //   } else {
  //     return <Home />;
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);
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

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/footer" element={<Footer />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
    // <div>
    //   <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    //   {renderPage()}
    //   <Footer />
    // </div>
  );
}

export default App;