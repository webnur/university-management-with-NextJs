import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateStudentPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-student",
            link: "/super_admin/manage-student",
          },
          {
            label: "create",
            link: "/super_admin/manage-student/create",
          },
        ]}
      />
      <h1>Create Student Page</h1>
    </div>
  );
};

export default CreateStudentPage;
