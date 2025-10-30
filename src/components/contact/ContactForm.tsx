/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import {
  CircularProgress,

} from "@mui/material";
import { contactInitalValues } from "../common/form/initalValues";
import { contactValidationSchema } from "../common/form/validationSchema";
import TextInput from "../common/form/TextInput";
import ReCAPTCHA from "react-google-recaptcha";

import { useRouter } from "next/navigation";
import axios from "axios";

const ContactForm = ({ title }: { title?: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  const formInuput = [
    {
      type: "text",
      name: "fname",
      label: "First name",
      isRequired: true,
      size: "half",
    },
    {
      type: "text",
      name: "lname",
      label: "Last name",
      isRequired: true,
      size: "half",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      isRequired: true,
      size: "full",
    },
    {
      type: "text",
      name: "mobile",
      label: "Phone",
      isRequired: true,
      size: "full",
    },
    {
      type: "text",
      multiline: true,
      rows: 3,
      name: "message",
      label: "Message",
      size: "full",
    },
  ];

  const onSubmit = async (values: Record<string, any>) => {
    setLoading(true);
    if (verified)
      try {
        const data = await axios.post(
          "https://fpxljq7pggzrlsnoihnpi7l62a0ofqtw.lambda-url.us-west-2.on.aws/send-email",
          {
            ...values,
          }
        );
        if (data?.status === 200) router.push("/thank-you");
        else throw new Error("Something went wrong");
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
      }
    else setLoading(false);
    setLoading(false);
  };
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: contactInitalValues,
      validationSchema: contactValidationSchema,
      onSubmit,
    });

  return (
    <div className="" id="support">
      <h3 className="text-2xl font-bold text-secondary-dark  my-2">
        {title ? title : ""}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-2 gap-1">
          {formInuput?.map((f,) => {
            const { size, name, ...rest } = f;
            return (
              <div key={name} className={size === "full" ? "col-span-2" : ""}>
                <TextInput
                  {...rest}
                  name={name}
                  value={values[name] || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched[name] && Boolean(errors[name])}
                  helperText={(touched[name] && errors[name]) || ""}
                />
              </div>
            );
          })}
        </div>
        <p className=" text-secondary-light text-sm font-medium py-1 leading-6">
         {` Aavya LabTech is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you`}
        </p>
        <div className="my-2">
          <ReCAPTCHA
            sitekey="6LfihCcrAAAAAO9gP_rUhrUlfPkXevFAHsLKDlok"
            onChange={() => {
              setVerified(true);
            }}
            type="image"
          />
        </div>


        <Button
          variant="contained"
          color="secondary"
          type="submit"
          startIcon={
            loading ? (
              <CircularProgress className="text-white" size={10} />
            ) : null
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
