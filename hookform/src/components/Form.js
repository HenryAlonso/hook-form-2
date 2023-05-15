import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [submissionError, setSubmissionError] = useState("");
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Form submitted successfully!";
        } else {
            return "Please fill out the form!";
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <h2> {formMessage()} </h2>
                <div className='input-container'>
                    <label className='label-text' >First Name: </label>
                    <input type='text' className='input-style' value={firstName} onChange={handleFirstName} />
                    {firstNameError && <p>{firstNameError}</p>}
                </div>
                <div className='input-container'>
                    <label className='label-text'>Last Name: </label>
                    <input type='text' className='input-style' value={lastName} onChange={handleLastName} />
                    { lastNameError && <p>{ lastNameError }</p> }
                </div>
                <div className='input-container'>
                    <label className='label-text'>Email: </label>
                    <input type='text' className='input-style' value={email} onChange={ handleEmail } />
                    { emailError && <p>{ emailError }</p> }
                </div>
                <div className='input-container'>
                    <label className='label-text'>Password: </label>
                    <input type='password' className='input-style' value={password} onChange={ handlePassword } />
                    { passwordError && <p>{ passwordError }</p> }
                </div>
                <div className='input-container'>
                    <label className='label-text'>Confirm Password: </label>
                    <input type='password' className='input-style' value={confirmPassword} onChange={ handleConfirmPassword } />
                    { confirmPasswordError && <p>{ confirmPasswordError }</p> }
                </div>
                <input type='submit' value='Submit Form' />
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Pasword: {password}</p>
            <p>Confirmed Password: {confirmPassword}</p>
        </div>
    );
};
export default Form;