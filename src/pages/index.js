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
            <a className={styles.navText} href="docs/quiensoy">¿Quién soy?</a> 
            <a className={styles.navText} href="docs/candidatura" >¿Por qué mi candidatura?</a>
            <a className={styles.navText} href="docs/investigacion">Ideario</a>
            <a className={styles.navText} href="https://www.tec.ac.cr/unidades/consejo-institucional" target="_blank">Consejo Institucional</a> 
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
          <h1 className={styles.idea_text}>LO QUE SOMOS… UN SOLO TEC</h1>
          <h1 className={styles.summary_text}>Soy Emanuelle Soto Cascante, profesor de matemática en el Centro Académico de Limón, con 6 años de formar parte de la comunidad del TEC.</h1>
          <button className={styles.mainbutton} onClick={() => window.open("docs/candidatura", "_self")} > Ver más</button>
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
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/sancarlos.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="San José"
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/san jose.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Alajuela"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/alajuela.png"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CustomCard 
          title="Limón"
          href= ""
          img="https://raw.githubusercontent.com/JeanVegaD/esoto/master/static/img/ilustraciones/limon.png"></CustomCard>
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
      <PropuestasPorSede></PropuestasPorSede>
      <PropuestasPorSector></PropuestasPorSector>
      <Footer></Footer>
    </div>
  );
}

export default Home;
