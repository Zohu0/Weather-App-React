import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"


const InfoBox = ({ info }) => {

    let INIT_COLD_URL = "https://images.unsplash.com/photo-1623670886092-aaf742a7ae05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGthc2htaXIlMjBpbiUyMHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";

    let INIT_RAINY_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";

    let INIT_HOT_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";


    return (
        <>
        <div className='infoBox'>
            <Card className='card'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity >= 80 ? INIT_RAINY_URL : info.temp >= 15 ? INIT_HOT_URL : INIT_COLD_URL}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textTransform: "uppercase"}}>
                        {info.city} {info.humidity >= 80 ? <ThunderstormIcon/> : info.temp >= 15 ? <LightModeIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"div"}>
                        <div className='cardInfo'>Temperature - {info.temp}&deg;C</div>
                        <div className='cardInfo'>Feels Like - {info.feelsLike}&deg;C</div>
                        <div className='cardInfo'>Humidity - {info.humidity}</div>
                        <div className='cardInfo'>Min Temp - {info.minTemp}&deg;C</div>
                        <div className='cardInfo'>Max Temp - {info.maxTemp}&deg;C</div>
                        <div className='cardInfo'>Weather - {info.weather}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default InfoBox
