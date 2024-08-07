import type { Meta, StoryObj } from '@storybook/react';
import { TodoListStory } from "./TodoListStory.tsx";
import { themeWrapper } from "../../themeWrapper.tsx";

const meta = {
  title: 'Components/TodoList',
  component: themeWrapper(TodoListStory),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TodoListStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoList: Story = {};
