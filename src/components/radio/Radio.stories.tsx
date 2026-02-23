import type { Meta, StoryObj } from '@storybook/react';
import AppRadio from './index';

const meta = {
  title: 'Components/Radio',
  component: AppRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Single-select radio group with label, caption, error support, and horizontal/vertical layout. Wraps Ant Design Radio.Group.',
      },
    },
  },
  args: {
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label displayed above the radio buttons',
    },
    labelSuffix: {
      control: false,
      description: 'React node appended after the label',
    },
    options: {
      control: 'object',
      description: 'Array of { value, label } option objects',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of radio items',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    defaultValue: {
      control: 'text',
      description: 'Pre-selected option value',
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
} satisfies Meta<typeof AppRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
  },
};

export const WithLabelSuffix: Story = {
  args: {
    label: 'Gender',
    labelSuffix: <span style={{ color: 'red' }}>*</span>,
    name: 'gender',
  },
};

export const Vertical: Story = {
  args: {
    label: 'Payment method',
    direction: 'vertical',
    name: 'payment',
    options: [
      { value: 'card', label: 'Credit Card' },
      { value: 'bank', label: 'Bank Transfer' },
      { value: 'cash', label: 'Cash on Delivery' },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Language',
    name: 'language',
    defaultValue: 'male',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required selection',
    name: 'required',
    error: { type: 'required', message: 'Please select an option' },
  },
};

export const WithCaption: Story = {
  args: {
    label: 'Subscription',
    caption: 'Choose your preferred plan',
    name: 'subscription',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};
