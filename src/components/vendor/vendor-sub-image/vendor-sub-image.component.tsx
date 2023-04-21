import React, { FC } from "react";
import { IVendorSubImage } from "./vendor-sub-image.type";
import styles from "./styles.module.scss";

export const VendorSubImageComponent: FC<IVendorSubImage> = ({ subImage }) => {
  const defaultImage =
    "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/642c248a4b6a9.jpg";
  return (
    <img
      alt=""
      className={styles.sub__image__container}
      src={subImage || defaultImage}
    />
  );
};
