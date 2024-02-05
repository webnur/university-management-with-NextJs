import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";

const { Header: ANTHeader } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const { role } = getUserInfo() as any;
  const items: MenuProps["items"] = [
    {
      key: 0,
      label: (
        <Button onClick={logout} type="text" danger>
          Log Out
        </Button>
      ),
    },
  ];

  return (
    <ANTHeader
      style={{
        background: "#002140",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <span
          style={{
            color: "#fff",
          }}
        >
          {role}
        </span>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </ANTHeader>
  );
};

export default Header;
