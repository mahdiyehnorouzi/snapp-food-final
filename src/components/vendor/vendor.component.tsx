import React, { FC } from "react";
import { VendorImageComponent } from "./vendor-image/vendor-image.component";
import { VendorSubImageComponent } from "./vendor-sub-image/vendor-sub-image.component";
import { VendorContentComponent } from "./vendor-content/vendor-content.component";
import { CouponBadgeComponent } from "./coupon-badge/coupon-badge.component";
import { AdvertisingBadgeComponent } from "./advertising-badge/advertising-badge-component";
import { IVendor } from "./vendor.type";
import styles from "./styles.module.scss";

export const VendorComponent: FC<IVendor> = ({ data }) => (
  <div className={styles.card__container}>
    <VendorImageComponent image={data?.backgroundImage} />
    {data?.badges?.[0]?.description && (
      <CouponBadgeComponent content={data?.badges?.[0]?.description} />
    )}
    {/* TODO: I couldn't find any meaningful value to use for this component */}
    <AdvertisingBadgeComponent />
    <div className={styles.sub__image__card__container}>
      <VendorSubImageComponent subImage={data?.defLogo} />
    </div>
    <VendorContentComponent
      content={data?.description}
      footerTitlePrice={data?.deliveryFee}
      footerTitle={data?.badges?.[0]?.title}
      footerTitleTime={data?.deliveryTime}
      headerName={data?.title}
      rate={data?.rate}
      rateNumber={data?.countReview}
    />
  </div>
);
