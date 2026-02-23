import type { Meta, StoryObj } from '@storybook/react';
import Loader from './index';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-width page loader that renders a LinearProgress bar fixed at the top of the viewport. Used as a global loading indicator.',
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
