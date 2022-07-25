
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
    
    
