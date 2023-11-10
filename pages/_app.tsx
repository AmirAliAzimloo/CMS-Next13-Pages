import React, { FC } from 'react';
import '@/styles/globals.css';
import Sidebar from '@/components/modules/sidebar/Sidebar';
import Navbar from '@/components/modules/navbar/Navbar';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}
  
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;