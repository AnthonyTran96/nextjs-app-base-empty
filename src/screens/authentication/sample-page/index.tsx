'use client';
import { useSelector } from 'react-redux';

// MATERIAL - UI
import { Stack, Typography } from '@mui/material';

// PROJECT IMPORTS
import { selectUserInfo } from '@redux-selector/auth';
import MainCard from 'components/main-card';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const userInfo = useSelector(selectUserInfo);
  return (
    <MainCard title="Sample Card">
      <Stack mb={1}>
        <Typography variant="subtitle1">UserName: </Typography>
        <Typography variant="body2" color="secondary">
          {userInfo.fullName}
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="subtitle1">UserId: </Typography>
        <Typography variant="body2" color="secondary">
          {userInfo.userId}
        </Typography>
      </Stack>
    </MainCard>
  );
};

export default SamplePage;
