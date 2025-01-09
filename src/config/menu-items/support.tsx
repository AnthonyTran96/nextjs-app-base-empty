// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { ShieldCross, I24Support } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  disabledMenu: ShieldCross,
  documentation: I24Support
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support: NavItemType = {
  id: 'other',
  title: <FormattedMessage id="others" />,
  type: 'group',
  children: [
    {
      id: 'disabled-menu',
      title: <FormattedMessage id="disabled-menu" />,
      type: 'item',
      url: '#',
      icon: icons.disabledMenu,
      disabled: true
    },
    {
      id: 'documentation',
      title: <FormattedMessage id="documentation" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react',
      icon: icons.documentation,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'info',
        size: 'small'
      }
    }
  ]
};

export default support;
