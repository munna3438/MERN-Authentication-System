import { Link } from "react-router-dom";
import styles from "../style/Username.module.css";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col direction-colum justify-center items-center h-screen">
        <span className={styles.hadding}> hello sir it's a privet site </span>
        <span className={styles.h2}>
          Do you want to access this site?{" "}
          <Link className="text-red-600" to="/login">
            Login Now
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Home;
