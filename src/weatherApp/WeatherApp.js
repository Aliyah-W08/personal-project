import { useState, useEffect } from "react"

const WeatherApp = () => {
    const [weatherdata, setWeatherdata] = useState(null) //store data from input field. null because no data fetched yet so when screen loads no data will show
    const [city, setCity] = useState("") // store data from the API


    const api = {
        key: "409f6514aa06f9f298afd768741df7c3",
        base: "https://api.openweathermap.org/data/2.5/weather"
    }
    const fetchData = async () => {
        try{
        const response = await fetch(`${api.base}?q=${city}&appid=${api.key}`)
        if(!response.ok){ //is response is not okay.
            throw new Error ("Location not found")
        }
        const data = await response.json()
        //convert to celsius and round to nearest whole number 
        data.main.temp = Math.round(data.main.temp - 273.15);
        setWeatherdata(data) //the state will update whenevr a new city is entered with the new data
    } catch(error){
        alert("Please enter a correct location.");
        console.error("Eroor fetching Weather data:",Error)
    }
    }

    useEffect(() => {

    }, []) // runs only once, doesnt need to fetch more data. 



    // stops the browser refreshing after button is pressed on the alert
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(); // when input is entered data will show without page refreshing

        alert("Retrieving the weather for you ...");
    }


    return (
        <div id="container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city/town" /> <br />
            </form>
            <button onClick={fetchData}>Check Weather</button>


            {/* //&& = if weatherData is not null(contains data fetched from API) then show the data in the brackets. */}
            {weatherdata && (
                <div id="weatherInfo">
                    <p>Weather for {weatherdata.name}{weatherdata.country}</p>
                    <p>Temperature: {weatherdata.main.temp}°C</p>
                    <p>Weather: {weatherdata.weather[0].description}</p>

                </div>)}
            {/* weather[0] access the dirst item of array where weather data is stored */}
        </div>
    )
}

export default WeatherApp








