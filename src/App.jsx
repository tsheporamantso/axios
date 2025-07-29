import Setup from "./components/PostRequest";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <main>
      <Setup />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
