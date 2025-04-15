import { Outlet } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Headers />
      <main className="flex flex-col gap-16">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
