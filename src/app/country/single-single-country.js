import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SingleCountryView({country}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {country.name}
                    </Typography>
                <Typography variant="h5" component="h2">
                    currency: {country.currency}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Area code {country.continent.code}
                </Typography>
            </CardContent>
        </Card>
    );
}
