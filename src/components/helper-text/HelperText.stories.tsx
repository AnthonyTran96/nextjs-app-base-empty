import type { Meta, StoryObj } from '@storybook/react';
import AppHelperText from './index';

const meta = {
  title: 'Components/HelperText',
  component: AppHelperText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Displays caption or error text below form fields. Error messages take priority over captions. Supports both string errors and react-hook-form FieldError objects.',
      },
    },
  },
  argTypes: {
    caption: {
      control: 'text',
      description: 'Helper caption text shown below the field',
    },
    error: {
      control: 'text',
      description: 'Error message — accepts a string or FieldError object with a message property',
    },
    captionPrefix: {
      control: false,
      description: 'React node rendered before the caption/error text (e.g. an icon)',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppHelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCaption: Story = {
  args: {
    caption: 'This is a helper caption text',
  },
};

export const WithStringError: Story = {
  args: {
    error: 'This field is required',
  },
  parameters: {
    docs: { description: { story: 'Error passed as a plain string.' } },
  },
};

export const WithFieldError: Story = {
  args: {
    error: { type: 'required', message: 'Please enter a valid email address' },
  },
  parameters: {
    docs: { description: { story: 'Error passed as a react-hook-form FieldError object.' } },
  },
};

export const WithCaptionAndError: Story = {
  args: {
    caption: 'Enter your email',
    error: { type: 'validate', message: 'Email format is invalid' },
  },
  parameters: {
    docs: { description: { story: 'When both caption and error are provided, error takes priority.' } },
  },
};

export const WithCaptionPrefix: Story = {
  args: {
    caption: 'Maximum 100 characters',
    captionPrefix: <span>ℹ</span>,
  },
};

export const WithErrorAndPrefix: Story = {
  args: {
    error: 'Something went wrong',
    captionPrefix: <span>⚠</span>,
  },
};
