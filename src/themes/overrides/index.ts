// MATERIAL - UI
import { Theme } from '@mui/material/styles';

// THIRD - PARTY
import { merge } from 'lodash';

// PROJECT IMPORTS

import LinearProgress from './LinearProgress';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(LinearProgress());
}
