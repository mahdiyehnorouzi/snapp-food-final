import { HomeComponent } from "@/components/home/homeComponent";
import { VendorListComponent } from "@/components/vendor-list/vendor-list-component";
import { NotFoundPage } from "@/pages/not-found.page";
import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RouteComponent: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/vendor" element={<VendorListComponent />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
