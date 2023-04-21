import React, { FC } from "react";

import styles from "./styles.module.scss";
import { VendorContentRateComponent } from "./vendor-content-rate/vendor-content-rate.component";
import { IVendorContent } from "./vendor-content.type";

export const VendorContentComponent: FC<IVendorContent> = ({
  content,
  footerTitlePrice,
  footerTitleTime,
  headerName,
  rate,
  rateNumber,
  footerTitle,
}) => {
  return (
    <div className={styles.card__content__container}>
      <div className={styles.title__container}>
        <span className={styles.header}>{headerName}</span>
        <VendorContentRateComponent rate={rate} rateNumber={rateNumber} />
      </div>

      <div className={styles.detail}>{content}</div>
      <div className={styles.footer__container}>
        <div className={styles.footer__title}>
          <span>{footerTitle || "پیک فروشنده"}</span>
          {footerTitlePrice > 0 && (
            <span className={styles.footer__title__price}>
              {footerTitlePrice.toLocaleString("en-US")} تومان
            </span>
          )}
        </div>

        <div className={styles.footer__title__time}>
          <span>
            تا <span> {footerTitleTime} </span> دقیقه
          </span>
        </div>
      </div>
    </div>
  );
};
