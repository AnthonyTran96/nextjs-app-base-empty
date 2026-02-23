import type { Meta, StoryObj } from '@storybook/react';
import AppSegment, { AppSegmentVertical } from './index';

const meta = {
  title: 'Components/Segment',
  component: AppSegment,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabbed segment control with horizontal and vertical variants. Each option includes a label, value, and associated panel content. Supports block layout, custom header content, and render-all-panels mode.',
      },
    },
  },
  argTypes: {
    options: {
      control: false,
      description: 'Array of { label, value, panel } segment options',
    },
    defaultValue: {
      control: 'text',
      description: 'Initially active segment value',
    },
    block: {
      control: 'boolean',
      description: 'When true, segment tabs stretch to fill the container width',
      table: { defaultValue: { summary: 'true' } },
    },
    renderAllPanel: {
      control: 'boolean',
      description: 'When true, all panels are rendered in the DOM (hidden via CSS) instead of unmounting inactive ones',
      table: { defaultValue: { summary: 'false' } },
    },
    customContent: {
      control: false,
      description: 'React node rendered alongside the segment tabs (e.g. a filter label)',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppSegment>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'Tab 1', value: 'tab1', panel: <div style={{ padding: 16 }}>Content for Tab 1</div> },
  { label: 'Tab 2', value: 'tab2', panel: <div style={{ padding: 16 }}>Content for Tab 2</div> },
  { label: 'Tab 3', value: 'tab3', panel: <div style={{ padding: 16 }}>Content for Tab 3</div> },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'tab1',
  },
};

export const TwoTabs: Story = {
  args: {
    options: [
      { label: 'Overview', value: 'overview', panel: <div style={{ padding: 16 }}>Overview content here</div> },
      { label: 'Details', value: 'details', panel: <div style={{ padding: 16 }}>Detailed information here</div> },
    ],
    defaultValue: 'overview',
  },
};

export const NotBlock: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'tab1',
    block: false,
  },
  parameters: {
    docs: { description: { story: 'Tabs shrink to fit their content instead of stretching.' } },
  },
};

export const WithCustomContent: Story = {
  args: {
    options: [
      { label: 'All', value: 'all', panel: <div style={{ padding: 16 }}>All items</div> },
      { label: 'Active', value: 'active', panel: <div style={{ padding: 16 }}>Active items</div> },
    ],
    defaultValue: 'all',
    customContent: <div style={{ padding: '8px 16px', fontWeight: 'bold' }}>Filter</div>,
  },
};

export const RenderAllPanels: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'tab1',
    renderAllPanel: true,
  },
  parameters: {
    docs: { description: { story: 'All panels stay mounted in the DOM — useful when panels contain stateful content.' } },
  },
};

export const Vertical: Story = {
  parameters: {
    docs: { description: { story: 'Vertical segment variant with side-by-side tab list and panel.' } },
  },
  render: () => (
    <AppSegmentVertical
      options={[
        {
          label: <div style={{ padding: 8 }}>Option A</div>,
          value: 'a',
          panel: <div style={{ padding: 16 }}>Panel A content</div>,
        },
        {
          label: <div style={{ padding: 8 }}>Option B</div>,
          value: 'b',
          panel: <div style={{ padding: 16 }}>Panel B content</div>,
        },
        {
          label: <div style={{ padding: 8 }}>Option C</div>,
          value: 'c',
          panel: <div style={{ padding: 16 }}>Panel C content</div>,
        },
      ]}
      defaultValue="a"
    />
  ),
};
