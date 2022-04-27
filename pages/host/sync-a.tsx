import React from 'react';
import { useSelector } from 'react-redux';

import { getActiveStep } from '@store/syncA/selectors';
import { getCurrentUser } from '@store/auth/selectors';

import { Container } from '@mui/material';

import Layout from '@components/Layout';
import SEO from '@components/SEO';

import GetDataStep from '@features/SyncA/GetDataStep';
import MoveDataStep from '@features/SyncA/MoveDataStep';
import { useAuthCheck } from '@hooks/useAuthCheck';
import { LoginWall } from '@features/LoginWall';

export default function SyncA() {
  useAuthCheck();
  const currentUser = useSelector(getCurrentUser);
  const activeStep = useSelector(getActiveStep);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <GetDataStep />;
      case 1:
        return <MoveDataStep />;
      default:
        return <div>active step error</div>;
    }
  };

  return (
    <Layout isHero>
      <SEO />
      <section>
        <Container maxWidth="lg">{currentUser ? getStepContent(activeStep) : <LoginWall />}</Container>
      </section>
    </Layout>
  );
}
