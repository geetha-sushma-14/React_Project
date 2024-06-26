import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default function searchbox({updateInfo}) {
    // const useStyles = makeStyles({
    //     root: {
    //       '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //           borderColor: 'green', // default border color
    //         },
    //         '&:hover fieldset': {
    //           borderColor: 'blue', // border color on hover
    //         },
    //         '&.Mui-focused fieldset': {
    //           borderColor: 'red', // border color when focused
    //         },
    //       },
    //     },
    //   });
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c6be5d65c7ded375cda98d032f49ef22";
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);

    let getweatherinfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            let result = {
                city : city,
                temp : jsonresponse.main.temp,
                tempMin : jsonresponse.main.temp_min,
                tempMax : jsonresponse.main.temp_max,
                humidity : jsonresponse.main.humidity,
                feelsLike :jsonresponse.main.feels_like,
                weather : jsonresponse.weather[0].description
            };
            return result;
        } catch(err) {
            throw err;
        };
        
    };
    let handleChange= (event)=>{
        setcity(event.target.value);
    };
    let handlesubmit = async (event)=>{
        try{
            event.preventDefault();
            seterror(false)
            setcity("");
            let newinfo = await getweatherinfo();
            updateInfo(newinfo);
        } catch (err) {
            seterror(true);
        };
        
    };
    return(
        <div className='searchbox'>
            <form action="" onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} className='textfield' required/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && 
                    <Alert severity="info" className='alert'>
                    <AlertTitle>OOPS!!</AlertTitle>
                    No such place exists in our API!
                    </Alert>
                }
            </form>
        </div>
    )
}