import {useState, useEffect, useRef} from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//REGEX USER DESCRIPTION
// must start with a small or big letter and then it can have from 7 to 23  characters involving
// small letter, big letter, number and _
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;

//REGEX PASSWORD DESCRIPTION
//must have at least one small letter, one big letter, one digit and one special character
//it can be from 8 to 24 characters long
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register() {
    const userRef = useRef();
    const errRef = useRef();

    //states for user value, validation and focus
    const [user, setUser] = ('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //states for password value, validation and focus
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    //states for matching password value, validation and focus
    const [matchPassword, setMatchPassword] = useState('');
    const [validMatchPassword, setValidMatchPassword] = useState(false);
    const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

    //states for error or cuccess messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('false');

    // useEffect that sets the focus on the user input
    useEffect(() => {
        userRef.current.focus();
    },[])

    // useEffect when validating the user
    useEffect(() => {
        const isValidUser = USER_REGEX.test(user);
        console.log(isValidUser);
        console.log(user);
        setValidUser(isValidUser);
    },[user])

    // useEffect when validating the password and the matching password
    useEffect(() => {
        const isValidPassword = PASSWORD_REGEX.test(password);
        console.log(isValidPassword);
        console.log(password);
        setValidPassword(isValidPassword);
        const arePasswordsMatching = password === matchPassword;
        setValidMatchPassword(arePasswordsMatching);    
    },[password, matchPassword])

    //useEffect for error message
    useEffect(() => {
        setErrorMessage('');
    },[user, password, matchPassword])

  
  
    return (
    <div>
        
    </div>
  )
}

export default Register