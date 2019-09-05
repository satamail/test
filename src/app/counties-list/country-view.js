import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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

export default function CountryView({country}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
console.log(country)
    return (
        <Card className={classes.card}>
            <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {country.name}
                    </Typography>
                <Typography variant="h5" component="h2">
                    languages:
                    <ul>
                        {
                            country.languages.map((language, index) =>
                                <li key={index}>{language.name}({language.native})</li>
                            )
                        }
                    </ul>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Placed on {country.continent.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/countries/${country.code}`}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
