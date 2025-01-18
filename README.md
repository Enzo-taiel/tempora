# Tempora

Tempora es una aplicación web desarrollada con React que permite a los usuarios consultar el pronóstico meteorológico de su ubicación actual o de cualquier ciudad que deseen buscar.

## Características

- **Pronóstico en tu ubicación**: Utiliza la geolocalización para mostrar automáticamente el pronóstico meteorológico en tu ubicación actual.
- **Búsqueda por ciudad**: Permite buscar y visualizar el pronóstico del tiempo de cualquier ciudad ingresando su nombre.
- **Interfaz amigable**: Diseño intuitivo y limpio para una experiencia de usuario agradable.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **JavaScript (ES6+)**: Lenguaje de programación utilizado.
- **CSS/Tailwind**: Para el diseño y la estilización.
- **API de Clima**: Conexión con una API de pronóstico meteorológico para obtener datos actualizados.
- **Geolocalización**: Uso de la API de geolocalización del navegador para detectar la ubicación del usuario.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes en tu máquina:

- Node.js (v20.0.0 o superior)
- npm o yarn (gestor de paquetes)

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Enzo-taiel/tempora.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd tempora
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API para el servicio meteorológico:

   ```env
   NEXT_PUBLIC_OPEN_WEATHER_API_KEY=tu_clave_api
   ```

5. Inicia la aplicación:

   ```bash
   npm start
   # o
   yarn start
   ```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en acción.

## Uso

1. **Visualiza el pronóstico en tu ubicación actual**: Al abrir la aplicación, acepta el permiso de geolocalización en tu navegador para ver el tiempo en tu ubicación actual.
2. **Busca el tiempo en otras ciudades**: Ingresa el nombre de una ciudad en el campo de búsqueda y presiona Enter para ver el pronóstico del tiempo.

## Estructura del proyecto

```
Tempora/
├── public/
├── src/
│   ├── app/          # Punto de entrada de la aplicacion
│   ├── components/   # Componentes reutlizables
│   ├── controllers/  # Logica de negocio
│   ├── models/       # Gestion de datos y estados
│   ├── service/      # Llamadas a la API
│   ├── utils/        # Funciones utilitarias
│   └── types/        # Definiciones de tipo (TypeScript)
├── .env              # Variables de entorno
├── package.json      # Configuración del proyecto
└── README.md         # Documentación
```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b nombre-rama
   ```
3. Realiza tus cambios y realiza un commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Sube tus cambios al repositorio remoto:
   ```bash
   git push origin nombre-rama
   ```
5. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

---

¡Gracias por usar Tempora! 🌤️

