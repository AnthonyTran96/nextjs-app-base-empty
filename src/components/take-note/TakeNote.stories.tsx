import type { Meta, StoryObj } from '@storybook/react';
import { AppTakeNote } from './index';

const meta = {
  title: 'Components/TakeNote',
  component: AppTakeNote,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line textarea component with label, caption, error display, character count, and auto-sizing. Wraps Ant Design Input.TextArea.',
      },
    },
  },
  args: {
    placeholder: 'Enter your notes...',
    name: 'note',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label displayed above the textarea',
    },
    labelSuffix: {
      control: false,
      description: 'React node appended after the label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the textarea',
    },
    name: {
      control: 'text',
      description: 'Form field name for react-hook-form integration',
    },
    value: {
      control: 'text',
      description: 'Controlled textarea value',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character limit',
    },
    showCount: {
      control: 'boolean',
      description: 'Shows character count when true (requires maxLength)',
      table: { defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'text',
      description: 'Error message string or FieldError object',
    },
    caption: {
      control: 'text',
      description: 'Helper text shown below the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea',
      table: { defaultValue: { summary: 'false' } },
    },
    autoSize: {
      control: 'object',
      description: 'Auto-resize config — { minRows, maxRows }',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppTakeNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Write something...',
    name: 'notes',
  },
};

export const WithLabelSuffix: Story = {
  args: {
    label: 'Description',
    labelSuffix: <span style={{ color: 'red' }}>*</span>,
    placeholder: 'Enter description...',
    name: 'description',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Comments',
    value: 'This is a pre-filled comment that demonstrates the component with existing content.',
    name: 'comments',
  },
};

export const WithMaxLength: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    name: 'bio',
    maxLength: 200,
    showCount: true,
  },
  parameters: {
    docs: { description: { story: 'Character counter appears when showCount and maxLength are set.' } },
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Notes',
    placeholder: 'This field is required',
    name: 'required-notes',
    error: { type: 'required', message: 'Notes are required' },
  },
};

export const WithCaption: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback...',
    name: 'feedback',
    caption: 'Please provide detailed feedback',
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Read Only',
    value: 'This content cannot be edited',
    name: 'readonly',
    disabled: true,
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    placeholder: 'More space to write...',
    name: 'large',
    autoSize: { minRows: 5, maxRows: 8 },
  },
  parameters: {
    docs: { description: { story: 'Auto-resizing textarea with min 5 and max 8 rows.' } },
  },
};
