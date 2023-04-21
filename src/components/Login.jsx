import "../styles/Login.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import logo from "./assets/if-remove-preview.png"

export default function Login(){
    <div className="Container" >
        <div>
            <img src={logo} alt="Logo"/>
            <p>Bem vindo de volta</p>
            <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
        </div>
    </div>
}


