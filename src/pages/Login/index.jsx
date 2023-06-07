import React,{useContext} from 'react';
 import css from './style.module.scss';
import { LoginSocialGoogle } from "reactjs-social-login";
import Loading from '../../components/Loader';
import GoogleButton from '../../components/GoogleButton';
 import AdminContext from '../../context/AdminContext';
const Login = () => {
    const Actx = useContext(AdminContext)
    const emailLogin = (provider, data)=>{
        Actx.googleOAuth(provider, data)
    }
    return (
<div className={css.container}>
            <p className={css.infoText}>
                    Та өөрийн хувийн и-мэйл хаягаараа нэвтрэн бүртгэлээ
                    баталгаажуулна уу
            </p>
            { Actx.state.loading ? <Loading /> :  <LoginSocialGoogle
            client_id={"279980692223-5tbdqf3elphk3p3ncc6tfkqd7q1iefuh.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => emailLogin(provider, data)}
        onReject={(err) => setError(err)} >
            <GoogleButton/>
            </LoginSocialGoogle> } 
    </div>
    );

}
export default Login;