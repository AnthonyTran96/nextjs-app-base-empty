// PROJECT IMPORTS
import samplePage from './sample-page';
import support from './support';
import pages from './pages';

// TYPES
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [samplePage, pages, support]
};

export default menuItems;
