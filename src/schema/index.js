import * as yup from "yup";

export const contactSchema = yup.object().shape({
    
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Please enter a  valid email").required("Email is required"),
    message: yup.string().required("Please enter a message"),
    
})