import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  //<React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { isClosable:'true', duration: 3000, position:'top-right', colorScheme:'whatsapp' } }}>
      <App />
    </ChakraProvider>
  //</React.StrictMode>,
)