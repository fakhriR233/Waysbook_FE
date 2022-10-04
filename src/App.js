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
import { Route, Routes, useNavigate } from "react-router-dom";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import PurchasedBookDetail from "./components/Profile/PurchasedBookDetail";

function App() {
  // const isAdmin = false;
  // const isLogin = true;

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  let Navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  console.log(state);

  useEffect(() => {
    if (state.isLogin === false) {
      Navigate("/");
    } else {
      if (state.user?.status === "admin") {
        Navigate("/listtransactions");
      } else if (state.user?.status === "user") {
        Navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };
      const response = await API.get("/check-auth", config);

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      console.log(response);

      let payload = response.data.data;
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <div className="App">
        {state?.user?.status === "admin" ? (
          <NavbarAdmin />
        ) : (
          <Navbar isLogin={state?.isLogin} />
        )}
        <Routes>
          <Route path="/" exact element={<HomePages />} />
          <Route path="/book-detail/:id" exact element={<BookDetail />} />
          <Route
            path="/book-purchased/:id"
            exact
            element={<PurchasedBookDetail />}
          />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/complain" exact element={<ComplainUser />} />
          <Route path="/listtransactions" exact element={<ListTransaction />} />
          <Route path="/addBook" exact element={<AddBook />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
