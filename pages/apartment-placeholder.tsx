import Layout from '@components/Layout';

import SEO from '@components/SEO';
import { Box } from '@material-ui/core';
import {Container, Typography, Stack, Button, Grid, styled, Paper, Divider} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'188px'
}));
const BigItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:"400px",
}));

export default function ApartmentPlaceholder() {
  return (
    <Layout>
      <SEO />
      <section>
        <Container maxWidth='lg'>
          <header>
            <Typography variant='h4' component='div'>1-комн. квартира, 45 кв.м. очень красивая</Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>

              <Box sx={{display:'flex'}}>
                <div>icon-list</div>
                <div>tooltip-icon</div>
                <div>location-link</div>
              </Box>
              <div>share</div>
            </Box>
          </header>

          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap={4} alignItems="stretch" sx={{mb:3}}>
            <Box gridColumn="span 8" gridRow="1/3">
              <BigItem>main/first image</BigItem>
            </Box>
            <Box gridColumn="span 4" gridRow="1">
              <Item>aside image</Item>
            </Box>
            <Box gridColumn="span 4" gridRow="2">
              <Item sx={{height:'188px'}}>aside image</Item>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={8}>
              <div>common info</div>
              <Divider/>
              <div>description</div>
              <Divider/>
              <div>check-in</div>
              <Divider/>
              <div>advantages</div>
              <Divider/>
              <div>rules</div>

            </Grid>
            <Grid item xs={4}>
              <Paper>pinned block</Paper>
            </Grid>
          </Grid>
          <Divider/>
          <div>map</div>
          <Divider/>
          <div>owner</div>

        </Container>
      </section>
    </Layout>
  );
}
