FROM node:20

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm

COPY . .

RUN pnpm install --frozen-lockfile 

EXPOSE 3001

CMD ["pnpm", "dev"]