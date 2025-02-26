import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { AppRouter } from "./routes/AppRouter";
import Navbar from "./components/navbar";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {

  const user = useSelector((state:any) => state.user);

  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    if(user.id === 0) {
      setIsLoged(false);
    }
    else {
      setIsLoged(true);
    }
  }, [user]);
  
  return (
    <BrowserRouter>
    <Layout>
      {isLoged ? <Navbar /> : <></>}
      <AppRouter />
    </Layout>
    </BrowserRouter>
  );
}

export default App;
