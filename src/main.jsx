import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './component/context.jsx';


createRoot(document.getElementById('root')).render(
     <ProductProvider>
       <StrictMode>
          <App />
      </StrictMode>,
    </ProductProvider>
)
