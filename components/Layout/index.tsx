import classnames from 'classnames';

import { CustomSnackBar } from '@components/CustomSnackBar';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import styles from './layout.module.css';

export default function Layout({
  children,
  isHero,
}: {
  children: React.ReactNode;
  isHero?: boolean;
}) {
  return (
    <>
      <CustomSnackBar />
      <Header />
      <main
        className={classnames(styles.main, {
          [styles.isHero]: isHero,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
