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
  
  const rememberMe = ( verify ) => {
    setState({...state, loading: true});
    
    axios 
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        console.log(result.data)
      })
      .catch(response => {
        setState({...state, loading : false });
      });
  };

  const googleOAuth = (token, profile) => {
    setState({
      ...state,
      loading: true,
    });

    if(state.email){
      if(state.email ===  profile.email){
        setState({
          ...state,
          emailVerified:true,
          loading: false,
        })
        localStorage.setItem("Aemail",state.email);
        localStorage.setItem("EmailV", true);
        return ;
      }else{
        setState({
          ...state,
          error : "Буруу и-мэйл хаяг байна",
          emailVerified:false,
          loading: false,
        })
        return ;
      }
    }
    axios.post('/s-alba/google', {
        token,
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
      value={{ state, rememberMe, googleOAuth, logout, autoLogin }} >
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContext;