"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/uploadImage";
import {
  BloodGroupOptions,
  departmentOptions,
  genterOptions,
} from "@/constants/global";
import { Button, Col, Row } from "antd";
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
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  size="large"
                  name="admin.gender"
                  options={genterOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          {/* basic informantion  */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date Of Birth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={BloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="admin.designation"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present Address"
                  rows={4}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent Address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
