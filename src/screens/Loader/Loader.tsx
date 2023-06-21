import { useEffect } from "react";
import styles from "./Loader.module.css";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  });

  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.dot}></div>
      <div className={styles.bigger}></div>
      <div className={styles.biggest}></div>
    </>
  );
};

export default Loader;
