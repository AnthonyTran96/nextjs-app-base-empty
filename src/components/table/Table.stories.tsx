import type { Meta, StoryObj } from '@storybook/react';
import AppTable from './index';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const dataSource = [
  { key: '1', name: 'John Doe', age: 28, email: 'john@example.com', status: 'Active' },
  { key: '2', name: 'Jane Smith', age: 32, email: 'jane@example.com', status: 'Inactive' },
  { key: '3', name: 'Bob Johnson', age: 45, email: 'bob@example.com', status: 'Active' },
  { key: '4', name: 'Alice Brown', age: 24, email: 'alice@example.com', status: 'Pending' },
  { key: '5', name: 'Charlie Wilson', age: 36, email: 'charlie@example.com', status: 'Active' },
];

const meta = {
  title: 'Components/Table',
  component: AppTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Data table component wrapping Ant Design Table with project styling, rounded variant, custom empty states, and loading indicator.',
      },
    },
  },
  args: {
    columns,
    dataSource,
  },
  argTypes: {
    columns: {
      control: false,
      description: 'Ant Design column definitions array',
    },
    dataSource: {
      control: false,
      description: 'Array of row data objects',
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded border styling to the table',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner overlay',
      table: { defaultValue: { summary: 'false' } },
    },
    emptyText: {
      control: 'text',
      description: 'Text displayed when dataSource is empty',
    },
    emptyComponent: {
      control: false,
      description: 'Custom React node rendered when dataSource is empty (overrides emptyText)',
    },
    pagination: {
      control: 'object',
      description: 'Ant Design pagination config or false to disable',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 700 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Empty: Story = {
  args: {
    dataSource: [],
    emptyText: 'No records found',
  },
};

export const Loading: Story = {
  args: {
    dataSource: [],
    loading: true,
  },
};

export const WithPagination: Story = {
  args: {
    dataSource: Array.from({ length: 25 }, (_, i) => ({
      key: String(i + 1),
      name: `User ${i + 1}`,
      age: 20 + (i % 30),
      email: `user${i + 1}@example.com`,
      status: ['Active', 'Inactive', 'Pending'][i % 3],
    })),
    pagination: {
      pageSize: 5,
    },
  },
  parameters: {
    docs: { description: { story: '25 rows with pagination at 5 per page.' } },
  },
};

export const CustomEmptyComponent: Story = {
  args: {
    dataSource: [],
    emptyComponent: (
      <div style={{ padding: 40, textAlign: 'center', color: '#999' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
        <div>No data available</div>
      </div>
    ),
  },
  parameters: {
    docs: { description: { story: 'Custom empty state with an icon and message.' } },
  },
};
