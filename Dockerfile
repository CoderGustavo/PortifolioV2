FROM node:19-alpine AS runner

RUN mkdir -p /app/CoderGustavo
WORKDIR /app/CoderGustavo

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]