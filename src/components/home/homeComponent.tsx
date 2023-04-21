import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const HomeComponent: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button onClick={() => navigate(`/vendor`)}>go to vendor page</button>
    </div>
  );
};
