import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import "./ButtonNav.css";


const useStyles = makeStyles({
  BotonMenu: {
    backgroundColor: "#E3A00F",
    color: "#fff",
  },

  sobreNosotros: {
    backgroundColor: "#64814A",
    color: "#fff",
  },

  ubicacion: {
    backgroundColor: "#4097DA",
    color: "#fff",
  },

  contacto: {
    backgroundColor: "#FF0000",
    color: "#fff",
  },
});

let menuBoton = "Menu";
let sobreNosotros = "Sobre Nosotros";
let ubicacion = "ubicacion";
let contacto = "contacto";

const ButtoNav = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className="header">
   
      
    <section className="navbar">
    <Grid container spacing={2}>
        <Grid item xs={2}>
      <img src="https://i.ibb.co/4wqQ2JZ/image051.png" alt="" className="isotipo"/>
         
        </Grid>
        <Grid item xs={10}>
      <div className="menu">
      <Button className={classes.BotonMenu}>{menuBoton} </Button>
      <Button className={classes.sobreNosotros}> {sobreNosotros}</Button>
      <Button className={classes.ubicacion}> {ubicacion}</Button>
      <Button className={classes.contacto}> {contacto}</Button>
      </div>
          
        </Grid>
        
      </Grid>
    </section>
  
    </Container>
    
  );
};

export default ButtoNav;
