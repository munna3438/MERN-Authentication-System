import { Link } from "react-router-dom";
import styles from "../style/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values.otp);
    },
  });

  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex-col items-center mb-12">
            <h4 className="text-4xl font-bold">Recovery</h4>
            <span className="mx-auto text-gray-500 w-2/4 block ">
              Enter OTP to recover password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <span className="text-gray-500 my-4 block">
              Eter 6 digit OPT sent to your email address
            </span>
            <div className="texbox">
              <input
                className={styles.text_box}
                type="text"
                name="otp"
                value={formik.values.otp}
                onChange={formik.handleChange}
                placeholder="OTP"
              />

              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>
            <div className="text-center">
              <span>
                Can't get OTP?{" "}
                <Link className="text-red-600" to="/recovery">
                  Resend
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
