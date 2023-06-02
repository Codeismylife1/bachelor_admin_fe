import React, { useState } from "react";
import "./index.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Search = () => {
    
     function getValueFromInput( ) {
        console.log(tfValue);
     }
    const [tfValue, setTFValue] = useState("My Text");
  return (
    <div className="search">
      <TextField size="small" onChange={(newValue) => setTFValue(newValue.target.value)} id="outlined-basic" label="Outlined" variant="outlined"/>
      <Button onClick={getValueFromInput} variant="contained" >Хайх</Button>
    </div>
  );
};

export default Search;
