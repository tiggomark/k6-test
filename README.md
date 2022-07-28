
-- Instalação da lib para transformar collection postman
npm install -g @apideck/postman-to-k6

-- Executar comando abaixo
postman-to-k6 postman-collection/sandbox-transaction.json -e env/sandbox-env.json -o scripts/sandbox-transaction.js

-- Subir o container:

docker-compose up -d \
influxdb \
grafana

-- Executar o comando

docker-compose run -v \
/$PWD:/src \
k6 run --vus 10 --duration 30s /src/scripts/prod-transaction.js

-- Acessar o grafana
http://localhost:3000


-- Adicionar datasource no grafana
configurações --> Datasource --> influxDB
http://localhost:8086
Access: Browser
Database: k6

-- Dashboards
https://grafana.com/grafana/dashboards/

Ex: https://grafana.com/grafana/dashboards/2587

docker-compose run -v \
/$PWD:/src \
k6 run --vus 200 --duration 160s /src/scripts/sandbox-transaction.js