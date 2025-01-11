// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import { AuthWrapper } from '@unauth-common/components';
import { ROUTES } from 'config/routes';
import AuthLogin from './components/AuthLogin';

// ================================|| LOGIN ||================================ //

const Login = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
            <Typography
              component={Link}
              href={ROUTES.REGISTER}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
              passHref
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
