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
import './Schedule.css'

const ScheduleCard = ({ detail, id }) => {
  return (
    <Card
      sx={{ minWidth:350, backgroundColor: `${detail.backgroundColor}` }}
      key={id}
    >
      <CardContent sx={{display:'flex', flexDirection:'column',justifyContent:'space-around', alignItems:'space-evenly'}}>
        <Typography gutterBottom variant="h5" component="div">
          {detail.title}
        </Typography>

        <div className="schedule-container">
            <div className="date">
        <Typography gutterBottom variant="h5" component="div" className="date1">
          {detail.date}
        </Typography>
        <Typography gutterBottom variant="p" component="div" className="month">
          {detail.month}
        </Typography>
        </div>
        
        <div className="title2">
        <Typography  color="#111111" variant="p" sx={{width:'100px'}}>
          
            {detail.title2}
          
        </Typography>
        <div className="credentials">
            <div>
            <p className="credentials1">Deposit Amount</p>
            <p>Rs {detail.deposit_amount}</p>
            </div>
            <div>
            <p className="credentials1">Tenure</p>
            <p>{detail.tenure} Months</p>
            </div>
            <div>
            <p className="credentials1">Interest Rate</p>
            <p>{detail.rate}%</p>
            </div>
        </div>
        </div>
        <div>
        <CardActions className="btn">
        <Button
          size="medium"
          sx={{
            backgroundColor:"#3B39D9",
            color: "#ffffff",
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'flex-end',
            marginLeft:'200px'
          }}
        >
          {detail.button1}
        </Button>
        <Button
          size="large"
          className="btn-2"
          sx={{
            
            backgroundColor:"#ffffff",
            color: "#3B39D9",
          }}
        >
          {detail.button2}
        </Button>
      </CardActions>
      </div>
        </div>
        
      </CardContent>
 
    </Card>
  );
};

export default ScheduleCard;