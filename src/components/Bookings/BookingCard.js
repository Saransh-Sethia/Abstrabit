import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookingCard = ({ company, id }) => {
  return (
    <Card
      sx={{ minWidth:350, backgroundColor: `${company.backgroundColor}` }}
      key={id}
    >
      <CardMedia image={company.logo} />
      <CardContent sx={{display:'flex', flexDirection:'column',justifyContent:'space-around', alignItems:'space-evenly'}}>
        <Typography gutterBottom variant="h5" component="div">
          {company.title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip
            sx={{ backgroundColor: `${company.chipColor}` }}
            label={`${company.chip1}`}
            icon={<CheckCircleIcon sx={{backgroundColor:`${company.buttonBackgroundColor}`}}/>}
          />
          <Chip
            icon={<CheckCircleIcon sx={{backgroundColor:`${company.buttonBackgroundColor}`}}/>}
            sx={{ backgroundColor: `${company.chipColor}` }}
            label={`${company.chip2}`}
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{width:'100px'}}>
          <h3>
            Interest Upto <span>{company.rate}% p.a</span>
          </h3>
        </Typography>
        <Typography component="legend"></Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          sx={{
            backgroundColor: `${company.buttonBackgroundColor}`,
            color: "#ffffff",
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'flex-end',
            marginLeft:'200px'
          }}
        >
          {company.button}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookingCard;
