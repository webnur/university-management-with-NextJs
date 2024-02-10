"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/uploadImage";
import {
  FacultyOptions,
  acDepartmentOptions,
  departmentOptions,
  genterOptions,
} from "@/constants/global";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateFaculty = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
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
            label: "manage-faculty",
            link: "/super_admin/manage-faculty",
          },
          {
            label: "manage-faculty",
            link: "/super_admin/manage-faculty/create",
          },
        ]}
      />
      <h1>create Faculty</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              Faculy Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.name.firstName"
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
                  name="faculty.name.middleName"
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
                  name="faculty.name.lastName"
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
                  name="faculty.gender"
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
                  name="faculty.academicFaculty"
                  options={FacultyOptions}
                  label="Academic Faculty"
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
                  name="faculty.academicDepartment"
                  options={acDepartmentOptions}
                  label="Academic Department"
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
          {/* basic informantion */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Basic information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  type="email"
                  name="faculty.email"
                  label="Email address"
                  size="large"
                />
              </Col>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  type="text"
                  name="faculty.contactNo"
                  label="Contact No"
                  size="large"
                />
              </Col>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  type="text"
                  name="faculty.emergencyContactNo"
                  label="Emergency Contact No"
                  size="large"
                />
              </Col>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormDatePicker
                  name="faculty.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  type="text"
                  name="faculty.designation"
                  label="Designation"
                  size="large"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faculty.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faculty.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateFaculty;
