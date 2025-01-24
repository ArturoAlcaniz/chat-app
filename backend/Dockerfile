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

# Exponer el puerto 3001
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["yarn", "start:prod"]