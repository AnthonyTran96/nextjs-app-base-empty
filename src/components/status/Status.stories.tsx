import type { Meta, StoryObj } from '@storybook/react';
import Status, { KIND_STATUS, TYPE_STATUS } from './index';

const meta = {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Status badge component for displaying state labels (success, pending, error, etc.) with primary, secondary, and ghost visual kinds.',
      },
    },
  },
  args: {
    content: 'Status',
    type: TYPE_STATUS.DEFAULT,
    kind: KIND_STATUS.PRIMARY,
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(TYPE_STATUS),
      description: 'Semantic status type that controls the color scheme',
      table: { defaultValue: { summary: TYPE_STATUS.DEFAULT } },
    },
    kind: {
      control: 'select',
      options: Object.values(KIND_STATUS),
      description: 'Visual style variant — primary (filled), secondary, or ghost',
      table: { defaultValue: { summary: KIND_STATUS.PRIMARY } },
    },
    content: {
      control: 'text',
      description: 'Label text displayed inside the badge',
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Default',
  },
};

export const Success: Story = {
  args: {
    content: 'Success',
    type: TYPE_STATUS.SUCCESS,
  },
};

export const Pending: Story = {
  args: {
    content: 'Pending',
    type: TYPE_STATUS.PENDING,
  },
};

export const Error: Story = {
  args: {
    content: 'Error',
    type: TYPE_STATUS.ERROR,
  },
};

export const Branding: Story = {
  args: {
    content: 'Branding',
    type: TYPE_STATUS.BRANDING,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled',
    type: TYPE_STATUS.DISABLED,
  },
};

export const SecondaryKind: Story = {
  args: {
    content: 'Secondary',
    type: TYPE_STATUS.SUCCESS,
    kind: KIND_STATUS.SECONDARY,
  },
};

export const GhostKind: Story = {
  args: {
    content: 'Ghost',
    type: TYPE_STATUS.SUCCESS,
    kind: KIND_STATUS.GHOST,
  },
};

export const AllVariants: Story = {
  parameters: {
    docs: { description: { story: 'Matrix of all type × kind combinations.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.values(KIND_STATUS).map((kind) => (
        <div key={kind}>
          <div style={{ marginBottom: 8, fontWeight: 'bold', textTransform: 'capitalize' }}>{kind}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.values(TYPE_STATUS).map((type) => (
              <Status key={`${kind}-${type}`} kind={kind} type={type} content={type} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
