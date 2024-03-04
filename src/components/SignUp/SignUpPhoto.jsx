import React, { useRef } from "react";
import Input from "../common/Input";
import SignUpErrorMessage from "./SignUpErrorMessage";
import truncateText from "../../utils/truncateText";

export default function SignUpPhoto({ formik }) {
  const fileInputRef = useRef(null);
  const fileName = formik.values.photo ? formik.values.photo.name : "";

  const handleClick = (e) => {
    e.preventDefault();

    fileInputRef.current.click();
  };

  const hasError = formik.errors.photo && formik.touched.photo && "error";

  return (
    <div className="photo">
      <label className="photo__label">
        <div className={`photo__container`} onClick={handleClick}>
          <div className={`photo__btn ${hasError}`}>Upload</div>
          <div
            className={`photo__input ${hasError} ${
              fileName ? "has-file" : "no-file"
            }`}
            data-file-name={truncateText(fileName, 15)}
          />
        </div>
        <SignUpErrorMessage name="photo" formik={formik} />

        <Input
          type="file"
          name="photo"
          onChange={(e) => {
            formik.setFieldTouched("photo");
            formik.setFieldValue("photo", e.currentTarget.files[0]);
          }}
          className="photo__file"
          fileInputRef={fileInputRef}
        />
      </label>
    </div>
  );
}
