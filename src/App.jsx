import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List"
import Single from "./pages/Single" 
import New from "./pages/New"
import Schools from "./pages/Schools";
import SchoolSingle from "./pages/Schools/[SingleId]";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="schools" element={<Schools />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="schools">
              <Route index element={<Schools />} />
              <Route path=":schoolId" element={<SchoolSingle />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
