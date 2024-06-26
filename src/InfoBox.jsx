import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({weatherinfo}) {
   const RAIN_URL ="https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.jpg?s=2048x2048&w=is&k=20&c=O-P9g8WuP7Bk2m4ZXHc6uF_IFXYLWic2UGovKJQokcg=";
   const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return (
        <div className="InfoBox">
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weatherinfo.humidity>80 ? RAIN_URL: weatherinfo.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent className='card-content'>
                    <Typography gutterBottom variant="h5" component="div">
                    {weatherinfo.city} {weatherinfo.humidity>80 ? <ThunderstormIcon/> :  weatherinfo.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : {weatherinfo.temp}&deg;C</p>
                        <p>Humidity : {weatherinfo.humidity}</p>
                        <p>Min. Temp : {weatherinfo.tempMin}&deg;C </p>
                        <p>Max. Temp : {weatherinfo.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{weatherinfo.weather }</i> and feels like {weatherinfo.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    );
};