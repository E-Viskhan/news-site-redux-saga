import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPathname } from "./redux/actions/actionCreator";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPathname(pathname));
  }, [pathname, dispatch]);

  return (
  <>
    <Header />
    <main>
      <Outlet/>
    </main>
    <Footer />
  </>
)};

export default App;