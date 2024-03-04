import React, { useRef } from "react";
import Input from "../common/Input";

export default function SignUpPhoto({ formik }) {
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    fileInputRef.current.click();
  };

  return (
    <div className="photo">
      <label className="photo__label">
        <div className="photo__container" onClick={handleClick}>
          <div className="photo__btn">Upload</div>
          <div className="photo__input" />
        </div>
        {formik.touched.photo && formik.errors.photo ? (
          <div>{formik.errors.photo}</div>
        ) : null}

        <Input
          type="file"
          name="photo"
          onChange={(e) => {
            formik.setFieldValue("photo", e.currentTarget.files[0]);
          }}
          className="photo__file"
          fileInputRef={fileInputRef}
        />
      </label>
    </div>
  );
}
