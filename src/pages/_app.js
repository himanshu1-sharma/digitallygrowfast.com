import Layout from '@/components/Cookies/Layout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {

  const [cookie, setMessage] = useState(false);


  useEffect(() => {
    // Delayed function execution
    const timer = setTimeout(() => {
      setMessage(true);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {cookie &&
        <Layout />
      }
      <ScrollToTop>
        <Component {...pageProps} />
      </ScrollToTop>
    </>
  )
}
