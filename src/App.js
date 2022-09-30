import "./App.css";
import HomePages from "./pages/user/HomePages";
import BookDetail from "./pages/user/BookDetail";
import Profile from "./pages/user/Profile";
import Cart from "./pages/user/Cart";
import Navbar from "./components/Nav/Navbar";
import ComplainUser from "./pages/user/ComplainUser";
import NavbarAdmin from "./components/Nav/NavbarAdmin";
import ListTransaction from "./pages/admin/ListTransaction";
import AddBook from "./pages/admin/AddBook";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AddBook />
    </div>
  );
}

export default App;
