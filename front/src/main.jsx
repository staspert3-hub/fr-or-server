import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalProvider from './context.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const clientHesh = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={clientHesh}>
        <App />
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
)
