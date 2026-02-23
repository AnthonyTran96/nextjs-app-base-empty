import type { Meta, StoryObj } from '@storybook/react';
import { AppSwitch } from './index';

const meta = {
  title: 'Components/Switch',
  component: AppSwitch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toggle switch component with small and medium sizes. Wraps Ant Design Switch with project styling.',
      },
    },
  },
  args: {
    size: 'small',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Switch size variant',
      table: { defaultValue: { summary: 'small' } },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof AppSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const AllStates: Story = {
  parameters: {
    docs: { description: { story: 'All size × state combinations for visual comparison.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Small off</span>
        <AppSwitch size="small" />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Small on</span>
        <AppSwitch size="small" defaultChecked />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Medium off</span>
        <AppSwitch size="medium" />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Medium on</span>
        <AppSwitch size="medium" defaultChecked />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Disabled off</span>
        <AppSwitch disabled />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120 }}>Disabled on</span>
        <AppSwitch disabled defaultChecked />
      </div>
    </div>
  ),
};
