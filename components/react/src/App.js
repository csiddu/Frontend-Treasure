import "./App.css";
import Layout from "./pages/layout/Layout";
import Slider from "./pages/slider/Slider";
import Error from "./pages/error/Error";
import Pagination from "./pages/pagination/Pagination";
function App() {
  const paths = {
    home: <Layout />,
    slider: <Slider />,
    pagination: <Pagination />,
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
