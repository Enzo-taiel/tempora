import { ReactNode } from "react";
import Link from "next/link";
import { Sun, Cloud, CloudRain, Wind } from "lucide-react";
import { FooterCopirigth } from "@/components/footerCopiright";

interface PropsFeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: PropsFeatureCard) {
  return (
    <div className="bg-[var(--paper)] backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center cursor-default">
      <div className="mb-4 text-yellow-300">{icon}</div>
      <h2 className="text-xl mb-2 font-bold">{title}</h2>
      <p className="text-gray-400 dark:text-gray-100">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-[var(--background)]">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Bienvenido a Tempora</h1>
        <p className="text-xl text-gray-400 dark:text-gray-100">Tu compañero meteorológico personal</p>
      </header>

      <main className="text-center max-w-2xl">
        <div className="bg-[var(--paper)] backdrop-blur-lg rounded-xl p-8 shadow-lg mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <Sun size={40} className="text-yellow-300" />
            <Cloud size={40} className="text-gray-200" />
            <CloudRain size={40} className="text-blue-300" />
            <Wind size={40} className="text-teal-300" />
          </div>
          <p className="text-xl text-gray-400 dark:text-gray-100 mb-6">
            Obtén pronósticos precisos, alertas en tiempo real y toda la información
            meteorológica que necesitas, todo en un solo lugar.
          </p>
          <Link
            href="/weather"
            className="bg-[var(--bg-btn)] text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
          >
            Comenzar
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Sun size={32} />}
            title="Pronósticos Precisos"
            description="Predicciones detalladas para los próximos días"
          />
          <FeatureCard
            icon={<CloudRain size={32} />}
            title="Alertas en Tiempo Real"
            description="Notificaciones instantáneas sobre cambios climáticos"
          />
          <FeatureCard
            icon={<Wind size={32} />}
            title="Datos Detallados"
            description="Información completa sobre viento, humedad y más"
          />
        </section>
      </main>

      <FooterCopirigth />
    </div>
  );
}
