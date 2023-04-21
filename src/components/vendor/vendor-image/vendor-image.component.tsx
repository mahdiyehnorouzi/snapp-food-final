import React, { FC } from "react";
import { IVendorImage } from "./vendor-image.type";
import styles from "./styles.module.scss";

export const VendorImageComponent: FC<IVendorImage> = ({ image }) => {
  const defaultImage =
    "https://cdn.snappfood.ir/uploads/images/mobile-sliders/ramadan_cover_light.png";
  return <img alt="" src={image || defaultImage} className={styles.image} />;
};
