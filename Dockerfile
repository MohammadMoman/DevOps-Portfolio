FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY index.html status.html architecture.html ./
COPY Moman.png ./
COPY docs ./docs
COPY src ./src
COPY scripts ./scripts

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/status >/dev/null || exit 1

CMD ["npm", "start"]
