import React, { useEffect } from "react";
import { SubscriptionForm } from "../components/SubscriptionForm";

export const SubscriptionFormPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return <SubscriptionForm />;
};
