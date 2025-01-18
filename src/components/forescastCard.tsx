import Image from "next/image"
interface ForecastCardProps {
  day: string 
  temp: number
  icon: string
}

export default function ForecastCard({ day, temp, icon }: ForecastCardProps) {
  return (
    <div className="bg-[var(--paper-in-paper)] backdrop-blur-lg rounded-lg p-4 text-center">
      <div className="text-3xl mb-2">
        <Image src={{
          src: icon,
          width: 24,
          height: 24,
        }} width={24} height={24} alt="icon" className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-1 text-gray-900">{day}</h3>
      <p className="text-xl text-gray-100 dark:text-gray-700">{temp}°C</p>
    </div>
  )
}

