import './Forecast.css';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const todayInAWeek = new Date().getDay();
  const forecast = weekDays
    .slice(todayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, todayInAWeek));

  return (
    <div className='week-container'>
      {data.list.slice(0, 7).map((item, id) => {
        return (
          <div className='daily-item' key={id}>
            <label className='day'>{forecast[id]}</label>
            <label className='temp'>{Math.round(item.main.temp)}°C</label>
            <label className='description'>{item.weather[0].description}</label>
            <img
              alt='weather'
              className='icon-small'
              src={`icons/d${item.weather[0].icon}.png`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
