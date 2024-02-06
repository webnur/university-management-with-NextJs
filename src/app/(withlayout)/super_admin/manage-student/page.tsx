"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "manage student",
            link: `/${role}/manage-student`,
          },
        ]}
      />
      <ActionBar title="Student List">
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudentPage;
