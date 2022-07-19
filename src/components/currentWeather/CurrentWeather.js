import "./CurrentWeather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Belgrade</p>
                <p className="weatherDescription">Sunny</p>
            </div>
            <img alt="weather" className="weatherIcon" src="icons/01d.png"/>
        </div>
    )
}

export default CurrentWeather