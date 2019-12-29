import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { teal, grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 290,
    backgroundColor: teal[400],
    boxShadow: '1px 5px 5px 5px grey'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    width: 250,
    margin: '0 auto',
    borderRadius: 10
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[800],
  },
  info: {
      borderTop: '1px solid black',
      marginLeft: 20,
      marginRight: 20,
  }
}));

export default function RecipeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="French Toast w/fruit"
        subheader="December 29th, 2019"
      />
      <CardMedia
        className={classes.media}
        image={require('../images/Frenchtoast.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive French Toast is a perfect breakfast dish and a fun meal to cook together with your
          guests. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.info}>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            1 teaspoon ground cinnamon
            <br/>
            1/4 teaspoon ground nutmeg
            <br/>
            2 tablespoons sugar
            <br/>
            4 tablespoons butter
            <br/>
            4 eggs
            <br/>
            1/4 cup milk
            <br/>
            1/2 teaspoon vanilla extract
            <br/>
            8 slices challah, brioche, or white bread
            <br/>
            1/2 cup maple syrup, warmed
          </Typography>
          <Typography paragraph>
            1. In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.
            <br/>
            2. In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. 
            Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.     
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};