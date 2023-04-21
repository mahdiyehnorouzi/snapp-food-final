import { useNavigate } from "react-router-dom";
import { useSnappfoodData } from "@/hooks/use-fetch-data";
import React, { FC, useEffect } from "react";
import { VendorComponent } from "../vendor/vendor.component";
import styles from "./styles.module.scss";
import useIntersection from "../../hooks/use-intersection";

export const VendorListComponent: FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, loadData, hasNextPage } = useSnappfoodData();
  const endElementRef = useIntersection(() => {
    if (!data && !loading) loadData();
    if (data && !loading && hasNextPage) {
      loadData();
    }
  });

  useEffect(() => {
    if (error) navigate("/not-found");
  }, [error, navigate]);

  const vendorElements =
    data
      ?.slice(1)
      .map((item: any, i) => (
        <VendorComponent
          data={item.data}
          key={`${item.data.id}${item.data.title}-${i}`}
        />
      )) || [];

  vendorElements.push(
    <div ref={endElementRef} key="end-element">
      {loading && <div>Loading...</div>}
    </div>
  );

  return <div className={styles.container}>{vendorElements}</div>;
};
