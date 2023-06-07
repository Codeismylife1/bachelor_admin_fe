import React, { useState } from 'react';



import axios from './../utils/axios.js';

const AdminContext = React.createContext();
const initialState = {
  email:1,
  loading : false,
  imgUrl : 1,
  emailVerified : 1,
  error : null
};

export const AdminStore = (props) => {
  const [state, setState] = useState(initialState);
  
// remember me? ?????data

  const googleOAuth = (provider, data) => {
    setState({
      ...state,
      loading: true,
    });

    
    axios.post('/s-alba/google', {
      provider, data,
      }).then((response) => {
          console.log(response.data)
        let obj = response.data.data;
        setState({
          email : obj["email"],
          loading:false,
          emailVerified : true,
          error:null
        });
        localStorage.setItem("Aemail", obj["email"]);
        localStorage.setItem("EmailV", true);
      })
      .catch((error) => {
        setState({
          ...state,
          loading:false,
          error :"Уучлаарай таны и-мэйл манай вэбд бүртгэлгүй байна...",
          emailVerified : false
        });
      });
  };


  const logout = () => {
    localStorage.removeItem("Aemail");
    localStorage.removeItem("EmailV");  
    setState(initialState);
  };

  const autoLogin = (email, EV)=>{
    localStorage.setItem("Aemail",email);
    localStorage.setItem("EmailV", EV);
    setState({ ...state, email, emailVerified : EV})
  }

  return (
    <AdminContext.Provider
      value={{ state, googleOAuth, logout, autoLogin }} >
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContext;