'use client'
import { useEffect } from "react";
import { WeatherView } from "../../components/weatherView";
import { useWeatherController } from "@/controllers/weatherController";

export default function WeatherPage() {
  const {
    searchQuery,
    setSearchQuery,
    location,
    loading,
    weatherLoading,
    forecastLoading,
    currentWeather,
    forecast,
    error,
    handleSearch,
    getClientLocation,
  } = useWeatherController();

  useEffect(() => {
    getClientLocation();
  }, [getClientLocation]);

  return (
    <WeatherView
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      location={location}
      loading={loading}
      weatherLoading={weatherLoading}
      forecastLoading={forecastLoading}
      currentWeather={currentWeather}
      forecast={forecast}
      error={error}
      handleSearch={handleSearch}
    />
  );
}
