import { useState } from "react";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
import  EditOutlinedIcon  from "@mui/icons-material/EditOutlined";
import {Formik} from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/flexBetween";


const registerSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
    location: yup.string().required('required'),
    occupation: yup.string().required('required'),
    picture: yup.string().required('required'),
});

const loginSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
});

const initalValueRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupayion: '', 
    picture: '',
}

const initalValueLogin = {
    email: '',
    password: '',
};

function Form (){
    const [pageType, setpageType] = useState('login');
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery('(mkin-width:600px)');
    const isLogin = pageType === 'login';
    const isRegister = pageType === 'register';

    const handelFormSubmit = async (value, onsubmitProps) => {};
    return (<formik onSubmit={handelFormSubmit} 
    initialValues={isLogin ? initalValueLogin : initalValueRegister}
    validationSchema={isLogin ? loginSchema : registerSchema}
    >
        {({values, errors, touched, handelchange, handelBlur, handelSubmit, setFieldValue, resetForm, }) => (<form onSubmit={handelSubmit})}

        </formik> )
}

export default Form;