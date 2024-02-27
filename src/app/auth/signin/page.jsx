'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Country from '@/app/components/Country';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';



export default function SignIn() {
    const [value, setValue] = React.useState('');
    const minLength = 12;
    const handleSubmit = async (event) => {
        event.preventDefault();

        const api_url = 'https://webprotec.org/ecommerce/api/v1/register';

        const payload = {
            full_name: "string",
            email: "string",
            username: "string",
            password: "string",
            country_id: "Number",
            country_code: "string"
        }

        try {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`HTTP error status:${response.status}`)
            }
            const data = await response.json();
            console.log('Registation successful', data);
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (

        <div className="container pt-3">
            <div className="row">
                <div className="col-lg-5">
                    <img src="/images/signin.jpg" alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7">
                    <div className="card border-0 p-5 shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="container">
                                <h4>Register</h4>
                                <p>Please fill in this form to create an account.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Box component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '210px' },
                                            }} noValidate autoComplete="off" >
                                            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                                        </Box>
                                    </div>
                                    <div className="col-lg-6">
                                        <Box component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '210px' },
                                            }} noValidate autoComplete="off" >
                                            <TextField id="outlined-basic" label="User Name" variant="outlined" />
                                        </Box>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Box component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '210px' },
                                            }} noValidate autoComplete="off" >
                                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                                        </Box>
                                    </div>
                                    <div className="col-lg-6">
                                        <Country />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <Stack
                                            spacing={0.5}
                                            sx={{
                                                '--hue': Math.min(value.length * 10, 120),
                                            }}
                                        >
                                            <Input
                                                type="password"
                                                placeholder="Type in here…"
                                                startDecorator={<Key />}
                                                value={value}
                                                onChange={(event) => setValue(event.target.value)}
                                            />
                                            <LinearProgress
                                                determinate
                                                size="sm"
                                                value={Math.min((value.length * 100) / minLength, 100)}
                                                sx={{
                                                    bgcolor: 'background.level3',
                                                    color: 'hsl(var(--hue) 80% 40%)',
                                                }}
                                            />
                                            <Typography
                                                level="body-xs"
                                                sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
                                            >
                                                {value.length < 3 && 'Very weak'}
                                                {value.length >= 3 && value.length < 6 && 'Weak'}
                                                {value.length >= 6 && value.length < 10 && 'Strong'}
                                                {value.length >= 10 && 'Very strong'}
                                            </Typography>
                                        </Stack>

                                    </div>
                                    <div className="col-lg-6">
                                        <Box component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '210px' },
                                            }} noValidate autoComplete="off" >
                                            <TextField id="outlined-basic" label="confirmed Password" variant="outlined" />
                                        </Box>
                                    </div>
                                </div>
                                <div className="form-check pt-2 pb-3">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">By creating an account you agree to our <a href="#">Terms & Privacy</a></label>
                                </div>
                                <button type="submit" className="registerbtn form-control">Register</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}