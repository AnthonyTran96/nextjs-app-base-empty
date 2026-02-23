import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectDate } from './index';

const meta = {
  title: 'Components/SelectDate',
  component: SelectDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Numeric dropdown selector for day, month, or year values. Generates options from a fromDate–toDate range. Integrates with react-hook-form.',
      },
    },
  },
  args: {
    onChange: fn(),
    fromDate: 1,
    toDate: 31,
    name: 'date',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
    },
    name: {
      control: 'text',
      description: 'Form field name for react-hook-form',
    },
    fromDate: {
      control: 'number',
      description: 'Start of the numeric range (inclusive)',
    },
    toDate: {
      control: 'number',
      description: 'End of the numeric range (inclusive)',
    },
    value: {
      control: 'text',
      description: 'Controlled selected value',
    },
    error: {
      control: 'text',
      description: 'Error message string',
    },
    defaultDropdownLabel: {
      control: 'text',
      description: 'Label for the first (empty) dropdown option',
    },
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select day',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Day',
    placeholder: 'Select day',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Day',
    value: '15',
  },
};

export const MonthSelector: Story = {
  args: {
    label: 'Month',
    name: 'month',
    fromDate: 1,
    toDate: 12,
    placeholder: 'Select month',
  },
  parameters: {
    docs: { description: { story: 'Range 1–12 for month selection.' } },
  },
};

export const YearSelector: Story = {
  args: {
    label: 'Year',
    name: 'year',
    fromDate: 2000,
    toDate: 2030,
    placeholder: 'Select year',
  },
  parameters: {
    docs: { description: { story: 'Range 2000–2030 for year selection.' } },
  },
};

export const WithError: Story = {
  args: {
    label: 'Day',
    placeholder: 'Select day',
    error: 'This field is required',
  },
};

export const WithDropdownLabel: Story = {
  args: {
    label: 'Birth Day',
    placeholder: 'Select',
    defaultDropdownLabel: 'Choose a day',
  },
};
