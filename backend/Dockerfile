# ---------- BASE IMAGE ----------
FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# ---------- INSTALL DEPENDENCIES ----------
# Копируем package.json и lock-файл для кеширования зависимостей
COPY package.json package-lock.json ./

# Устанавливаем только production-зависимости
RUN npm install --production

# ---------- COPY SOURCE ----------
# Копируем всё содержимое backend в контейнер
COPY . .

# Открываем порт
EXPOSE 3000

# ---------- RUN ----------
CMD ["node", "server.js"]
