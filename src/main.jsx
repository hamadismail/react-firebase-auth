import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/Routes';
import AuthProvides from './providers/AuthProvides';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvides>
      <RouterProvider router={router} />
    </AuthProvides>
  </StrictMode>
);
