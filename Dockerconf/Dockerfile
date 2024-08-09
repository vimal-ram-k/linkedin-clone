# 1. Specify the base image
FROM node:18-alpine AS build

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY ../ ./
# 6. Build the Vite app
RUN npm run build

# 7. Use Nginx to serve the build
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# 8. Expose the port on which the app will run
EXPOSE 80

# 9. Start Nginx server
CMD ["nginx", "-g", "daemon off;"]