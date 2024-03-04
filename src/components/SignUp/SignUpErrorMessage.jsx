import React from "react";

export default function SignUpErrorMessage({
  withTouched = true,
  name,
  formik,
}) {
  if (withTouched) {
    return (
      formik.touched[name] &&
      formik.errors[name] && <p className="error-msg">{formik.errors[name]}</p>
    );
  }

  return (
    formik.errors[name] && <p className="error-msg">{formik.errors[name]}</p>
  );
}
