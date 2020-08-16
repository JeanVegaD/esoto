/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Grid } from '@material-ui/core';


function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;


  if (!footer) {
    return null;
  }

  return (
    <div className={styles.footer_style}>
      <Grid
        container
        spacing={0}>
        <Grid item xs={12} sm={12} md={4}>
          <div className={styles.img_logo_container}>
            <img src="img/logos/logo_overWhite_fit.png" className={styles.img_logo_container} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
