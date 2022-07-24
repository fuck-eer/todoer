import React from "react";
export type TestProps = {
  text: string;
};
const TestTest = ({ text }: TestProps) => {
  return <p className="text-red-600 text-display-lg">{text}</p>;
};

export default TestTest;
