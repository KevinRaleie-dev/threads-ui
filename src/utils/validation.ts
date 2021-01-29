import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup.string().email().min(3).max(255).required().label('Email'),
    username: yup.string().min(2).max(100).required().label('Username'),
    password: yup.string().min(6).max(255).required().label('Password')
});