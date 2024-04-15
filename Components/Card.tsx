"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props:any) {
  const { title,description,image,duration,price} = props.data
  return (
    <Card sx={{ maxWidth: 345,margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button  startIcon={<AvTimerIcon color='primary'/>}>
          {duration}
        </Button>        
        <Button variant='contained' startIcon={<CurrencyRupeeIcon/>}>
            {price}
        </Button>        
      </CardActions>
    </Card>
  );
}