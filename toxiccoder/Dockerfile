FROM fusuf/whatsasena:latest

RUN git clone https://github.com/riz4d/Whats-Bot /root/Whats-Bot
WORKDIR /root/Whats-Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
