import React from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <Layout>
      <AppRouter/>
    </Layout>
  );
}

export default App;
