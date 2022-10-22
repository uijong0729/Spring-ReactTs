import { TextFieldProps } from "@mui/material";
import React, { ReactNode } from "react";

export type onSubmit = () => void;

export type BtProps = {
    children?: ReactNode;
    onClick: React.MouseEventHandler;
};

export type DialProps = {
    children?: ReactNode;
    title: string;
    contents: string;
    field: TextFieldProps;
    buttonName: string;
    onSubmit: onSubmit;
}

export type DialogProps = {
    children?: ReactNode;
    title: string;
    contents: string;
    buttonName: string;
    onSubmit: onSubmit;
}