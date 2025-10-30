"use client";

import {
  alpha,
  Box,
  FormHelperText,
  InputBase,
  InputBaseProps,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const CustomInput = styled(InputBase)(({ theme, error, size }) => ({
  "label + &": {
    marginTop: 1,
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: `1px solid ${error ? "red" : "#ced4da"}`,
    fontSize: 12,
    padding: size === "small" ? "5px 6px" : "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(
        error ? theme.palette.error.main : theme.palette.secondary.main,
        0.25
      )} 0 0 0 0.2rem`,
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.secondary.main,
    },
  },
}));

const Label = styled("label")(() => ({
  display: "block",
  color: "#6b7280",
  fontWeight: 600,
}));

interface IProps extends InputBaseProps {
  label?: string;
  helperText?: string | undefined;
  inputFormat?: string;
  isRequired?:boolean
}

export default function TextInput(props: IProps) {
  const { label, error, helperText,isRequired, ...inputProps } = props;

  const idStr = React.useMemo(() => {
    const random = Math.random().toString(36).substring(7);
    return `${props.type}-${random}`;
  }, [props.type]);

  return (
    <Box sx={{ my: 1, width: "100%" }}>
      <Label htmlFor={idStr}>
        {label} {isRequired ? <Typography display="inline" color="red">*</Typography> : null}
      </Label>
      <CustomInput {...inputProps} id={idStr}  fullWidth error={error} />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </Box>
  );
}
export { Label };