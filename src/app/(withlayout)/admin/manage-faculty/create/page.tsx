"use client";
import AcademicDepartmentField from "@/components/Forms/AcademicDepartmentField";
import AcademicFacultyField from "@/components/Forms/AcademicFacultyField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/uploadImage";
import {
  facultyOptions,
  acDepartmentOptions,
  departmentOptions,
  genderOptions,
  bloodGroupOptions,
} from "@/constants/global";
import { useAddFacultyWithFormDataMutation } from "@/redux/api/facultyApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateFaculty = () => {
  const [addFacultyWithFormData] = useAddFacultyWithFormDataMutation();

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      await addFacultyWithFormData(formData);
      message.success("Faculty created successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "manage-faculty",
            link: "/admin/manage-faculty",
          },
          {
            label: "Create",
            link: "/admin/manage-faculty/create",
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
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <AcademicFacultyField
                  name="faculty.academicFaculty"
                  label="Academic Faculty"
                />
                {/* <FormSelectField
                  size="large"
                  name="faculty.academicFaculty"
                  options={facultyOptions}
                  label="Academic Faculty"
                  placeholder="Select"
                /> */}
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <AcademicDepartmentField
                  name="faculty.academicDepartment"
                  label="Academic Department"
                />
                {/* <FormSelectField
                  size="large"
                  name="faculty.academicDepartment"
                  options={acDepartmentOptions}
                  label="Academic Department"
                  placeholder="Select"
                /> */}
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <UploadImage name="file" />
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
                <FormSelectField
                  name="faculty.bloodGroup"
                  label="Blood group"
                  options={bloodGroupOptions}
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
