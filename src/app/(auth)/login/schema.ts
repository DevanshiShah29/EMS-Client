import * as Yup from "yup";

export const LogInFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be no more than 50 characters")
});