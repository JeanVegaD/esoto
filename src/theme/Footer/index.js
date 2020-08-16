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
            <img src="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/logos/logo_overBlack.png" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Ideario</h1>
          <h1 className={styles.content_footer}>Propuesta 1</h1>
          <h1 className={styles.content_footer}>Propuesta 2</h1>
          <h1 className={styles.content_footer}>Propuesta 3</h1>

        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Ideario</h1>
          <h1 className={styles.content_footer}>Propuesta 1</h1>
          <h1 className={styles.content_footer}>Propuesta 2</h1>
          <h1 className={styles.content_footer}>Propuesta 3</h1>

        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Contacto</h1>
          <h1 className={styles.content_footer}>Correo</h1>
          <h1 className={styles.content_footer}>Telefono</h1>
          <h1 className={styles.content_footer}>Facebook</h1>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid
        container
        spacing={0}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h1 className={styles.designBy_text}>Design by</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className={styles.designBy}>
            <img src="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/logos/logo_JAVD.png" onClick={() => window.open("https://vegadiaz.com/jean", "_blank")} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
