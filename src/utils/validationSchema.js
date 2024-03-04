import * as Yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];
const REQUIRED_DIMENSIONS = { width: 70, height: 70 };

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(60, "Must be at most 60 characters")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .max(320, "Must be at most 320 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Invalid phone number")
    .required("Required"),
  photo: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test("imageDimensions", "Image must be 70x70 pixels", async (value) => {
      if (value) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = URL.createObjectURL(value);
          img.onload = function () {
            const { naturalWidth, naturalHeight } = img;
            resolve(
              naturalWidth === REQUIRED_DIMENSIONS.width &&
                naturalHeight === REQUIRED_DIMENSIONS.height
            );
          };
          img.onerror = function () {
            reject(new Error("Failed to load the image"));
          };
        });
      }
      return true;
    }),
});
