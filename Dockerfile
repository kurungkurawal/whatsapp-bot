FROM node:18-alpine
WORKDIR /app
COPY . .
RUN chmod +x start.sh
CMD ["sh", "start.sh"]
