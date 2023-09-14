import styles from "../style/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { resetPasswordValidation } from "../helper/validate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values.password);
    },
  });

  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex-col items-center ">
            <h4 className="text-4xl font-bold">Reset</h4>
            <span className="mx-auto text-gray-500 w-2/4 block ">
              Enter new password
            </span>
          </div>
          <form className="py-1 mt-16" onSubmit={formik.handleSubmit}>
            <div className="texbox">
              <input
                className={styles.text_box}
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="New Password"
              />
              <br />
              <input
                className={styles.text_box}
                type="text"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                placeholder="Repeat Password"
              />

              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
