"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Col, Row } from "antd";
import React from "react";

type FormValues = {
  id: string;
  password: string;
};
const CreateAdmin = () => {
  const onsubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("form error", error);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
          {
            label: "create",
            link: "/super_admin/admin/create",
          },
        ]}
      />
      <h1>create admin</h1>

      <div>
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="First Name"
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
