import React, { useRef } from "react";
import Input from "../common/Input";

export default function SignUpPhoto({ formik, setFileName, fileName }) {
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    fileInputRef.current.click();
  };
  console.log(fileInputRef.current);
  return (
    <div className="photo">
      <label className="photo__label">
        <div className="photo__container" onClick={handleClick}>
          <div className="photo__btn">Upload</div>
          <div
            className={`photo__input ${fileName ? "has-file" : "no-file"}`}
            data-file-name={fileName}
          />
        </div>
        {formik.touched.photo && formik.errors.photo ? (
          <div>{formik.errors.photo}</div>
        ) : null}

        <Input
          type="file"
          name="photo"
          onChange={(e) => {
            setFileName(e.currentTarget.files[0].name);
            formik.setFieldValue("photo", e.currentTarget.files[0]);
          }}
          className="photo__file"
          fileInputRef={fileInputRef}
        />
      </label>
    </div>
  );
}
