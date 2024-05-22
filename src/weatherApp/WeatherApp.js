import { useState, useEffect } from "react"

const WeatherApp = () => {
    const [weather, setWeather] = useState("")
    const [apiResult, setapiResult] = useState({})

    const handleSubmit = (e) => { // stops the browser refreshing after okay is pressed on the alert
        e.preventDefault();

        alert("Retrieving the weather for you ..."); // show a popup with whatever was inputted
    }

    const api = {
        key: "409f6514aa06f9f298afd768741df7c3",
        base: "https://home.openweathermap.org/api_keys"
    }

    const searchPressed = () => {
        fetch(`api.openweathermap.org/data/2.5/forecast?${weather}id=524901&appid=${api.key}`)
            .then(response => response.json())
            .then((response) => {
                setapiResult = response
            })

    }


    return (
        <div id="container">
            <div id="inputandbutton">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        onChange={(e) => setWeather(e.target.value)}
                        placeholder="Enter your city/town" />
                    <button onClick={searchPressed} className="btn" type="submit">Check Weather</button>
                </form>
                <p>{apiResult.name}</p>
            </div>
            <p>{apiResult.name}</p>
        </div>
    )
}

export default WeatherApp