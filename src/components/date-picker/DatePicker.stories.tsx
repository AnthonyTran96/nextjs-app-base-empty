import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from 'antd/lib/date-picker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Ant Design DatePicker with project global styles applied. Supports custom date formats, disabled state, and full-width layout.',
      },
    },
  },
  args: {
    placeholder: 'Select date',
    style: { width: '100%' },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    format: {
      control: 'text',
      description: 'Display format string (e.g. DD/MM/YYYY)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the date picker',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  parameters: {
    docs: { description: { story: 'DatePicker with an external label — useful when not inside a form field wrapper.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 14, fontWeight: 600 }}>Date of Birth</label>
      <DatePicker placeholder="dd/mm/yyyy" format="DD/MM/YYYY" style={{ width: '100%' }} />
    </div>
  ),
};

export const WithFormat: Story = {
  args: {
    placeholder: 'dd/mm/yyyy',
    format: 'DD/MM/YYYY',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
