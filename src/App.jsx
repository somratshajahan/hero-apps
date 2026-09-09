import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

// বিভিন্ন পেজের টাইটেল এবং Favicon পাথ
const pageMeta = {
  "/": {
    title: "Home - HERO.IO",
    favicon: "/favicon-home.ico", // public ফোল্ডারের ইমেজ পাথ
  },
  "/mainApps": {
    title: "Apps - HERO.IO",
    favicon: "/favicon-apps.ico",
  },
  "/installation": {
    title: "Installation - HERO.IO",
    favicon: "/favicon-install.ico",
  },
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [navLoading, setNavLoading] = useState(false);
  const location = useLocation();

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    setNavLoading(true);

   
    const currentMeta = pageMeta[location.pathname] || {
      title: "HERO.IO",
      favicon: "/favicon.ico",
    };

   
    document.title = currentMeta.title;

    
    const faviconElement = document.querySelector("link[rel*='icon']");
    if (faviconElement) {
      faviconElement.href = currentMeta.favicon;
    }

    const timer = setTimeout(() => {
      setNavLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, location.key]);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      {navLoading ? (
        <Loader />
      ) : (
        <main>
          <Outlet />
        </main>
      )}

      <Footer />
    </>
  );
}

export default App;