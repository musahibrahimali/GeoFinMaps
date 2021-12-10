import React  from 'react';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

function InputField(props) {
    const { name, label, error = null, onChange, value, inputIcon, required, endAdornment, multiline, rows, ...other } = props;

    return (
        <TextField
            required={required || false}
            multiline={multiline || false}
            rows={rows || 0}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {inputIcon}
                    </InputAdornment>
                ),
                endAdornment: (endAdornment),
            }}
            {...(error && { error: true, helperText: error })}
            {...other}
        />
    )
}

export default InputField;
