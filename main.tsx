import App from './app';
import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);