import AnimeListComponent from "./components/ListAnime";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <AnimeListComponent></AnimeListComponent>
    </>
  );
}

export default App;
