import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from "../style/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { usernameValidate } from "../helper/validate";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      axios
        .post("http://localhost:4000/login", {
          username: values.username,
          password: values.password,
        })
        .then((user) => {
          console.log("succesfully logedn");
          localStorage.setItem("token", user.data.token);
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
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
          <form
            className="py-1"
            onSubmit={formik.handleSubmit}
            action="/password"
          >
            <div className="profile flex justify-center py-4">
              <img src={profile} className={styles.profileImg} alt="avater" />
            </div>
            <div className="texbox">
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
                placeholder="password"
              />

              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="text-center">
              <span>
                Not a Member{" "}
                <Link className="text-red-600" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
