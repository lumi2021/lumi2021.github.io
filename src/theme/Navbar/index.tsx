import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

import styles from './styles.module.css';

export default function Navbar(): ReactNode {
  return (
    <div>
      <div className={styles.navbar_spacer}>
      </div>

      <div className={styles.navbar}>
        <NavbarLayout>
          <NavbarContent />
        </NavbarLayout>
      </div>

    </div>
  );
}
