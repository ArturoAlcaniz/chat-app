# Usar una imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json yarn.lock* ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN yarn build

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]