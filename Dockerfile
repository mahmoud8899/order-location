FROM --platform=linux/amd64 node:alpine
COPY  package.json .
WORKDIR  /app
RUN npm install 
COPY . .
EXPOSE 8000
CMD ["npm", "start"]