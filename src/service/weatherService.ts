const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

export class WeatherService {
  static async getWeatherByCity(city: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    console.log(response)
    if (!response.ok) throw new Error('Ciudad no encontrada')
    return response.json()
  }

  static async getWeatherByCoords(lat: number, lon: number) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    console.log(response)
    if (!response.ok) throw new Error('Error fetching weather data')
    return response.json()
  }

  static async getForecast(lat: number, lon: number) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    console.log(response)
    if (!response.ok) throw new Error('Error fetching forecast data')
    return response.json()
  }
}

