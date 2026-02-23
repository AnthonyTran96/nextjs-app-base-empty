import type { Meta, StoryObj } from '@storybook/react';
import AppCheckbox from './index';

const meta = {
  title: 'Components/Checkbox',
  component: AppCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Multi-select checkbox group with label, caption, error support, and row/column layout. Wraps Ant Design Checkbox.Group with project styling.',
      },
    },
  },
  args: {
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label displayed above the checkboxes',
    },
    labelSuffix: {
      control: false,
      description: 'React node appended after the label',
    },
    options: {
      control: 'object',
      description: 'Array of { label, value } option objects',
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Layout direction of checkbox items',
      table: { defaultValue: { summary: 'row' } },
    },
    block: {
      control: 'boolean',
      description: 'When true with column direction, each option takes full width',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultValue: {
      control: 'object',
      description: 'Array of pre-selected values',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all checkboxes in the group',
      table: { defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'text',
      description: 'Error message string or FieldError object',
    },
    caption: {
      control: 'text',
      description: 'Helper text shown below the group',
    },
    name: {
      control: 'text',
      description: 'Form field name for react-hook-form integration',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Select options',
    name: 'options',
  },
};

export const WithLabelSuffix: Story = {
  args: {
    label: 'Interests',
    labelSuffix: <span style={{ color: 'red' }}>*</span>,
    name: 'interests',
  },
};

export const ColumnDirection: Story = {
  args: {
    label: 'Select items',
    direction: 'column',
    name: 'items',
  },
};

export const ColumnBlock: Story = {
  args: {
    label: 'Full width options',
    direction: 'column',
    block: true,
    name: 'fullwidth',
  },
  parameters: {
    docs: { description: { story: 'Column layout with block=true — each option stretches to full width.' } },
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Pre-selected',
    defaultValue: ['a', 'c'],
    name: 'preselected',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    name: 'required',
    error: { type: 'required', message: 'Please select at least one option' },
  },
};

export const WithCaption: Story = {
  args: {
    label: 'Preferences',
    caption: 'Select all that apply',
    name: 'preferences',
  },
};

export const DisabledOptions: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    defaultValue: ['a'],
    name: 'disabled',
  },
};
