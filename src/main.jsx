import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from './router-location-hash';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider>
            <App />
        </RouterProvider>
    </StrictMode>
);
