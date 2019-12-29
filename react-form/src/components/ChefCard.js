import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
    backgroundColor: grey[400],
    boxShadow: '1px 5px 5px 5px grey',
    maxHeight: 280
  },
  media: {
    height: 140,
  },
});

export default function ChefCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../images/Chef1.jpg')}
          title="Contemplative Chef"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Erik Erikson
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chef Erik loves cooking!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="grey">
          Send Message
        </Button>
        <Button size="small" color="grey">
          Visit Profile
        </Button>
      </CardActions>
    </Card>
  );
};