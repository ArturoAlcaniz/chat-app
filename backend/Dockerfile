# Usa una versión más reciente de Node.js (por ejemplo, Node.js 18 o 20)
FROM node:18

# Instala dependencias de compilación (necesarias para módulos nativos como bcrypt)
RUN apt-get update && apt-get install -y build-essential python3

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "run", "start:prod"]