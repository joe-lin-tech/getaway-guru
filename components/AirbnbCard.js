import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
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

const AirbnbCard = ({ roomInfo }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(roomInfo)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<p className="text-lg font-bold line-clamp-2">{roomInfo.name}</p>}
        city={roomInfo?.city}
      />
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden bg-gray-100">
        <img src={roomInfo.images[0]} alt="" className="pointer-events-none object-cover" />
      </div>
      <CardContent>
        <p className="text-md">
          Number of Bathrooms: {roomInfo?.bathrooms}. Number of Bedrooms: {roomInfo?.bedrooms}. Number of beds: {roomInfo?.beds}. 1 bath
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <a
          type="button"
          className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          href={roomInfo.deeplink}
          target='_blank'
        >
          Book Now!
        </a>
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

export default AirbnbCard;