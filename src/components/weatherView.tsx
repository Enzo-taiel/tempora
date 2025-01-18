import { Search, Loader } from 'lucide-react'
import WeatherCard from './weatherCard'
import ForecastCard from './forescastCard'
import { type WeatherData, type ForecastData } from '@/types/weather'
import Link from 'next/link'
import { FooterCopirigth } from './footerCopiright'

interface WeatherViewProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  location: string
  loading: boolean
  weatherLoading: boolean
  forecastLoading: boolean
  currentWeather: WeatherData | null
  forecast: ForecastData[]
  error: string
  handleSearch: (query: string) => void
}

export function WeatherView({
  searchQuery,
  setSearchQuery,
  location,
  loading,
  weatherLoading,
  forecastLoading,
  currentWeather,
  forecast,
  error,
  handleSearch
}: WeatherViewProps) {
  return (
    <div className="min-h-screen">
      <header className="backdrop-blur-lg py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tempora</h1>
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
            Volver a Inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-white text-center mb-4">
          {loading ? (
            <p>Obteniendo tu ubicación...</p>
          ) : (
            <p>Tu ubicación: {location}</p>
          )}
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar ciudad..."
              className="text-black w-full px-4 py-2 rounded-full border-2 border-blue-300 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
              onClick={() => handleSearch(searchQuery)}
            >
              <Search size={24} />
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <section className="mb-12">
          {weatherLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader className="animate-spin text-white" size={48} />
            </div>
          ) : currentWeather ? (
            <WeatherCard {...currentWeather} />
          ) : (
            <p className="text-center text-white">Busca una ciudad para ver el clima actual.</p>
          )}
        </section>

        <section className="bg-[var(--paper)] backdrop-blur-lg rounded-lg shadow-xl p-6">
          <h2 className="text-2xl text-white font-semibold text-center mb-6">Pronóstico para los próximos días</h2>
          {forecastLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader className="animate-spin text-blue-500" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
              {forecast.map((day, index) => (
                <ForecastCard key={index} {...day} />
              ))}
            </div>
          )}
        </section>
      </main>

      <FooterCopirigth />
    </div>
  )
}

