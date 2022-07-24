import { Meta, Story } from "@storybook/react";
import TestTest, { TestProps } from "./TestTest";
export default {
  title: "Atoms/Text",
  component: TestTest,
} as Meta;

const Template: Story<TestProps> = (args) => <TestTest {...args} />;

export const TestComp1 = Template.bind({});
TestComp1.args = {
  text: "Heyyy Yeah!!",
};
