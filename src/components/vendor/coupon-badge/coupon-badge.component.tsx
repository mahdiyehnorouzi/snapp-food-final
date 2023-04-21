import React, { FC } from "react";
import styles from "./styles.module.scss";
import { ICuponBadge } from "./cupon-badge.type";

export const CouponBadgeComponent: FC<ICuponBadge> = ({ content }) => (
  <div className={styles.coupon__Container}>{content}</div>
);
