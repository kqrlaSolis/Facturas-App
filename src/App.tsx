import React from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { AppRouter } from "./routes/AppRouter";
import Navbar from "./components/navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <AppRouter />
    </Layout>
  );
}

export default App;
