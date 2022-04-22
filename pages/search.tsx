import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Button, Grid, useTheme } from '@mui/material';
import { useState } from 'react';

import { UserApartments } from '@features/UserApartments';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Search() {
  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down('md'));
  const [mapIsActive, setMapIsActive] = useState(false);

  return (
    <Layout isHero>
      <SEO />
      <section>
        <div style={{ position: 'relative' }}>
          <Grid container spacing={0} sx={{ height: 'calc(100vh - 60.5px)' }}>
            {(!isMobile || !mapIsActive) && (
              <Grid item xs={12} md={4} sx={{ height: '100%', overflow: 'auto' }}>
                <h5>apartments list</h5>
                <UserApartments />
              </Grid>
            )}
            {(!isMobile || mapIsActive) && (
              <Grid item xs={12} md={8} sx={{ display: 'flex', backgroundColor: '#257238' }}>
                <div style={{ margin: 'auto' }}>map</div>
              </Grid>
            )}
          </Grid>

          {isMobile && (
            <Button
              variant="contained"
              sx={{
                color: 'text.primary',
                position: 'fixed!important',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '1300',
              }}
              onClick={() => setMapIsActive(!mapIsActive)}
            >
              switch to {mapIsActive ? 'list' : 'map'}
            </Button>
          )}
        </div>
      </section>
    </Layout>
  );
}
