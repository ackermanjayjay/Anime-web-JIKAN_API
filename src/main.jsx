import App from './App.jsx'
import * as React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
     <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
     </Router>
  </React.StrictMode>,
)