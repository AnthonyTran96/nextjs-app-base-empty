import type { Meta, StoryObj } from '@storybook/react';
import { AppTextField } from './index';

const meta = {
  title: 'Components/TextField',
  component: AppTextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form text input with label, caption, error display, and support for password/number types. Integrates with react-hook-form via register/error props.',
      },
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label displayed above the input',
    },
    labelSuffix: {
      control: false,
      description: 'React node appended after the label (e.g. required asterisk)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'tel'],
      description: 'HTML input type',
      table: { defaultValue: { summary: 'text' } },
    },
    name: {
      control: 'text',
      description: 'Input name attribute — used by react-hook-form register',
    },
    error: {
      control: 'text',
      description: 'Error message string or FieldError object with message property',
    },
    caption: {
      control: 'text',
      description: 'Helper text shown below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
      table: { defaultValue: { summary: 'false' } },
    },
    value: {
      control: 'text',
      description: 'Controlled input value',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@email.com',
    name: 'email',
  },
};

export const WithLabelAndSuffix: Story = {
  args: {
    label: 'Username',
    labelSuffix: <span style={{ color: 'red' }}>*</span>,
    placeholder: 'Enter username',
    name: 'username',
  },
  parameters: {
    docs: { description: { story: 'Required field indicator using labelSuffix.' } },
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    name: 'password',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Amount',
    type: 'number',
    placeholder: '0',
    name: 'amount',
  },
};

export const WithStringError: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@email.com',
    name: 'email',
    error: 'This field is required',
  },
};

export const WithFieldError: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@email.com',
    name: 'email',
    error: { type: 'validate', message: 'Invalid email format' },
  },
  parameters: {
    docs: { description: { story: 'Error passed as a react-hook-form FieldError object.' } },
  },
};

export const WithCaption: Story = {
  args: {
    label: 'Phone',
    placeholder: '0123456789',
    name: 'phone',
    caption: 'Enter your phone number with country code',
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Read Only',
    value: 'Cannot edit this',
    name: 'readonly',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Name',
    value: 'John Doe',
    name: 'name',
  },
};
