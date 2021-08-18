FROM node:16-alpine
WORKDIR /baseball_client
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build