import { useState } from "react";
import "./App.css";
import { BrowserRouter,} from "react-router-dom";
import Root from './routes/';
import { AdminStore } from "./context/AdminContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <AdminStore>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </AdminStore>
  );
}

export default App;
