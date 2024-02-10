"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "antd";
import React from "react";

const RecetPasswordPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form submitHandler={onSubmit}>
        <h3 style={{ marginBottom: "10px" }}>reset password</h3>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="oldPassword" label="Old password" type="password" />
        </div>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="newPassword" label="New password" type="password" />
        </div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default RecetPasswordPage;
