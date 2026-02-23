import type { Meta, StoryObj } from '@storybook/react';
import InfoBox from './index';

const meta = {
  title: 'Components/InfoBox',
  component: InfoBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Clickable info card displaying an icon, title, and caption. Used for navigation shortcuts or action items in dashboards.',
      },
    },
  },
  args: {
    title: 'Contact Support',
    caption: 'Get help from our support team',
    icon: 'ICON_CALL',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary heading text',
    },
    caption: {
      control: 'text',
      description: 'Secondary description text below the title',
    },
    icon: {
      control: 'select',
      options: [
        'ICON_CALL', 'ICON_BILL', 'ICON_EDIT', 'ICON_CALENDAR',
        'ICON_QUESTION', 'ICON_INFO_SOLID',
      ],
      description: 'Icon key from the local SVG icon set',
    },
    fillIcon: {
      control: 'color',
      description: 'Custom fill color for the icon',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBillIcon: Story = {
  args: {
    title: 'Billing',
    caption: 'View and manage your billing information',
    icon: 'ICON_BILL',
  },
};

export const WithEditIcon: Story = {
  args: {
    title: 'Edit Profile',
    caption: 'Update your personal information and preferences',
    icon: 'ICON_EDIT',
  },
};

export const WithCustomFill: Story = {
  args: {
    title: 'Calendar',
    caption: 'View your upcoming events and schedule',
    icon: 'ICON_CALENDAR',
    fillIcon: 'rgb(0, 114, 188)',
  },
  parameters: {
    docs: { description: { story: 'Icon color overridden with a custom fill value.' } },
  },
};

export const WithClickHandler: Story = {
  args: {
    title: 'FAQ',
    caption: 'Find answers to frequently asked questions',
    icon: 'ICON_QUESTION',
  },
};

export const Gallery: Story = {
  parameters: {
    docs: { description: { story: 'Multiple InfoBox cards stacked to show typical dashboard usage.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 640 }}>
      <InfoBox title="Phone Support" caption="Call us for immediate assistance" icon="ICON_CALL" />
      <InfoBox title="Billing Info" caption="Manage payments and invoices" icon="ICON_BILL" />
      <InfoBox title="Edit Settings" caption="Customize your account settings" icon="ICON_EDIT" />
    </div>
  ),
};
