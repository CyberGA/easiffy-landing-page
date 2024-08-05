"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NavigatingLoading: React.FC = () => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#27AE60"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default NavigatingLoading;
