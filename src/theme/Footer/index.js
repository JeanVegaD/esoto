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
        spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <div className={styles.img_logo_container}>
            <img src="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/logos/logo_overBlack.png" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Ideario</h1>
          <h1 className={styles.content_footer} ><a className={styles.content_footer_link} href="docs/quiensoy">Campus Tecnológicos  y Centros Académicos</a> </h1>
          <h1 className={styles.content_footer} ><a className={styles.content_footer_link} href="docs/investigacion">Sectores</a> </h1>
          <h1 className={styles.content_footer} ><a className={styles.content_footer_link} href="docs/quiensoy">Temas de interés</a> </h1>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Candidatura</h1>
          <h1 className={styles.content_footer} ><a className={styles.content_footer_link} href="docs/quiensoy">¿Quién soy?</a> </h1>
          <h1 className={styles.content_footer}><a className={styles.content_footer_link} href="docs/candidatura" >¿Por qué mi candidatura?</a></h1>

        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <h1 className={styles.title_footer}>Contacto</h1>

          <h1 className={styles.content_footer} ><i class="far fa-envelope"></i><a className={styles.content_footer_link} href = "mailto: esoto.candidato@itcr.ac.cr"> esoto.candidato@itcr.ac.cr</a> </h1>
          <h1 className={styles.content_footer} ><i class="fas fa-phone"></i><a className={styles.content_footer_link} href="tel:+506 8704 8645"> +506 8704 8645</a> </h1>

          <h1 className={styles.content_footer}> </h1>
          <h1 className={styles.content_footer}> </h1>
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
