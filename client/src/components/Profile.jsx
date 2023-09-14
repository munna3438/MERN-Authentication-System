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
  });
  return (
    <div className="container mx-auto ">
      <div className="flex justify-center items-center h-screen">
        <h1 className={styles.hadding}>
          HI <span className={styles.dname}>{name}</span> welcome to your
          profile page
        </h1>
      </div>
    </div>
  );
};

export default Profile;
