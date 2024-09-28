

import { Metadata } from "next";
import TermsConditions from "@/components/terms/terms-conditions"

export const metadata: Metadata = {
  title: "Terms and Condiditions | Easiffy",
  description: "Terms and Condiditions page",
};

export default function Page() {
  return <TermsConditions />;
}
