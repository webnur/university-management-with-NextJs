"use client";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
  value: string;
  label: string;
};
type SelectFiledProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  defaultValue?: SelectOptions;
  label?: string;
};
const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue,
}: SelectFiledProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
