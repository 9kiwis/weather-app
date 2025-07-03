import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const apiKey = '5e45ca864cff0ded754a8f25eec01dc2';
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setData(res.data);
        setError(null);
      } catch (err) {
        setError('City not found');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
}
