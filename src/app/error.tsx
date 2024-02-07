"use client";

import { Result } from "antd";

const ErrorPage = () => {
  return (
    <div>
      <Result status="warning" title="Something went wrong!!" />
    </div>
  );
};

export default ErrorPage;
