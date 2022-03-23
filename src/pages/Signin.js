import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailFormat, ErrorMessage } from '../constants/notification';
import ROUTES from '../constants/routes';
import InputField from '../components/inputField/InputField';

const SignIn = ({}) => {
    const navigation = useNavigate()
    const[loginForm, setLoginForm] = useState({
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
    })

    const handleValueChange = (inputVal) => {
        let tempForm = {...loginForm};
        tempForm[inputVal.name] = inputVal.value;
        let result = handleValidation(tempForm);
        setLoginForm({
            ...result[0]
        })
    }

    const handleValidation = (tempForm) => {
        let valid = false;
        tempForm.emailError = tempForm.email == '' ? ErrorMessage.Email : '';
        tempForm.passwordError = tempForm.password == '' ? ErrorMessage.Password : '';
        if(tempForm.email != '' && !tempForm.email.match(EmailFormat)){
            tempForm.emailError = ErrorMessage.EmailProper;
        }
        if(!tempForm.emailError && !tempForm.passwordError){
            valid = true;
        }
        return [tempForm, valid];
    }

    const handleSubmit = () => {
        let result = handleValidation({...loginForm});
        if(result[1]){
            navigation(ROUTES.HOME);
        }else{
            setLoginForm({...result[0]})
        }
    }

    return(
        <div className="signInContainer">
            <div className="signInBanner">
                <h2>Login</h2>
                <span>Get access to your Orders, Wishlist and Recommendations</span>
            </div>
            <div className="signInForm">
                <InputField 
                    label={"Email"}
                    name={'email'}
                    errorMessage={loginForm.emailError}
                    handleValueChange={handleValueChange}
                />
                <InputField 
                    label={"Password"}
                    name={'password'}
                    errorMessage={loginForm.passwordError}
                    handleValueChange={handleValueChange}
                    type={"password"}
                />
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default SignIn;