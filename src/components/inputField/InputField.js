import { useState } from "react";
import './inputField.scss';

const InputField = ({label, handleValueChange, name, errorMessage, type="text"}) => {

    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
        handleValueChange({
            name: name,
            value: e.target.value
        })
    }


    return (
        <div className="inputContainer">
            <input type={type} value={value}  onChange={handleChange} />
            <label className={value && 'filled'} >
                {label}
            </label>
            {errorMessage ? <p>{errorMessage}</p> : ''}
        </div>
    );
}

export default InputField;