import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const Description = (props) => {
    return <Grid item xs> <Typography variant="body1"> {props.description} </Typography> </Grid>
}
const TextToRight = (props) => {
    const classes = useStyles();
    return ( 
        <Grid className={classes.container} container direction="row" justifyContent="space-around" alignItems="center" >
            <Grid item xs={4}>
            <img src={props.content.img} alt="This is a test" />
            </Grid>
            <Grid item xs={4}>
                <Grid container direction="column" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="h6"> {props.content.title} </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1"><b> {props.content.subTitle}</b></Typography>
                    </Grid>
                    {props.content.descriptions.map((description) => (
                        <Description description={description} />
                    ))}
                    <Grid item xs>
                        <Typography variant="body1"><i> {props.content.finishingText}</i></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        )
}
const TextToLeft = (props) => {
    const classes = useStyles();
    return ( 
        <Grid className={classes.container} container direction="row" justifyContent="space-around" alignItems="center" >
            
            <Grid item xs={4}>
                <Grid container direction="column" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="h6"> {props.content.title} </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1"><b> {props.content.subTitle}</b></Typography>
                    </Grid>
                    {props.content.descriptions.map((description) => (
                        <Description description={description} />
                    ))}
                    <Grid item xs>
                        <Typography variant="body1"><i> {props.content.finishingText}</i></Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
            <img src={props.content.img} alt="This is a test" />
            </Grid>
        </Grid>
        )
}
export function TextWithImage(props) {
    

    return props.textToTheRight ? <TextToRight content={props.content}/> : <TextToLeft content={props.content}/>
    

}