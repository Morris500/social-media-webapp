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
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const isLogin = pageType === 'login';
    const isRegister = pageType === 'register';

    const handelFormSubmit = async (value, onsubmitProps) => {};
    return (<formik onSubmit={handelFormSubmit} 
    initialValues={isLogin ? initalValueLogin : initalValueRegister}
    validationSchema={isLogin ? loginSchema : registerSchema}
    >
        {({values, errors, touched, handelchange, handelBlur, handelSubmit, setFieldValue, resetForm, }) => (
            <form onSubmit={handelSubmit}>
                <Box display='grid' gap= '30px' gridTemplateColumns='repeat(4, minmax
                (0, 1fr))'
                sx={{'& > div': {gridColumn: isNonMobile ? undefined : 'span4'},
                }}>
                    {isRegister && (
                        <>
                        <TextField label='First Name' onBlur={handelBlur} onChange={handelchange} value={values.firstName} name='firstName' error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName} sx={{gridColumn: 'span 2'}} 
                        />
                        <TextField label='Last Name' onBlur={handelBlur} onChange={handelchange} value={values.lastName} name='lastName' error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName} sx={{gridColumn: 'span 2'}} 
                        />
                        <TextField label='Location' onBlur={handelBlur} onChange={handelchange} value={values.location} name='location' error={Boolean(touched.location) && Boolean(errors.location)}
                        helperText={touched.location && errors.location} sx={{gridColumn: 'span 2'}} 
                        />
                        <TextField label='Occupation' onBlur={handelBlur} onChange={handelchange} value={values.occupation} name='occupation' error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                        helperText={touched.occupation && errors.occupation} sx={{gridColumn: 'span 2'}} 
                        />
                        <Box gridColumn='span 4' border={'1px solid ${palette.neutral.medium}'}
                        borderRadius='5px' p='1rem'>
                            <Dropzone acceptedFiles='.jpg,.jped,.png' multiple={false} onDrop={(acceptedFiles) => setFieldValue('picture', acceptedFiles[0])} >
                                {({getRootProps, getInputProps}) => (
                                    <Box {...getRootProps()} border={'2px dashed ${palette.primary.main}'} p='1rem' sx={{'&:hover': {cursor: 'pointer'}}}>
                                        <input {...getInputProps()} />
                                    </Box>
                                )}
                            </Dropzone>
                        </Box>
                        </>
                    )}
                </Box>
            </form>
    )}

        </formik> )
}

export default Form;