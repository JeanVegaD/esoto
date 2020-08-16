import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


import Grid from '@material-ui/core/Grid';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';


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
            <a className={styles.navText} href="docs/propuesta1">Ideario</a>
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
    /*
      <div className={styles.bannerPrincipal}>
        
  
      </div>*/
  );
}

function Home() {
  let classes = lightTheme();

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
    </div>



  );
}

export default Home;
