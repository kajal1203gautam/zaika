'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Country from '@/app/components/Country';



export default function SignIn() {
    return (

        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-5">
                        <img src="/images/signin.jpg" alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7">
                    <div className="card border-0 p-5 shadow-lg">
                        <form>
                            <div className="container">
                                <h4>Register</h4>
                                <p>Please fill in this form to create an account.</p>
                               <div className="row">
                                <div className="col-lg-6">
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '250px' },
                                    }} noValidate  autoComplete="off" >
                                    <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                                </Box>
                                </div>
                                <div className="col-lg-6">
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '250px'},
                                    }} noValidate  autoComplete="off" >
                                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                                </Box>
                                </div>
                               </div>
                               <div className="row">
                                <div className="col-lg-6">
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '250px' },
                                    }} noValidate  autoComplete="off" >
                                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                                </Box>
                                </div>
                                <div className="col-lg-6">
                                <Country />
                                </div>
                               </div>
                              
                               <div className="row">
                                <div className="col-lg-6">
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '250px' },
                                    }} noValidate  autoComplete="off" >
                                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                                </Box>
                                </div>
                                <div className="col-lg-6">
                                <Box component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '250px' },
                                    }} noValidate  autoComplete="off" >
                                    <TextField id="outlined-basic" label="confirmed Password" variant="outlined" />
                                </Box>
                                </div>
                               </div>
                               <div className="form-check">
                               <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">By creating an account you agree to our <a href="#">Terms & Privacy</a></label>
                               </div>
                                <button type="submit" className="registerbtn form-control">Register</button>
                            </div>

                            <div className="container signin">
                                <p>Already have an account? <a href="#">Sign in</a>.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}