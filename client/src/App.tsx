import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "flowbite";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
