import React from "react";
import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
type AcDepartmentProps = {
  name: string;
  label: string;
};

const AcademicDepartmentField = ({ name, label }: AcDepartmentProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });

  const academicDepartments = data?.academicDepartments;
  const academicDepartmentOptions = academicDepartments?.map((department) => {
    return {
      label: department.title,
      value: department.id,
    };
  });
  return (
    <FormSelectField
      size="large"
      name={name}
      options={academicDepartmentOptions as SelectOptions[]}
      label={label}
      placeholder="Select"
    />
  );
};

export default AcademicDepartmentField;
