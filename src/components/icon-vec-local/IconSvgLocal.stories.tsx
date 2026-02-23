import type { Meta, StoryObj } from '@storybook/react';
import { IconSvgLocal, IconSvgTypes } from './index';

const allIcons: IconSvgTypes[] = [
  'ICON_CALENDAR', 'ICON_CALL', 'ICON_DROP_DOWN', 'ICON_ARROW_LEFT',
  'ICON_EYE_SPLASH', 'ICON_EYE_OPEN', 'ICON_INFO_SOLID', 'ICON_CHECK_GREEN',
  'ICON_WARNING', 'ICON_ERROR', 'ICON_CLOSE_TAKE_NOTE', 'ICON_CHECK',
  'ICON_ARROW_CIRCLE_UP', 'ICON_BILL', 'ICON_EDIT', 'ICON_QUESTION',
];

const meta = {
  title: 'Components/IconSvgLocal',
  component: IconSvgLocal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Renders local SVG icons by name with customizable size and fill color. Icons are bundled via @svgr/webpack.',
      },
    },
  },
  args: {
    name: 'ICON_CALENDAR',
    width: 24,
    height: 24,
  },
  argTypes: {
    name: {
      control: 'select',
      options: allIcons,
      description: 'Icon identifier from the local SVG icon set',
    },
    width: {
      control: { type: 'number', min: 8, max: 96 },
      description: 'Icon width in pixels',
      table: { defaultValue: { summary: '24' } },
    },
    height: {
      control: { type: 'number', min: 8, max: 96 },
      description: 'Icon height in pixels',
      table: { defaultValue: { summary: '24' } },
    },
    fill: {
      control: 'color',
      description: 'SVG fill color override',
    },
  },
} satisfies Meta<typeof IconSvgLocal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFill: Story = {
  args: {
    name: 'ICON_CALL',
    fill: 'rgb(0, 114, 188)',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'ICON_EDIT',
    width: 48,
    height: 48,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'ICON_CHECK',
    width: 16,
    height: 16,
  },
};

export const Gallery: Story = {
  parameters: {
    docs: { description: { story: 'Grid of all available icons for quick reference.' } },
  },
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
    }}>
      {allIcons.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 16,
            border: '1px solid #e4e5f0',
            borderRadius: 8,
          }}
        >
          <IconSvgLocal name={name} width={32} height={32} />
          <span style={{ fontSize: 11, color: '#82869e', textAlign: 'center', wordBreak: 'break-all' }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const ColorVariants: Story = {
  parameters: {
    docs: { description: { story: 'Semantic color usage — info, success, warning, and error.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <IconSvgLocal name="ICON_INFO_SOLID" width={32} height={32} fill="rgb(58, 158, 252)" />
      <IconSvgLocal name="ICON_CHECK_GREEN" width={32} height={32} fill="rgb(30, 187, 77)" />
      <IconSvgLocal name="ICON_WARNING" width={32} height={32} fill="rgb(255, 153, 31)" />
      <IconSvgLocal name="ICON_ERROR" width={32} height={32} fill="rgb(228, 52, 52)" />
    </div>
  ),
};
