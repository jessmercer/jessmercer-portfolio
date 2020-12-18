import React from 'react';

import Loader from '../../components/loader';

import styles from './index.module.css';

const PageLoader = () => (
  <div className={styles.pageLoaderWrapper} data-qa="page-loader">
    <Loader />
  </div>
);

export default PageLoader;
