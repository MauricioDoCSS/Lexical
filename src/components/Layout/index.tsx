import styles from './styles.module.scss';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
