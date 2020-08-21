import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Grid from '@material-ui/core/Grid';
import Footer from '@theme/Footer';

import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const lightTheme = makeStyles({
  navBar: {
    paddingLeft: "5%",
    paddingRight: "5%",
    height: "auto",
    backgroundColor: "#F6F6F6"
  },
  img_logo_container: {
    width: "100%"
  }
})

const NavBar = () => {
  return (
    <div className={styles.navBar_style}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4}>
          <div className={styles.img_logo_container}>
            <img src="img/logos/logo_overWhite_fit.png" className={styles.img_logo_container} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} >
          <div className={styles.navTextContainer} display={{ xs: "none", sm: "none", md: "block" }}>
            <a className={styles.navText} href="docs/investigacion">Ideario</a>
            <a className={styles.navText}>Candidatura</a>
            <a className={styles.navText}>Sobre mí</a>
            <a className={styles.navText}>Consejo Insitucional</a>
          </div>
        </Grid>
      </Grid>
    </div>

  );
}

const Banner = () => {
  return (
    <div className={styles.bannerPrincipal}>
      <Grid
        container
        align="center"
        justify="center"
        direction="column"
        spacing={0}
        className={styles.left_container}>
        <Grid item className={styles.left_container_aux}>
          <h1 className={styles.idea_text}>Idea de propuesta 1</h1>
          <h1 className={styles.summary_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h1>
          <button className={styles.mainbutton}> Ver más</button>
        </Grid>
      </Grid>
    </div>
  );
}

const CustomCard = (props) => {  
  return (
    <div className={styles.card} >
      <CardActionArea onClick={() => window.open(props.href, "_self")}>
        <div className={styles.imgCardContainer}> 
          <img src={props.img} className={styles.imgCard}/>
        </div>
        <CardContent>
          <h1 className={styles.tittlecard}>{props.title}</h1>
        </CardContent>
      </CardActionArea>
    </div>
  );
}

const PropuestasPorSector = () => {
  return (
    <div className={styles.row_white}>
      <h1 className={styles.titleSection}>Sectores</h1>
      <br></br>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Investigación"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/investigacion.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Extensión y acción social"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/extension.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Docencia"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/docente.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Estudiantes"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/estudiantil.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Apoyo a la Academia"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/administrativo.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Escuelas y Áreas Académicas"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/escuelas.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="VIESA  "
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/viesa.png"></CustomCard>
      </Grid>
    </Grid>
    </div>
  );
}

const PropuestasPorSede = () => {
  return (
    <div className={styles.row_white}>
      <h1 className={styles.titleSection}>Campus Tecnológicos  y Centros Académicos</h1>
      <br></br>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="San Carlos"
          href= "/docs/open-source-guidelines"
          img=""></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="San José"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/extension.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Alajuela"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/docente.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Limón"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/estudiantil.png"></CustomCard>
      </Grid>
    </Grid>
    </div>
  );
}

function Home() {
  return (
    <div >
      <NavBar></NavBar>
      <Banner></Banner>
      <PropuestasPorSector></PropuestasPorSector>
      <PropuestasPorSede></PropuestasPorSede>
      <Footer></Footer>
    </div>
  );
}

export default Home;
