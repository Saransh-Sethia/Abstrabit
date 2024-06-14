import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';


const SwiperCard = ({ question, id }) => {
  return (
    <Card sx={{ maxWidth: 300 }} key={id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {question.question}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {question.answer}
        </Typography>

      </CardContent>

    </Card>
  );
};

export default SwiperCard;