import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from "../style/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { passowrdValidate } from "../helper/validate";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passowrdValidate,
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
            <h4 className="text-4xl font-bold">Hello Again!</h4>
            <span className="mx-auto text-gray-500 w-2/4 block ">
              Explore More by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={profile} className={styles.profileImg} alt="avater" />
            </div>
            <div className="texbox">
              <input
                className={styles.text_box}
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
              />

              <button className={styles.btn} type="submit">
                Log in
              </button>
            </div>
            <div className="text-center">
              <span>
                Forgot Password{" "}
                <Link className="text-red-600" to="/recovery">
                  Recovery now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
