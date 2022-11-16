import './CurrentWeather.css';

const CurrentWeather = ({ data, time }) => {
  return (
    <div className='weather-container'>
      <div className='top-container'>
        <div>
          <p className='city-name'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
      </div>
      <div className='bottom-container'>
        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
        <img
          src={`icons/l${data.weather[0].icon}.png`}
          alt='weather'
          className='weather-icon'
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
