'use client'
import React, { createContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Event } from '@mui/icons-material';

const validationSchema = Yup.object({
    name: Yup.string().min(2, 'tooshort').max(50, 'toolong').required('Please enter your name'),
    email: Yup.string().email('Invalid email').required('Please enter a valid email'),
    subject: Yup.string().min(2, 'tooshort!').max(80, 'toolong').required('Please enter your subject'),
    message: Yup.string().min(2, 'tooshort!').max(100, 'toolong').required('Please enter your subject')

})


export default function Form() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values,Event) => {
            Event.preventDefault();
            console.log(values, 'validation');
            alert(JSON.stringify(values));
        }
    })
    // console.log(initialValues);
    return (
        <form onSubmit={formik.handleSubmit}>
        <Card sx={{ minWidth: 350 ,padding:'50px'}}>
            <h2 className='text-bold'>Get In Touch</h2>
         
          <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Your name" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name} name='name' type='name'/>
                {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}<br />
                <TextField id="outlined-basic" label="Your email" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.email} name='email' type='email' />
                {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}<br />
                <TextField id="outlined-basic" label="Your subject" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.subject} name='subject' type='subject' />
                {formik.touched.subject && formik.errors.subject && <div className='text-danger'>{formik.errors.subject}</div>}<br />
                <TextField id="outlined-basic" label="Your message" variant="outlined" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.message} name='message' type='message' />
                {formik.touched.message && formik.errors.message && <div className='text-danger'>{formik.errors.message}</div>}<br />
                <button type="submit" class="default-btn boxed-btn">Submit</button>
            </Box>

          
        </Card>
        </form>
    );
}