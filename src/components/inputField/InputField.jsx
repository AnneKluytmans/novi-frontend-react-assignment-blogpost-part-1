import './InputField.css'

function InputField( { label, type, id, name, register, validation, error } ) {
    return (
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                {...register(name, validation)}
            />
            {error && <p className="form-error-message">{error.message}</p>}
        </div>
    );
}

export default InputField