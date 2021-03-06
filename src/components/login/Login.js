import React, { useState } from 'react';
import './Login.css';
import firebaseConfig from '../../firebaseConfig';
import {useNavigate  } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../redux/actions/CartAction';
import { connect } from 'react-redux';


const app = initializeApp(firebaseConfig);

const Login = (props) => {

    const {user,setUser}=props;
    console.log(props)

    let navigate = useNavigate();

    const [user2, setUser2] = useState({
        name: '',
        email: '',
        password: '',
        msg: ''
    });
    const [loginFlag,setLoginFlag]=useState(false);



    const inputHandler = (e) => {

        if (e.target.name === 'email') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                const newUserEmail = { ...user2, email: e.target.value };
                setUser2(newUserEmail);
            }
        }
        //validate password
        else if (e.target.name === 'password') {
            const newPassword = { ...user2, password: e.target.value };
            setUser2(newPassword);

        }
        else {
            const newName = { ...user2, name: e.target.value };
            setUser2(newName);

        }

    }

    const loginHandler=()=>{
        setLoginFlag(!loginFlag);
    }
    const loginSubmitHandler=()=>{
        
        if (user2.email && user2.password ) {
            
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user2.email, user2.password)
          .then((userCredential) => {
            const newUser = { ...user2, msg: 'login successfull' };
            setUser(newUser);
            navigate('/checkout');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const newUser = { ...user2, msg: errorMessage };
            setUser(newUser);

            console.log(errorMessage)
          });}}
    const signupHandler = () => {

        if (user2.email && user2.password && user2.name) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user2.email, user2.password)
                .then((userCredential) => {
                    
                    const newUser = { ...user2, msg: 'signup successfull' };
                    //setUser(newUser);
                    navigate('/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const newUser = { ...user2, msg: errorMessage };
                    setUser(newUser);

                    // ..
                });
        }
    }

    const signUpToogle=()=>{
        console.log('signUpToogle');
        setLoginFlag(!loginFlag)
    }
    return (
        <div className='loginArea'>
            {
                !loginFlag && 
                <>
                     <label for="fname">Name:</label><br />
            <input type="text" id="name" name="name" onChange={inputHandler} /><br />
                </>
            }

           
            <label for="lname">Email:</label><br />
            <input type="text" id="email" name="email" onChange={inputHandler} /><br />
            <label for="lname">password</label><br />
            <input type="text" id="password" name="password" onChange={inputHandler} /><br /><br />
            
            <div className='signupButtonArea'>
                {
                    loginFlag ? 
                    <>
                    <input type="submit" value="Login" onClick={loginSubmitHandler} />
                     <input className='newRegButton' type="submit" onClick={signUpToogle} value="New Registration" />
                    </>
                    
                     :
                    <>
                    <input className='signUpButton' type="submit" onClick={signupHandler} value="Sign Up" />
                <input className='haveAccount' type="submit" value="Already Have an Account" onClick={loginHandler} /><br />

                    </>
                }
                
            </div>

            <input className='googleSign' type="submit" value="Google Sign Up"  /> <br />

            {user.msg}

        </div>
    );
};


const mapStateToProps = (state, ownProps) => {

    return {
        cart:state.cart,
            user:state.user        
    }
}
const mapDispatchToProps = {
    // ... normally is an object full of action creators
    
    setUser:setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;