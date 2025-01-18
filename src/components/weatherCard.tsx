import { Droplet, Wind } from "lucide-react";
import Image from "next/image";

interface WeatherCardProps {
  city: string;
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
  wind: number;
}

export default function WeatherCard({
  city,
  temp,
  condition,
  icon,
  humidity,
  wind,
}: WeatherCardProps) {
  return (
    <div className="bg-[var(--paper)] backdrop-blur-lg rounded-lg shadow-xl p-6 ">
      <div className="text-6xl mb-4 text-center">
        <Image
          src={{
            src: icon,
            width: 24,
            height: 24,
          }}
          alt="icon"
          className="w-24 h-24 mb-4"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-center ">{city}</h2>
      <div className="text-4xl font-bold mb-2 text-center  text-gray-700 dark:text-gray-300">{temp}°C</div>
      <p className="text-white mb-4 text-center">{condition}</p>
      <div className="flex justify-around text-gray-700">
        <div className="flex items-center">
          <Droplet size={20} className="mr-2 text-blue-500" />
          <span className="text-white">{humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind size={20} className="mr-2 text-blue-500" />
          <span className="text-white">{wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
