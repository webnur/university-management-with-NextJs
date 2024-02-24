"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { genderOptions } from "@/constants/global";
import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";

import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateAcDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const onSubmit = async (data: any) => {
    message.loading("Creating....");
    try {
      const res = await addAcademicDepartment(data);
      if (!!res) {
        message.success("Academic department created successfully!");
      }
    } catch (err: any) {
      // console.error(error);
      message.error(err.message);
    }
  };

  //   console.log(data?.academicFaculties);

  const academicFaculties = data?.academicFaculties;
  const acFacultiesOptions = academicFaculties?.map((faculty) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Academic department",
            link: "/admin/academic/department",
          },
          {
            label: "Create",
            link: "/admin/academic/department/create",
          },
        ]}
      />
      <h1>Create Academic Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectField
              size="large"
              name="academicFacultyId"
              options={acFacultiesOptions as SelectOptions[]}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateAcDepartment;
