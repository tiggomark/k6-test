// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    baseUrl: "https://api.partners.pagseguro.com/nuvemshop",
    pagsToken:
      "Bearer 02c1fe01-c6b5-429b-9b02-e55f2fcf79cfc8f55df54607b3779fd7e8afb895ed9b8e48-d4b6-4d10-9679-f7c414cbb687",
    urlPags: "https://api.pagseguro.com",
    accessTokenNuvem: "bearer c353b7e72eeaed8838dbe8eff12c3fdba52c3179",
    baseUrlNuvem: "https://api.nuvemshop.com.br",
    portalBaseUrl: "http://localhost:3001",
    apiUrl: "http://localhost:3001"
  }
});

export default function() {
  group("payment", function() {
    postman[Request]({
      name: "payment/boleto",
      id: "d0c1d53b-c7e9-4f17-b508-c5a1b99c9395",
      method: "POST",
      address: "{{baseUrl}}/payment/boleto",
      data:
        '{\n    "store_id":"2247350",\n    "order_id":"609747337",\n    "currency": "BRL",\n    "email": "thomazrd@gmail.com",\n    "name": "Thomaz Reis Damasceno",\n    "cpf": "10821017616",\n    "phone": "",\n    "address": "Asdasdasd",\n    "city": "Belo Vale",\n    "state": "Minas Gerais",\n    "zipcode": "35473000",\n    "number": "89",\n    "locality": "Sdfsd",\n    "floor": "",\n    "country": "BR",\n    "shipping_price": 0,\n    "shipping_method": "Nos comunicaremos para coordenar a entrega do produto.",\n    "total_discount": 0,\n    "sub_total": 1,\n    "total": 1,\n    "lineItems": [\n        {\n            "id": 863129752,\n            "name": "Pao de Queijo",\n            "price": "1.00",\n            "quantity": 1,\n            "free_shipping": false,\n            "product_id": 117685524,\n            "variant_id": 453752327,\n            "thumbnail": "//d2r9epyceweg5n.cloudfront.net/stores/002/126/997/products/pao-de-queijo1-6cd404241601e4665116504831908852-100-0.jpg",\n            "variant_values": "",\n            "sku": null,\n            "properties": [],\n            "url": "https://thomazguitar.lojavirtualnuvem.com.br/produtos/pao-de-queijo/?variant=453752327",\n            "is_ahora_12_eligible": true\n        }\n    ]\n}\n\n\n'
    });

    postman[Request]({
      name: "payment/pix",
      id: "0392e29d-303e-4536-b5c0-c5abf5d2b0c6",
      method: "POST",
      address: "{{baseUrl}}/payment/pix",
      data:
        '{\n    "store_id":"2247350",\n    "order_id":"609747337",\n    "currency": "BRL",\n    "email": "thomazrd@gmail.com",\n    "name": "Thomaz Reis Damasceno",\n    "cpf": "10821017616",\n    "phone": "",\n    "address": "Asdasdasd",\n    "city": "Belo Vale",\n    "state": "Minas Gerais",\n    "zipcode": "35473000",\n    "number": "89",\n    "locality": "Sdfsd",\n    "floor": "",\n    "country": "BR",\n    "shipping_price": 0,\n    "shipping_method": "Nos comunicaremos para coordenar a entrega do produto.",\n    "total_discount": 0,\n    "sub_total": 5,\n    "total": 5,\n    "lineItems": [\n        {\n            "id": 850222488,\n            "name": "Pao de Queijo",\n            "price": "1.00",\n            "quantity": 5,\n            "free_shipping": false,\n            "product_id": 117685524,\n            "variant_id": 453752327,\n            "thumbnail": "//d2r9epyceweg5n.cloudfront.net/stores/002/126/997/products/pao-de-queijo1-6cd404241601e4665116504831908852-100-0.jpg",\n            "variant_values": "",\n            "sku": null,\n            "properties": [],\n            "url": "https://thomazguitar.lojavirtualnuvem.com.br/produtos/pao-de-queijo/?variant=453752327",\n            "is_ahora_12_eligible": true\n        }\n    ]\n}'
    });

    postman[Request]({
      name: "payment/card",
      id: "49a04fdd-40fb-4044-99be-d950f6db3853",
      method: "POST",
      address: "{{baseUrl}}/payment/card",
      data:
        '{\n    "store_id":"2247350",\n    "order_id":"609747337",\n    "currency": "BRL",\n    "total_discount": 0,\n    "email": "thomazrd@gmail.com",\n    "name": "Thomaz Reis Damasceno",\n    "cpf": "10821017616",\n    "phone": "",\n    "address": "Asdasdasd",\n    "city": "Belo Vale",\n    "state": "Minas Gerais",\n    "zipcode": "35473000",\n    "number": "89",\n    "locality": "Sdfsd",\n    "floor": "",\n    "country": "BR",\n    "shipping_price": 0,\n    "shipping_method": "Nos comunicaremos para coordenar a entrega do produto.",\n    "total": 1,\n    "lineItems": [\n        {\n            "id": 868907987,\n            "name": "Pao de Queijo",\n            "price": "1.00",\n            "quantity": 1,\n            "free_shipping": false,\n            "product_id": 117685524,\n            "variant_id": 453752327,\n            "thumbnail": "//d2r9epyceweg5n.cloudfront.net/stores/002/126/997/products/pao-de-queijo1-6cd404241601e4665116504831908852-100-0.jpg",\n            "variant_values": "",\n            "sku": null,\n            "properties": [],\n            "url": "https://thomazguitar.lojavirtualnuvem.com.br/produtos/pao-de-queijo/?variant=453752327",\n            "is_ahora_12_eligible": true\n        }\n    ],\n    "cardNumber": "4539620659922097",\n    "cardCvc": "123",\n    "cardExpMonth": "12",\n    "cardExpYear": "26",\n    "cardBrand": "visa",\n    "cardHolderName": "Thomaz R",\n    "cardInstallments": "",\n    "sub_total": 1\n}\n\n'
    });

    postman[Request]({
      name: "payment/qrcode",
      id: "eaff8b67-7761-49eb-b4eb-fb588d6473b0",
      method: "POST",
      address: "{{baseUrl}}/payment/qrcode",
      data:
        '{\n    "store_id":"2247350",\n    "order_id":"609747337",\n    "currency": "BRL",\n    "email": "thomazrd@gmail.com",\n    "name": "Thomaz Reis Damasceno",\n    "cpf": "10821017616",\n    "phone": "",\n    "address": "Asdasdasd",\n    "city": "Belo Vale",\n    "state": "Minas Gerais",\n    "zipcode": "35473000",\n    "number": "89",\n    "locality": "Sdfsd",\n    "floor": "",\n    "country": "BR",\n    "shipping_price": 0,\n    "shipping_method": "Nos comunicaremos para coordenar a entrega do produto.",\n    "total_discount": 0,\n    "sub_total": 1,\n    "total": 1,\n    "lineItems": [\n        {\n            "id": 863953582,\n            "name": "Pao de Queijo",\n            "price": "1.00",\n            "quantity": 1,\n            "free_shipping": false,\n            "product_id": 117685524,\n            "variant_id": 453752327,\n            "thumbnail": "//d2r9epyceweg5n.cloudfront.net/stores/002/126/997/products/pao-de-queijo1-6cd404241601e4665116504831908852-100-0.jpg",\n            "variant_values": "",\n            "sku": null,\n            "properties": [],\n            "url": "https://thomazguitar.lojavirtualnuvem.com.br/produtos/pao-de-queijo/?variant=453752327",\n            "is_ahora_12_eligible": true\n        }\n    ]\n}'
    });
  });
}
