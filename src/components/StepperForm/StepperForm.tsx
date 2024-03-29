"use client";
import React, { useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";

interface ISteps {
  title: string;
  content: React.ReactElement | React.ReactNode;
}
interface IStepProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}
const StepperForm = ({ steps, submitHandler, navigateLink }: IStepProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
    reset();
  };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
