import React from "react";

export default function SignUpErrorMessage({ name, formik, withHint }) {
  const isError = formik.touched[name] && formik.errors[name];

  if (!isError && withHint) return <p className="message hint">{withHint}</p>;

  return isError && <p className="message">{formik.errors[name]}</p>;
}
