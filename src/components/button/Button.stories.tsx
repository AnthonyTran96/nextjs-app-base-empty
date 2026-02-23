import type { Meta, StoryObj } from '@storybook/react';
import ButtonBase from './index';

const meta = {
  title: 'Components/Button',
  component: ButtonBase,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Versatile button component with four visual types (primary, secondary, ghost, whiteGhost), two sizes, optional left/right icons, and loading state.',
      },
    },
  },
  args: {
    customContent: 'Button',
    type: 'primary',
    size: 44,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'whiteGhost'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: [44, 32],
      description: 'Button height in pixels — 44 (default) or 32 (compact)',
      table: { defaultValue: { summary: '44' } },
    },
    customContent: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies muted styling',
      table: { defaultValue: { summary: 'false' } },
    },
    leftIcon: {
      control: 'text',
      description: 'Icon key rendered before the label',
    },
    rightIcon: {
      control: 'text',
      description: 'Icon key rendered after the label',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    customContent: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    customContent: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    customContent: 'Ghost Button',
  },
};

export const WhiteGhost: Story = {
  args: {
    type: 'whiteGhost',
    customContent: 'White Ghost Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: 'Best visible on dark backgrounds.' } },
  },
};

export const SmallSize: Story = {
  args: {
    customContent: 'Small Button',
    size: 32,
  },
};

export const Disabled: Story = {
  args: {
    customContent: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    type: 'secondary',
    customContent: 'Disabled Secondary',
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    customContent: 'Download',
    leftIcon: 'ICON_ARROW_LEFT',
  },
};

export const WithRightIcon: Story = {
  args: {
    type: 'secondary',
    customContent: 'Next',
    rightIcon: 'ICON_ARROW_LEFT',
  },
};

export const WithBothIcons: Story = {
  args: {
    customContent: 'Action',
    leftIcon: 'ICON_EDIT',
    rightIcon: 'ICON_ARROW_LEFT',
  },
};

export const IconOnly: Story = {
  args: {
    type: 'secondary',
    leftIcon: 'ICON_EDIT',
    customContent: undefined,
  },
  parameters: {
    docs: { description: { story: 'Icon-only button without a text label.' } },
  },
};

export const AllTypes: Story = {
  parameters: {
    docs: { description: { story: 'Side-by-side comparison of all button types including disabled state.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonBase type="primary" customContent="Primary" />
      <ButtonBase type="secondary" customContent="Secondary" />
      <ButtonBase type="ghost" customContent="Ghost" />
      <ButtonBase type="whiteGhost" customContent="White Ghost" />
      <ButtonBase type="primary" customContent="Disabled" disabled />
    </div>
  ),
};
