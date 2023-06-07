import {useEffect, useContext} from 'react'
import {Route, Routes ,Navigate } from "react-router-dom";

import Login from "../pages/Login";
import List from "../pages/List"
import Single from "../pages/Single" 
import New from "../pages/New"
import Schools from "../pages/Schools";
import SchoolSingle from "../pages/Schools/[SingleId]";
import Programs from "../pages/Programs";
import Major from "../pages/Major";
import ToComis from "../pages/ToComis";
import ViewComis from "../pages/ViewComis";
import Graphics from "../pages/Graphics";
import Students from "../pages/Students";

import Home from "../pages/Home";
import AdminContext from './../context/AdminContext';
export default function Root() {
  const Actx = useContext(AdminContext)
  useEffect(() => {
    const burtgel_Id = localStorage.getItem("burtgel_Id");
    const email = localStorage.getItem("email");
    const emailVerified = localStorage.getItem("EV");
    // if (burtgel_Id && email) {
    //   Ectx.autoLogin(burtgel_Id, email, emailVerified)
    // }
  }, [])
  return (
    <Routes >
       {(Actx.state.emailVerified && Actx.state.email && Actx.state.imgUrl ) ? ( <Route path="/">
              <Route index element={<Home/> } />          
              <Route path="schools" element={<Schools />} />
              <Route path="programs" element={<Programs />} />
              <Route path="major" element={<Major />} />
              <Route path="toComis" element={<ToComis />} />
              <Route path="students" element={<Students />} />
              <Route path="viewComis" element={<ViewComis />} />
              <Route path="graphics" element={<Graphics />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="schools">
                <Route index element={<Schools />} />
                <Route path=":schoolId" element={<SchoolSingle />} />
              </Route>
            </Route>) : <Route path="*" element={<Login />} />} 
    </Routes>
  )
}
