import "./App.css";

// components
import TopNavbar from "./components/Navbar/TopNavbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import Searchbar from "./components/Navbar/Searchbar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <TopNavbar />
      <SubNavbar />
      <Searchbar />
      <Breadcrumb />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
