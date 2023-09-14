import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from "../style/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { registerValidate } from "../helper/validate";

import { useState } from "react";
import ConvertToBased64 from "../helper/convert";
import axios from "axios";

const Register = () => {
  const [File, setFile] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: File || "" });
      axios
        .post("https://mern-auth-lt88.onrender.com/register", {
          username: values.username,
          password: values.password,
        })
        .then(() => {
          console.log("user is registered");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          navigate("/register");
        });
    },
  });

  /**
   * profile upload handel
   */
  const onUpload = async (e) => {
    const base64 = await ConvertToBased64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex-col items-center ">
            <h4 className="text-4xl font-bold">Register!</h4>
            <span className="mx-auto text-gray-500 w-2/4 block ">
              Happy to join you!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={File || profile}
                  className={styles.profileImg}
                  alt="avater"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                name="profile"
                id="profile"
                style={{ display: "none" }}
              />
            </div>
            <div className="texbox">
              <input
                className={styles.text_box}
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
              />
              <input
                className={styles.text_box}
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Username"
              />
              <input
                className={styles.text_box}
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>
            <div className="text-center">
              <span>
                Allready register? &nbsp;
                <Link className="text-red-600" to="/login">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
