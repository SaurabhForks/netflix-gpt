import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.scss";
import { useNavigate } from "react-router";
import { isPasswordValid, isValidEmail } from "../../utils/validations/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const [userDataError, setUserDataError] = useState({
    email: false,
    password: false,
    emailErrorMsg: "",
    passwordErrorMsg: ""
  })
  const [isDisabled, setIsDisabled] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    const hasErrors = Object.values(userDataError).some(
      (value) => value === true
    );
    const allFieldsFilled = Object.values(userData).every(
      (value) => value.trim() !== ""
    );

    setIsDisabled(hasErrors || !allFieldsFilled);
  }, [userDataError, userData]);

  const hadleValidation = (e) => {
    switch (e.target.name) {

      case "email":
        if (!isValidEmail(e.target.value)) {
          setUserDataError((prevUserDataError) => ({ ...prevUserDataError, email: true, emailErrorMsg: "Please enter a valid email address (e.g., user@example.com)." }))
        } else {
          setUserDataError((prevUserDataError) => ({ ...prevUserDataError, email: false, emailErrorMsg: "" }))
        }
        break
      case "password":
        if (!isPasswordValid(e.target.value)) {
          setUserDataError((prevUserDataError) => ({ ...prevUserDataError, password: true, passwordErrorMsg: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character." }))
        } else {
          setUserDataError((prevUserDataError) => ({ ...prevUserDataError, password: false, passwordErrorMsg: "" }))

        }
        break
      default:
        setUserDataError((prevUserDataError) => (
          {
            ...prevUserDataError,
            email: false,
            password: false
          }
        ))
        break;
    }
  }

  const handleOnchange = (e) => {
    hadleValidation(e);
    setUserData((prevUserData) => ({ ...prevUserData, [e.target.name]: e.target.value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          localStorage.setItem("userData", JSON.stringify(user))
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + "---" + errorMessage);
        });
    }
  }

  const handleLinkRout = () => {
    navigate("/signup");
  }
  return <div className="loginCard">
    <h1>Sign In</h1>
    <form className="login-form block" onSubmit={handleSubmit}>
      <TextField id="outlined-basic"
        label="Email"
        variant="outlined"
        className="textInput"
        onChange={handleOnchange}
        value={userData.email}
        name="email"
        error={userDataError.email}
        helperText={userDataError.emailErrorMsg}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        className="textInput"
        onChange={handleOnchange}
        value={userData.password}
        name="password"
        error={userDataError.password}
        helperText={userDataError.passwordErrorMsg}
      />
      <Button variant="contained" className="w-100" type="submit" disabled={isDisabled}>Login</Button>
    </form>
    <p>New to Netflix? <span onClick={handleLinkRout}>Sign up now.</span> </p>
  </div>;
};

export default Login;
