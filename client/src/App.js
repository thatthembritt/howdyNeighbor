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
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import "./style.css";


// Need to figure out how to set up footer, as it appears to be being called as a page.


  //OLD code that was replaced below
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

const AuthWrapper = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <ApolloProvider client={client}>
      <Navigate to="/dashboard" replace />
      <Router>
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<AuthWrapper isAuthenticated={isAuthenticated} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
        <Footer />
      </>
      </Router>
    </ApolloProvider>
    
  ) : (
    <ApolloProvider client={client}>
      <Navigate to="/home" replace />
      <Router>
      <>
        <Header />
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
          <Route path="/dashboard" element={<Dashboard />} />
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
};

function App() {
  const isAuthenticated = () => {
    if (localStorage.getItem("id_token")) {
      return true;
    } else {
      return false;
    }
  }
  
  return (
    
  );
}

export default App;