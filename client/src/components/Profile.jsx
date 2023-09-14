// import { Link } from "react-router-dom";
// import profile from "../assets/profile.png";
import styles from "../style/Username.module.css";
// import { useFormik } from "formik";
// import { Toaster } from "react-hot-toast";
// import { profileVAlidation } from "../helper/validate";
// import { useState } from "react";
// import ConvertToBased64 from "../helper/convert";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const [File, setFile] = useState();
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     zipCode: "",
  //   },
  //   validate: profileVAlidation,
  //   validateOnBlur: false,
  //   validateOnChange: false,
  //   onSubmit: async (values) => {
  //     values = await Object.assign(values, { profile: File || "" });
  //     console.log(values);
  //   },
  // });

  // /**
  //  * profile upload handel
  //  */
  // const onUpload = async (e) => {
  //   const base64 = await ConvertToBased64(e.target.files[0]);
  //   setFile(base64);
  // };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setName(res.data.user.username);
      })
      .catch((err) => {
        navigate("/login");
      });
  }, []);
  return (
    <div className="container mx-auto ">
      {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}
      <div className="flex justify-center items-center h-screen">
        {/*
        <div className={styles.glass}>
          <div className="title flex-col items-center ">
            <h4 className="text-4xl font-bold">Profile!</h4>
            <span className="mx-auto text-gray-500 w-2/4 block ">
              you can update the details.
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
            <div className="texbox flex flex-col items-center gap-2">
              <div className="name flex w-5/6 gap-6">
                <input
                  className={styles.text_box}
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder="Frist Name"
                />
                <input
                  className={styles.text_box}
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div className="name flex w-5/6 gap-6">
                <input
                  className={styles.text_box}
                  type="text"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  placeholder="Phone Number"
                />
                <input
                  className={styles.text_box}
                  type="text"
                  name="zipCode"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  placeholder="Zip Code"
                />
              </div>
              <input
                className={styles.text_box}
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>
            <div className="text-center">
              <span>
                come back later? &nbsp;
                <Link className="text-red-600" to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
        */}
        <h1 className={styles.hadding}>
          HI <span className={styles.dname}>{name}</span> welcome to your
          profile page
        </h1>
      </div>
    </div>
  );
};

export default Profile;
