import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React from "react";

export const LangSelect = () => {
    const lang :string = 'Language';
    const langKorean :string = 'Korean';
    const langJapanese :string = 'Japanese';
    const langEnglish :string = 'English';
    const [selectedLanguage, setSelectedLanguage] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event);
        setSelectedLanguage(event.target.value as string);
        console.log(selectedLanguage);
    };

    return (
        <Box sx={{ minWidth: 150, marginRight: 10}}>
            <FormControl fullWidth>
                <InputLabel id="label">{lang}</InputLabel>
                <Select
                    labelId="label"
                    id="demo-simple-select"
                    value={selectedLanguage}
                    label={selectedLanguage}
                    onChange={handleChange}
                >
                    <MenuItem value={langKorean}>{langKorean}</MenuItem>
                    <MenuItem value={langJapanese}>{langJapanese}</MenuItem>
                    <MenuItem value={langEnglish}>{langEnglish}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}