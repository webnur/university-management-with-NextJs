import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

const CreateDepartment = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
          {
            label: "create",
            link: "/super_admin/department/create",
          },
        ]}
      />
      <h1>create department</h1>
    </div>
  );
};

export default CreateDepartment;
