import { WeatherService } from '@/service/weatherService'
import { type WeatherData, type ForecastData } from '@/types/weather'

export class WeatherModel {
  static async getWeatherByCity(city: string): Promise<WeatherData> {
    const data = await WeatherService.getWeatherByCity(city)
    return this.transformWeatherData(data)
  }

  static async getWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
    const data = await WeatherService.getWeatherByCoords(lat, lon)
    return this.transformWeatherData(data)
  }

  static async getForecast(lat: number, lon: number): Promise<ForecastData[]> {
    const data = await WeatherService.getForecast(lat, lon)
    return this.transformForecastData(data)
  }

  private static transformWeatherData(data): WeatherData {
    return {
      city: data.name,
      temp: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
      lat: data.coord.lat,
      lon: data.coord.lon
    }
  }

  private static transformForecastData(data): ForecastData[] {
    const dailyData = data.list.filter((item) => item.dt_txt.includes('12:00:00'))
    return dailyData.slice(0, 5).map((item) => ({
      day: new Date(item.dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' }),
      temp: Math.round(item.main.temp),
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    }))
  }
}

