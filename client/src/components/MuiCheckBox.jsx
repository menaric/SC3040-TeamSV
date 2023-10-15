import React from "react";
import {
    Box,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function MuiCheckBox({ options, onCheckboxChange}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (e) => {
        const optionValue = e.target.value;
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions(selectedOptions.filter((option) => option!=optionValue));
        } else {
            setSelectedOptions([...selectedOptions, optionValue]);
        }
        onCheckboxChange(optionValue);
        console.log("Current selected indexes are ", selectedOptions);
    }

    return (
        <Box>
            <FormControl>
                <FormLabel> Choose desired indexes: </FormLabel>

                <FormGroup>
                        {options.map((option, index) => (
                        <FormControlLabel
                        key={index}
                            label={option}
                            control={
                                <Checkbox
                                    checked={
                                        selectedOptions.includes(option)
                                    }
                                    value={option}
                                    onChange={handleCheckboxChange}
                                />
                            }
                        />
                        ))}
                </FormGroup>
            </FormControl>
            <h1> The current selected indexes are {selectedOptions} </h1>
        </Box>
    );
}

export default MuiCheckBox;
