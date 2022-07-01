import "./App.css";

// components
import TopNavbar from "./components/Navbar/TopNavbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import Searchbar from "./components/Navbar/Searchbar";

function App() {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <TopNavbar />
      <SubNavbar />
      <Searchbar />
    </div>
  );
}

export default App;
