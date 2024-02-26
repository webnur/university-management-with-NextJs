import React from "react";
import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";

type AcFacultyProps = {
  name: string;
  label: string;
};

const AcademicFacultyField = ({ name, label }: AcFacultyProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  const acFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });
  return (
    <FormSelectField
      name={name}
      label={label}
      options={acFacultyOptions as SelectOptions[]}
    />
  );
};

export default AcademicFacultyField;
