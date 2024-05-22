import { useState, useEffect } from "react"

const WeatherApp = () => {
    const [weather, setWeather] = useState("")

    const handleSubmit = (e) => { // stops the browser refreshing after okay is pressed on the alert
        e.preventDefault();

        alert("Retrieving the weather for you ..."); // show a popup with whatever was inputted
    }

    return (
        <div id="container">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text"
                        value={weather}
                        onChange={(e) => setWeather(e.target.value)}
                        placeholder="Enter your city/town" />
                </label>
                <button onClick={searchPressed} className="btn" type="submit">Check Weather</button>
            </form>
        </div>
    )
}


// const WeatherApp = () => {
//     return(
//         <div>
//             <h1>/</h1>
//         </div>
//     )
// }

export default WeatherApp