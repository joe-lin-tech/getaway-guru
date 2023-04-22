import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AirbnbCard({roomInfo}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("roomInfo in AirbnbCard:" + roomInfo);
  // console.log("roomName:" + roomInfo.name);
  console.log("roomTitle:" + roomInfo?.name ?? "");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="room">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={roomInfo?.name}
        city={roomInfo?.city}
      />
      <CardMedia
        component="img"
        height="194"
        image={roomInfo?.images[0]}
        alt="Room Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Number of Bathrooms: {roomInfo?.bathrooms}. Number of Bedrooms: {roomInfo?.bedrooms}. Number of beds: {roomInfo?.beds}. 1 bath
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Pricing: {roomInfo?.price.rate} {roomInfo?.price.currency}</Typography>
          <Typography paragraph>
            Address: {roomInfo?.address}
          </Typography>
          <Typography paragraph>
            Amenities: {roomInfo?.previewAmenities[0]}
          </Typography>
          <Typography paragraph>
            Rating: {roomInfo?.rating}
          </Typography>
          <Typography>
            Airbnb URL: {roomInfo?.url}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}