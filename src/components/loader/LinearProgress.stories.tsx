import type { Meta, StoryObj } from '@storybook/react';
import LinearProgress from './linear-progress';

const meta = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Indeterminate linear progress bar with customizable colors and dimensions.',
      },
    },
  },
  args: {
    width: '100%',
    height: 4,
  },
  argTypes: {
    width: {
      control: 'text',
      description: 'Bar width — accepts CSS value (px, %, etc.)',
      table: { defaultValue: { summary: '100%' } },
    },
    height: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Bar height in pixels',
      table: { defaultValue: { summary: '4' } },
    },
    backgroundColor: {
      control: 'color',
      description: 'Track background color',
      table: { defaultValue: { summary: 'rgb(var(--primary-50))' } },
    },
    color: {
      control: 'color',
      description: 'Active bar color',
      table: { defaultValue: { summary: 'rgb(var(--primary-500))' } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#e0e0e0',
    color: '#4caf50',
  },
  parameters: {
    docs: { description: { story: 'Custom green progress bar on gray track.' } },
  },
};

export const CustomSize: Story = {
  args: {
    height: 8,
  },
};

export const Thin: Story = {
  args: {
    height: 2,
  },
};
