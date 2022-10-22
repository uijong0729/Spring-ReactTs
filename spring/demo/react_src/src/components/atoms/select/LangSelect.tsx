import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useContext, useState } from "react";
import { LanguageContext } from "../../../provider/AppContext";

export const LangSelect = () => {
    const lang: string = 'Language';
    const langKorean: string = 'Korean';
    const langJapanese: string = 'Japanese';
    const langEnglish: string = 'English';
    const { language, setLanguage } = useContext(LanguageContext);
    const [selectedLabel, setSelecedtLabel] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event);
        const langNum = parseInt(event.target.value) as number;
        setLanguage(langNum);
        console.log(language);
    };

    return (
        <Box sx={{ minWidth: 150, marginRight: 10 }}>
            <FormControl fullWidth>
                <InputLabel id="label">{lang}</InputLabel>
                <Select
                    labelId="label"
                    id="demo-simple-select"
                    label={selectedLabel}
                    onChange={handleChange}>

                    <MenuItem value={0}>{langKorean}</MenuItem>
                    <MenuItem value={1}>{langEnglish}</MenuItem>
                    <MenuItem value={2}>{langJapanese}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}