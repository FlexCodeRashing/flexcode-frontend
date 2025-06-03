import Header from "@/components/ui/Header";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
export const LoggedIn: Story = {
    args: {
        forceState: "logged"
    }
};
export const LoggedOut: Story = {
    args: {
        forceState: "not-logged"
    }
};
