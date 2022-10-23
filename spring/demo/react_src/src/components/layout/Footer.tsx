import { AppBar, Toolbar } from "@mui/material"
import { height } from "@mui/system"
import styled from "styled-components"

export const Footer = () => {
    return (
        <>
            <AppBar 
                position="fixed" 
                color="default" 
                sx={
                    { top: 'auto', 
                        bottom: 0, 
                        marginBottom: '3px',
                        border: '1px solid gray',
                        boxShadow: '5px 7px #888888' }
                }>

                <Toolbar>@written by euijong.lee</Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}