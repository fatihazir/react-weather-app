import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from "react-accessible-accordion"
import './Forecast.css'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayInTheWeek = new Date().getDay()
    const forecastDays = daysOfWeek.slice(dayInTheWeek, daysOfWeek.length).concat(daysOfWeek.slice(0, dayInTheWeek))
    if (data) {
        return (
            <>
                <label className="title">Daily Forecast</label>
                <Accordion allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, index) => (
                        <AccordionItem key={index.toString()}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="dailyItem">
                                        <img alt="weather" className="iconSmall" src={`icons/${item.weather[0].icon}.png`} />
                                        <label className="day">{forecastDays[index]}</label>
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="min-max">{parseInt(item.main.temp_min)}°C / {parseInt(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="dailyDetailsGrid">
                                    <div className="dailyDetailsGridItem">
                                        <label>Pressure</label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="dailyDetailsGridItem">
                                        <label>Humidity</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="dailyDetailsGridItem">
                                        <label>Clouds</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="dailyDetailsGridItem">
                                        <label>Wind speed</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="dailyDetailsGridItem">
                                        <label>Feels like</label>
                                        <label>{parseInt(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>

                        </AccordionItem>
                    ))}
                </Accordion>
            </>
        )
    } else {
        return null
    }
}

export default Forecast