import React, { useState } from "react";
import Input from "../common/Input";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import SignUpPositionSelection from "./SignUpPositionSelection";
import Button from "../common/Button";
import api from "../../apiConfig";
import SignUpPhoto from "./SignUpPhoto";

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

export default function SignUpForm({ setIsUserRequestNeeded }) {
  const [fileName, setFileName] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const tokenResponse = await api.get("/token");
        const token = tokenResponse.data.token;

        setToken(token);

        const formData = new FormData();
        formData.append("position_id", values.position_id);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("photo", values.photo);

        await api.post("/users", formData, {
          headers: { Token: token, "Content-Type": "multipart/form-data" },
        });
        resetForm({ ...initialValues });
        setFileName("");
        setIsUserRequestNeeded(true);
      } catch (e) {}
      // console.log(e);
    },
  });

  const isDisabled = !(formik.isValid && formik.dirty);

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="input-wrapper">
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          className="input-wrapper__name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <Input
          type="email"
          placeholder="Email"
          name="email"
          className="input-wrapper__email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Input
          type="tel"
          placeholder="Phone"
          name="phone"
          className="input-wrapper__phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>

      <SignUpPositionSelection formik={formik} />

      <SignUpPhoto
        formik={formik}
        setFileName={setFileName}
        fileName={fileName}
      />

      <Button
        type="submit"
        text="Sign up"
        className={`btn ${isDisabled ? "form__disabled" : "form__btn"}`}
        id="submitBtn"
        isDisabled={isDisabled}
      />
    </form>
  );
}
