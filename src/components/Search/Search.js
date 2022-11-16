import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const getGeolocation = async (input) => {
    return await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${input}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            const { name, country, latitude, longitude } = city;
            return {
              value: `${latitude} ${longitude}`,
              label: `${name}, ${country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder='Search for city'
      value={search}
      debounceTimeout={600}
      loadOptions={getGeolocation}
      onChange={handleOnChange}
    />
  );
};

export default Search;
