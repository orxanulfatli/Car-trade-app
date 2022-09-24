import { check } from 'express-validator';
const name = check("name", "name is required").not().isEmpty();
const username = check("username", "username is required").not().isEmpty();
const email = check("email", "please provide a valid email address").isEmail();
const password = check("password", "password requires 6 characters minimum").isLength({
    min: 6
});
export const RegisterValidation =[name,username,email,password];
export const LoginValidation = [email,password];