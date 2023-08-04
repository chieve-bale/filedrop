import React from 'react';
import { useTranslation } from 'react-i18not';
import {
  IoLogoGithub,
  IoInformationCircle,
  IoLogoTwitter,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import styles from './Header.module.scss';
import { DropIcon } from './DropIcon';
import { applicationStore } from '../stores/ApplicationStore';

export const Header: React.FC = observer(() => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <h1>
          <Link to="/" className={styles.logo}>
            <DropIcon />
            {applicationStore.appName}
          </Link>
        </h1>
        <div className={styles.right}>
          <Link to="/about" title={t('sections.about')}>
            <IoInformationCircle />
          </Link>
          <a
            href="https://github.com/mat-sz/filedrop"
            target="_blank"
            rel="noopener noreferrer"
            title={t('sections.github')}
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://twitter.com/matsz_dev"
            target="_blank"
            rel="noopener noreferrer"
            title={t('sections.twitter')}
          >
            <IoLogoTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
});
