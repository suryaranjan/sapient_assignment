import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputField/InputField";
import { EmailFormat, ErrorMessage } from "../constants/notification";
import ROUTES from "../constants/routes";

const Register = ({}) => {
    
    const navigation = useNavigate();

    const [signupForm, setSignUpForm] = useState({
        firstName: '', firstNameError: '',
        lastName: '', lastNameError: '',
        email: '', emailError: '',
        password: '', passwordError: '',
        confirmPassword: '', confirmPasswordError: ''
    })

    const handleValueChange = (inputVal) => {
        let tempForm = {...signupForm};
        tempForm[inputVal.name] = inputVal.value;
        let result = handleValidation(tempForm);
        setSignUpForm({
            ...result[0]
        })
    } 

    const handleValidation = (tempForm) => {
        let valid = false;
        tempForm.firstNameError = tempForm.firstName == '' ? ErrorMessage.FirstName : '';
        tempForm.lastNameError = tempForm.lastName == '' ? ErrorMessage.LastName : '';
        tempForm.emailError = tempForm.email == '' ? ErrorMessage.Email : '';
        tempForm.passwordError = tempForm.password == '' ? ErrorMessage.Password : '';
        tempForm.confirmPasswordError = tempForm.confirmPassword == '' ? ErrorMessage.ConfirmPassword : '';

        if(tempForm.email != '' && !tempForm.email.match(EmailFormat)){
            tempForm.emailError = ErrorMessage.EmailProper;
        }
        if(tempForm.password != '' && tempForm.confirmPassword != '' && tempForm.password != tempForm.confirmPassword){
            tempForm.confirmPasswordError = ErrorMessage.ConfirmPasswordMatch;
        }
        if(!tempForm.emailError && !tempForm.passwordError){
            valid = true;
        }
        return [tempForm, valid];
    }

    const handleSubmit = () => {
        let result = handleValidation({...signupForm});
        if(result[1]){
            navigation(ROUTES.HOME);
        }else{
            setSignUpForm({...result[0]})
        }
    }

    useEffect(() => {
        setSignUpForm({})
    },[])

    return(
        <div className="signInContainer signUpContainer">
            <div className="signInBanner">
                <h2>SignUp</h2>
                <span>We do not share your personal details with anyone</span>
            </div>
            <div className="signInForm signUpForm">
                <InputField 
                    label={"First Name"}
                    name={'firstName'}
                    errorMessage={signupForm.firstNameError}
                    handleValueChange={handleValueChange}
                />
                <InputField 
                    label={"Last Name"}
                    name={'lastName'}
                    errorMessage={signupForm.lastNameError}
                    handleValueChange={handleValueChange}
                />
                <InputField 
                    label={"Email"}
                    name={'email'}
                    errorMessage={signupForm.emailError}
                    handleValueChange={handleValueChange}
                />
                <InputField 
                    label={"Password"}
                    name={'password'}
                    errorMessage={signupForm.passwordError}
                    handleValueChange={handleValueChange}
                    type={"password"}
                />
                <InputField 
                    label={"Confirm Password"}
                    name={'confirmPassword'}
                    errorMessage={signupForm.confirmPasswordError}
                    handleValueChange={handleValueChange}
                    type={"password"}
                />
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Register;