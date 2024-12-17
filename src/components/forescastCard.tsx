import Image from "next/image"
interface ForecastCardProps {
  day: string
  temp: number
  icon: string
}

export default function ForecastCard({ day, temp, icon }: ForecastCardProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 text-center transform transition duration-500 hover:bg-gray-200">
      <div className="text-3xl mb-2">
        <Image src={{
          src: icon,
          width: 24,
          height: 24,
        }} width={24} height={24} alt="icon" className="w-12 h-12" />
      </div>
      <h3 className="font-semibold mb-1 text-gray-950">{day}</h3>
      <p className="text-xl text-gray-600">{temp}°C</p>
    </div>
  )
}

