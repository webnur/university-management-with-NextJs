import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

const CreateFaculty = () => {
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
    </div>
  );
};

export default CreateFaculty;
