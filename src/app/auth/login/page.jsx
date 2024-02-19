import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Login() {
    return (
        <>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/images/login.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-lg p-5">
                            <form>
                                <div className="container">
                                    <h4>Login</h4>
                                    <p>Please fill in this form to create an account.</p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Box component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '300px' },
                                                }} noValidate autoComplete="off" >
                                                <TextField id="outlined-basic" label="User Name" variant="outlined" />
                                            </Box>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Box component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '300px' },
                                                }} noValidate autoComplete="off" >
                                                <TextField id="outlined-basic" label="Password" variant="outlined" />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">By creating an account you agree to our <a href="#">Terms & Privacy</a></label>
                                    </div>
                                    <button type="submit" className="registerbtn form-control">Login</button>
                                </div>

                                <div className="container signin">
                                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}