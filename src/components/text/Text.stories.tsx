import type { Meta, StoryObj } from '@storybook/react';
import { TextBase } from './index';

const meta = {
  title: 'Components/TextBase',
  component: TextBase,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Base text component with typography presets and i18n support. Renders text with predefined styles (h1–h4, title, sub-title, body, caption) and optional translation via t18n key.',
      },
    },
  },
  args: {
    text: 'Sample text',
  },
  argTypes: {
    preset: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4',
        'title1', 'title2', 'title3', 'title4', 'title5',
        'sub-title1', 'sub-title2', 'sub-title3', 'sub-title4',
        'body1', 'body2', 'body3',
        'caption1', 'caption2', 'caption3',
      ],
      description: 'Typography preset that controls font size, weight, and line height',
    },
    text: {
      control: 'text',
      description: 'Plain text content to display',
    },
    t18n: {
      control: 'text',
      description: 'i18n translation key (takes priority over text prop)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
} satisfies Meta<typeof TextBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello World',
  },
};

export const WithPresetH1: Story = {
  args: {
    text: 'Heading 1',
    preset: 'h1',
  },
  parameters: {
    docs: { description: { story: 'Largest heading preset — 48px semibold.' } },
  },
};

export const WithPresetH2: Story = {
  args: {
    text: 'Heading 2',
    preset: 'h2',
  },
};

export const WithPresetTitle1: Story = {
  args: {
    text: 'Title 1',
    preset: 'title1',
  },
};

export const WithPresetSubTitle2: Story = {
  args: {
    text: 'Sub Title 2',
    preset: 'sub-title2',
  },
};

export const WithPresetBody1: Story = {
  args: {
    text: 'Body text content goes here',
    preset: 'body1',
  },
  parameters: {
    docs: { description: { story: 'Standard body text for paragraph content — 14px normal.' } },
  },
};

export const WithPresetCaption1: Story = {
  args: {
    text: 'Caption text',
    preset: 'caption1',
  },
};

export const AllPresets: Story = {
  parameters: {
    docs: { description: { story: 'Gallery of all available typography presets side by side.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <TextBase text="H1 - Heading" preset="h1" />
      <TextBase text="H2 - Heading" preset="h2" />
      <TextBase text="H3 - Heading" preset="h3" />
      <TextBase text="H4 - Heading" preset="h4" />
      <TextBase text="Title 1" preset="title1" />
      <TextBase text="Title 2" preset="title2" />
      <TextBase text="Title 3" preset="title3" />
      <TextBase text="Title 4" preset="title4" />
      <TextBase text="Title 5" preset="title5" />
      <TextBase text="Sub Title 1" preset="sub-title1" />
      <TextBase text="Sub Title 2" preset="sub-title2" />
      <TextBase text="Sub Title 3" preset="sub-title3" />
      <TextBase text="Sub Title 4" preset="sub-title4" />
      <TextBase text="Body 1" preset="body1" />
      <TextBase text="Body 2" preset="body2" />
      <TextBase text="Body 3" preset="body3" />
      <TextBase text="Caption 1" preset="caption1" />
      <TextBase text="Caption 2" preset="caption2" />
      <TextBase text="Caption 3" preset="caption3" />
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    preset: 'body1',
    children: <span style={{ color: 'blue' }}>Children content with custom styling</span>,
  },
  parameters: {
    docs: { description: { story: 'Supports React children as content instead of text prop.' } },
  },
};
