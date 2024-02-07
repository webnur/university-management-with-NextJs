"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import { BloodGroupOptions } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <p style={{ marginBottom: "10px", fontSize: "18px" }}>
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact No"
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date Of Birth"
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            options={BloodGroupOptions}
            label="Blood Group"
            placeholder="Select"
          />
        </Col>

        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormTextArea
            name="student.presentAddress"
            label="Present Address"
            rows={4}
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent Address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
