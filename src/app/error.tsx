"use client";

import { Result } from "antd";

const ErrorPage = () => {
  return (
    <div>
      <h2>Something went wrong!!</h2>
      <Result status="warning" title="Something went wrong!!" />
    </div>
  );
};

export default ErrorPage;
