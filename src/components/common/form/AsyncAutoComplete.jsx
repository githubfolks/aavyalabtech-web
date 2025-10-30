"use client";

/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, styled } from "@mui/material";

import { Label } from "./TextInput";
import { Box } from "@mui/system";
import HightLightText from "./HightLightText";

const CustomInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    border: "none",
    "&:focus": {
      boxShadow: "none",
    },
  },
}));

export default function AsyncAutocomplete(props) {
  const {
    value: valueOption,
    onChangeOption,
    TextInputProps,
    objFilter,
    options,
    loading,
    label,
    isRequired,
    disabled,
    id,
    sx,
    multiple,
    size,
    placeholder,
  } = props;

  const [value, setValue] = React.useState([]);
  const [actualValue, setActualValue] = React.useState("");

  const v = React.useMemo(() => {
    if (typeof valueOption === "number") {
      const a = options.filter(
        // eslint-disable-next-line eqeqeq
        (values) => values?.[objFilter.value] == valueOption
      )[0];

      if (a) {
        return a;
      }
    } else if (typeof valueOption === "string") {
      const num = parseInt(valueOption);
      if (!isNaN(num)) {
        const a = options.filter(
          // eslint-disable-next-line eqeqeq
          (values) => values?.[objFilter.value] == num
        )[0];

        if (a) {
          return a;
        }
      } else {
        const a = options.filter(
          // eslint-disable-next-line eqeqeq
          (values) => values?.[objFilter.value] == valueOption
        )[0];

        if (a) {
          return a;
        }
      }
    }
    return null;
  }, [valueOption, options, objFilter.value]);

  const handleMultipleChange = (n) => {
    let row_id = [];

    if (n !== null) {
      n.map((value) => {
        row_id.push(value[objFilter.value]);
      });
      setValue(n);
    }
    onChangeOption(row_id.toString());
  };

  useEffect(() => {
    if (multiple)
      if (!actualValue) {
        if (valueOption && options.length > 0) {
          const arr = [];
          let a = valueOption.split(",");
          a.map((b) => {
            let temparr = options.filter(
              // eslint-disable-next-line eqeqeq
              (values) => values?.[objFilter.value] == b
            );
            temparr && arr.push(...temparr);
          });

          setActualValue(valueOption);
          setValue(arr);
        }
      }
  }, [valueOption, options, multiple, actualValue, objFilter.value]);

  if (multiple) {
    return (
      <>
        <Box sx={{ my: 1, width: "100%" }}>
          <Label
            htmlFor={id}
            style={{
              paddingBottom: 5,
            }}
          >
            {label}{" "}
            {isRequired ?<Typography display="inline" color="red">*</Typography>: null}
          </Label>
        
          <Autocomplete
            id={id}
            value={value}
            multiple
            onChange={(e, n) => handleMultipleChange(n)}
            getOptionLabel={(option) => option[objFilter.title]}
            options={options}
            disabled={disabled}
            loading={loading}
            size="small"
            fullWidth
            sx={sx}
            renderInput={(params) => (
              <CustomInput
                {...params}
                {...TextInputProps}
                color="secondary"
                fullWidth
                InputLabelProps={{
                  color: "secondary",
                }}
                placeholder={
                  placeholder ||
                  `${value.length >= 1 ? "Select More" : "Select"}`
                }
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            renderOption={(props, option, { inputValue }) => (
              <li {...props} key={option[objFilter.value]}>
                <HightLightText
                  text={option[objFilter.title]}
                  highListText={inputValue}
                />
              </li>
            )}
          />
        </Box>
      </>
    );
  }


  return (
    <>
      <Box sx={{ my: 1, width: "100%" }}>
        <Label
          htmlFor={id}
          style={{
            paddingBottom: 5,
          }}
        >
          {label} {isRequired ? <span className="text-red-600">*</span> : null}
        </Label>
        <Autocomplete
          id={id}
          value={v}
          disabled={disabled}
          onChange={(e, n) =>
            onChangeOption(n !== null ? n[objFilter.value] : "")
          }
          getOptionLabel={(option) => option[objFilter.title]}
          options={options}
          loading={loading}
          size={size || "small"}
          fullWidth
          sx={sx}
          renderInput={(params) => (
            <CustomInput
              {...params}
              {...TextInputProps}
              color="secondary"
              InputLabelProps={{
                color: "secondary",
              }}
              placeholder={placeholder || "Select"}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          renderOption={(props, option, { inputValue }) => (
            <li {...props} key={option[objFilter.value]}>
              <HightLightText
                text={option[objFilter.title]}
                highListText={inputValue}
              />
            </li>
          )}
        />
      </Box>
    </>
  );
}
