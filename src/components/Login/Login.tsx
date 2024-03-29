"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import {
  getUserInfo,
  isLoggedIn,
  storeUserInfo,
} from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  // console.log(getUserInfo());
  // console.log(isLoggedIn());
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onsubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);

      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in Successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // if (res?.data?.accessToken) {
      //   router.push("/profile");
      // }
      // storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (error) {
      console.error("form error", error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={12} lg={10}>
        <Image src={loginImage} alt="login image" width={500} />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Login Your Account
        </h1>
        <div>
          <Form submitHandler={onsubmit}>
            <div>
              {" "}
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
