import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

    return (
        <div className="infobox">
            <h1>Weather - {info.Weather}</h1>

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://openweather.co.uk/storage/app/uploads/public/306/_ow/_fo/306_ow_fog_1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}