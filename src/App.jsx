import Setup from "./components/PostRequest";
import { ToastContainer } from "react-toastify";
import "./axios/global";

function App() {
  return (
    <main>
      <Setup />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
