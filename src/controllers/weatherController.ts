import { useState, useCallback } from 'react'
// import { useDebounce } from '../utils/useDebounce'
import { WeatherModel } from '../models/weatherModel'
import { type WeatherData, type ForecastData } from '../types/weather'

export function useWeatherController() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(true)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [forecastLoading, setForecastLoading] = useState(false)
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastData[]>([])
  const [error, setError] = useState('')

  // const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const handleSearch = useCallback(async (query: string) => {
    setWeatherLoading(true)
    setForecastLoading(true)
    setError('')
    try {
      const weatherData = await WeatherModel.getWeatherByCity(query)
      setCurrentWeather(weatherData)
      const forecastData = await WeatherModel.getForecast(weatherData.lat, weatherData.lon)
      setForecast(forecastData)
    } catch (error) {
      console.error('Error:', error)
      setError('Ciudad no encontrada o error en la búsqueda')
      setCurrentWeather(null)
      setForecast([])
    } finally {
      setWeatherLoading(false)
      setForecastLoading(false)
    }
  }, [])

  const getClientLocation = useCallback(() => {
    setLoading(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const weatherData = await WeatherModel.getWeatherByCoords(latitude, longitude)
            setCurrentWeather(weatherData)
            setLocation(weatherData.city)
            const forecastData = await WeatherModel.getForecast(latitude, longitude)
            setForecast(forecastData)
          } catch (error) {
            console.error('Error:', error)
            setError('Error al obtener los datos del clima')
          } finally {
            setLoading(false)
          }
        },
        (error) => {
          console.error("Error getting location:", error)
          setLocation("Ubicación no disponible")
          setLoading(false)
        }
      )
    } else {
      setLocation("Geolocalización no soportada")
      setLoading(false)
    }
  }, [])

  return {
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
    getClientLocation
  }
}

