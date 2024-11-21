FROM node:20

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "dev"]
