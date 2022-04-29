import { useState } from "react";

export default function useFormHook(initialState, handelFormSubmit) {
    const [formDetails, setFormDetails] = useState(initialState);

    const handlerFormSubmit = (event) => {
        event.preventDefault();
        handelFormSubmit();

    }

    const handlerChange = (event) => {
        setFormDetails({
            ...formDetails,
            [event.target.name]: event.target.type == "checkbox" ? event.target.checked : event.target.value
        })
    }

    return [
        handlerFormSubmit,
        handlerChange,
        formDetails
    ]

}