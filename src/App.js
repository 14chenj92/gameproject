import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Hangman from './pages/Hangman';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Homepage />}
              />
              <Route 
                path="/hangman"
                element={<Hangman />}
              />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
