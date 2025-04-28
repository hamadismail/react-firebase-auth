import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Spiner from '../components/ui/Spiner';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Navbar />
      {isNavigating ? (
        <Spiner />
      ) : (
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Root;
