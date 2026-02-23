import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar, { TypeProgressBar } from './index';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Multi-step progress indicator with two display modes: numbered step circles with labels, or a compact segmented line bar.',
      },
    },
  },
  args: {
    type: TypeProgressBar.STEP,
    stepTitles: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    currentStep: 2,
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(TypeProgressBar),
      description: 'Display mode — step circles with labels or compact line segments',
      table: { defaultValue: { summary: TypeProgressBar.STEP } },
    },
    currentStep: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Active step index (1-based). Steps before this are marked complete.',
    },
    stepTitles: {
      control: 'object',
      description: 'Array of step label strings',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepDefault: Story = {};

export const StepCompleted: Story = {
  args: {
    stepTitles: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 4,
  },
  parameters: {
    docs: { description: { story: 'All steps completed — currentStep exceeds total steps.' } },
  },
};

export const StepFirstActive: Story = {
  args: {
    currentStep: 1,
  },
};

export const LineType: Story = {
  args: {
    type: TypeProgressBar.LINE,
    stepTitles: ['1', '2', '3', '4', '5'],
    currentStep: 3,
  },
  parameters: {
    docs: { description: { story: 'Compact segmented line variant without step labels.' } },
  },
};

export const LineTypeStart: Story = {
  args: {
    type: TypeProgressBar.LINE,
    stepTitles: ['1', '2', '3', '4'],
    currentStep: 1,
  },
};
