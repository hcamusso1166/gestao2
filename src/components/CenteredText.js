import { Typography ,makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
const useStyles = makeStyles((theme) => ({
    container: {
        background: '#ffefdd',
        padding: '4vw 4vw',
        },
}));
export function CenteredText() {
    const classes = useStyles();
    return (
    <Box margin={5} >

      
    <Grid  className={classes.container} container direction="column" justifyContent="justify" alignItems="justify" >
        <Grid item >
            <Typography variant="body1"  gutterBottom> BB&R e e-Strategia Pública, sob encomenda do BID, lançaram o projeto </Typography>
        </Grid>
        <Grid item >
            <Typography variant="body1"   gutterBottom> <b> "Apoio à Elaboração de um Programa Nacional de Fortalecimento do Planejamento e Gestão Pública dos Estados Brasileiros".</b></Typography>
        </Grid>
        <Grid item >
            <Typography variant="body1"  gutterBottom> Cujo objetivo é promover melhorias na administração pública dos Estados Brasileiros. Este site apresenta uma síntese das lições aprendidas durante a implementação do projeto.</Typography>
        </Grid>
    </Grid>
    </Box> 
    )
}