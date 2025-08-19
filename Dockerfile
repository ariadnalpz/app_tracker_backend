# Usa una imagen base oficial de Node.js
FROM node:22.11.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa Cloud Run (por defecto 8080)
EXPOSE 8080

# Configura la variable de entorno PORT
ENV PORT=8080

# Comando para iniciar la aplicación
CMD ["node", "server.js"]