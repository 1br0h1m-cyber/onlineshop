import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

//loader
import { PulseLoader } from 'react-spinners';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={
          <div className='flex flex-col justify-center items-center h-[95vh]'>
            <PulseLoader color="white" size={40} margin={5} />
            <h1 className='loading'>Loading...</h1>
          </div>
        }>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);