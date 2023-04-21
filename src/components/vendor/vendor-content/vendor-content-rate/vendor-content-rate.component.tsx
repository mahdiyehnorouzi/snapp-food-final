import React, { FC } from "react";
import { IVendorContentRate } from "./vendor-content-rate.type";
import styles from "./styles.module.scss";

export const VendorContentRateComponent: FC<IVendorContentRate> = ({
  rate,
  rateNumber,
}) => {
  return (
    <div className={styles.content__rate__container}>
      <span className={styles.count__card}>({Math.round(rateNumber)})</span>
      <span className={styles.content__rate__container__box}>
        {rate}
        <img alt="" className={styles.star__image} src="starTransparent.png" />
      </span>
    </div>
  );
};
