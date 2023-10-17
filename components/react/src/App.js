import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout/Layout";
import Slider from "./pages/slider/Slider";
import Error from "./pages/error/Error";
function App() {
  const paths = {
    home: <Layout />,
    slider: <Slider />,
  };
  const slug = window.location.href.split("?");
  return (
    <>
      {slug !== "" && paths.hasOwnProperty(slug[1]) ? (
        paths[slug[1]]
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
