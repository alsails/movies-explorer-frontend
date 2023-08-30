import { useState, useCallback, useEffect } from "react";

export function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}

// export function useFormWithValidation() {
//     const [values, setValues] = useState({});
//     const [errors, setErrors] = useState({});
//     const [isValid, setIsValid] = useState(false);

//     const handleChange = (event) => {
//         const target = event.target;
//         const name = target.name;
//         const value = target.value;

//         setValues({ ...values, [name]: value });

//         console.log('values: ', values, "value: ", value, "isValid: ", isValid)

//         if (name === "name") {
//             const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]*$/;
//             const isNameValid = nameRegex.test(value);
//             const isLengthValid = value.length >= 2 && value.length <= 30;

//             let errorMessage = "";

//             if (!isNameValid) {
//                 errorMessage =
//                     "Имя должно содержать только латиницу, кириллицу, пробел или дефис";
//                 if (!isLengthValid) {
//                     if (value.length < 2)
//                         errorMessage += ` и быть длиной от 2 символов, сейчас ${value.length}`;
//                     if (value.length > 30)
//                         errorMessage += ` и быть длиной до 30 символов, сейчас ${value.length}`;
//                 }
//             } else if (isNameValid && !isLengthValid) {
//                 errorMessage = `Имя должно быть длиной от 2 до 30 символов, сейчас ${value.length}`;
//             }

//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 [name]: errorMessage,
//             }));
//         } else if (name === "email") {
//             const emailRegex =
//                 /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//             const isEmailValid = emailRegex.test(value);

//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 [name]: isEmailValid ? "" : "Email не соответствует формату",
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 [name]: target.validationMessage,
//             }));
//             setIsValid(target.closest("form").checkValidity());
//         }

//         setIsValid(target.closest("form").checkValidity());
//     };

//     useEffect(() => {
//         setIsValid(Object.values(errors).every((error) => error === ""));
//     }, [errors]);

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setValues({ ...values, [name]: value });

        if (name === "name") {
            const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]*$/;
            const isNameValid = nameRegex.test(value);
            const isLengthValid = value.length >= 2 && value.length <= 30;

            let errorMessage = "";

            if (!isNameValid) {
                errorMessage =
                    "Имя должно содержать только латиницу, кириллицу, пробел или дефис";
                if (!isLengthValid) {
                    if (value.length < 2)
                        errorMessage += ` и быть длиной от 2 символов, сейчас ${value.length}`;
                    if (value.length > 30)
                        errorMessage += ` и быть длиной до 30 символов, сейчас ${value.length}`;
                }
            } else if (isNameValid && !isLengthValid) {
                errorMessage = `Имя должно быть длиной от 2 до 30 символов, сейчас ${value.length}`;
            }

            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: errorMessage,
            }));

            setIsValid(
                target.closest("form").checkValidity() &&
                    isNameValid &&
                    isLengthValid
            );
        }
        if (name === "email") {
            const emailRegex =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const isEmailValid = emailRegex.test(value);

            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: isEmailValid ? "" : "Email не соответствует формату",
            }));
            setIsValid(target.closest("form").checkValidity() && isEmailValid);
        }
        if (name !== "email" && name !== "name") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: target.validationMessage,
            }));
            setIsValid(target.closest("form").checkValidity());
        }
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, setValues, errors, isValid, resetForm };
}
