import React, { useState } from "react";
import Input from "../common/Input";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import SignUpPositionSelection from "./SignUpPositionSelection";
import Button from "../common/Button";
import api from "../../api/apiConfig";
import SignUpPhoto from "./SignUpPhoto";
import { fetchData } from "../../api/apiService";
import SignUpErrorMessage from "./SignUpErrorMessage";
import Error from "../common/Error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  position_id: 1,
  photo: undefined,
};

const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default function SignUpForm({ setIsUserRequestNeeded, setPage }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { token } = await fetchData("/token");
        setToken(token);

        const formData = new FormData();
        formData.append("position_id", values.position_id);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("photo", values.photo);

        await fetchData("/users", {
          method: "post",
          data: formData,
          headers: { Token: token, "Content-Type": "multipart/form-data" },
        });

        setPage(1);
        resetForm({ ...initialValues });
        setIsRegistered(true);
        setIsUserRequestNeeded(true);
      } catch (e) {
        setError(e.message);
      }
    },
  });

  const isDisabled = !(formik.isValid && formik.dirty);

  if (error) return <Error error={error} />;

  if (isRegistered)
    return (
      <div>
        <h2>User successfully registered</h2>
        <img
          src="/assets/success-image.svg"
          alt="Successfully registered"
          className="form__image"
        />
      </div>
    );

  const hasNameError = formik.errors.name && formik.touched.name && "error";
  const hasEmailError = formik.errors.email && formik.touched.email && "error";
  const hasPhoneError = formik.errors.phone && formik.touched.phone && "error";

  return (
    <>
      <h1 className="sign-up__heading">Working with POST request</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="input-wrapper">
          <Input
            type="text"
            placeholder="Your name"
            className={`input-wrapper__name ${hasNameError}`}
            {...formik.getFieldProps("name")}
          />
          <SignUpErrorMessage name="name" formik={formik} />

          <Input
            type="email"
            placeholder="Email"
            className={`input-wrapper__email ${hasEmailError}`}
            {...formik.getFieldProps("email")}
          />
          <SignUpErrorMessage name="email" formik={formik} />

          <Input
            type="tel"
            placeholder="Phone"
            className={`input-wrapper__phone ${hasPhoneError}`}
            {...formik.getFieldProps("phone")}
          />
          <SignUpErrorMessage
            name="phone"
            formik={formik}
            withHint="+38 (XXX) XXX - XX - XX"
          />
        </div>

        <SignUpPositionSelection formik={formik} />

        <SignUpPhoto formik={formik} />

        <Button
          type="submit"
          text="Sign up"
          className={`btn ${isDisabled ? "form__disabled" : "form__btn"}`}
          id="submitBtn"
          isDisabled={isDisabled}
        />
      </form>
    </>
  );
}
