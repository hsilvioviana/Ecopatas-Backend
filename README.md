# Ecopatas-Backend
Parte Backend do website da ONG Ecopatas

---
## Funcionalidades
- Login
- Criar ponto de coleta
- Pegar pontos de coletas
- Pegar pontos de coletas organizados
- Criar FAQ
- Pegar FAQs
- Fale Conosco
---

## - Login
### POST "/users/login"

* Body

        email = VARCHAR(64)
        password = VARCHAR(64)

        {
            "login": "maria@email.com",
            "password": "123456"
        }

* Resposta

        {
        "user": {
            "name": "Ana Maria",
            "email": "maria@email.com",
        },
        "token": "eyJhbG..."
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Criar ponto de coleta
### POST "/places/create/pickup"

* Headers

        Authorization = token

* Body

        name = VARCHAR(64)
        cep = VARCHAR(64)
        region = VARCHAR(64)
        neighborhood = VARCHAR(64)
        street = VARCHAR(64)
        number = VARCHAR(64)
        schedule = VARCHAR(255)

        {
                "name": "Instituto Edison",
                "cep": "01020-000",
                "region": "Centro de São Paulo",
                "neighborhood": "Sé",
                "street": "Rua Tabatinguera",
                "number": "122",
                "schedule": "Seg. a sex. 8 às 22h"
        }

* Resposta

        {
            "message": "Ponto de coleta adicionado com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Pegar pontos de coletas
### GET "/places/simple/pickup"

* Resposta

        {
          "pickupPoints": [
            {
              "id": "69458c86-dc90-476a-84f7-3f0ddd499bd7",
              "name": "Instituto Edison",
              "cep": "01020-000",
              "region": "Centro de São Paulo",
              "neighborhood": "Sé",
              "street": "Rua Tabatinguera",
              "number": "122",
              "schedule": "Seg. a sex. 8 às 22h"
            },
            {
              "id": "d252efa6-aad3-4f7e-9f7e-4fe5b635377b",
              "name": "Pet City Animal Center",
              "cep": "01536-000",
              "region": "Centro de São Paulo",
              "neighborhood": "Cambuci",
              "street": "Av. Lacerda Franco",
              "number": "92",
              "schedule": "Seg. a sáb. 8 às 18h"
            }
          ]
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Pegar pontos de coletas organizados
### GET "/places/places/organized/pickup"

* Resposta

        {
          "pickupPoints": {
            "Leste de São Paulo": {
              "Penha": [
                {
                  "id": "52311335-d149-4781-944c-21866cc5f951",
                  "name": "Nino's Pet Shop",
                  "cep": "03644-000",
                  "region": "Leste de São Paulo",
                  "neighborhood": "Penha",
                  "street": "Rua Embirussu",
                  "number": "66A",
                  "schedule": "Seg 8 às 17h / Ter. e qua. 18 às 21h"
                }
              ]
            },
            "Centro de São Paulo": {
              "Sé": [
                {
                  "id": "69458c86-dc90-476a-84f7-3f0ddd499bd7",
                  "name": "Instituto Edison",
                  "cep": "01020-000",
                  "region": "Centro de São Paulo",
                  "neighborhood": "Sé",
                  "street": "Rua Tabatinguera",
                  "number": "122",
                  "schedule": "Seg. a sex. 8 às 22h"
                }
              ],
              "Aclimação": [
                {
                  "id": "778cbe4e-a2f1-445d-9355-ead4a0a31526",
                  "name": "Costelão do Boni",
                  "cep": "04109-040",
                  "region": "Centro de São Paulo",
                  "neighborhood": "Aclimação",
                  "street": "Rua Brás Cubas",
                  "number": "344",
                  "schedule": "Ter. a dom. 11 às 22h"
                }
              ],
              "Cambuci": [
                {
                  "id": "d252efa6-aad3-4f7e-9f7e-4fe5b635377b",
                  "name": "Pet City Animal Center",
                  "cep": "01536-000",
                  "region": "Centro de São Paulo",
                  "neighborhood": "Cambuci",
                  "street": "Av. Lacerda Franco",
                  "number": "92",
                  "schedule": "Seg. a sáb. 8 às 18h"
                }
              ],
              "Brás": [
                {
                  "id": "d2d6c46d-332c-49d9-abef-14a674b68336",
                  "name": "Padaria Nova Jaguaribe",
                  "cep": "04884-370",
                  "region": "Centro de São Paulo",
                  "neighborhood": "Brás",
                  "street": "Rua Piratininga",
                  "number": "456",
                  "schedule": "Diariamente 7 às 20h"
                }
              ]
            }
          }
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Criar FAQ
### POST "/questions/create/faq"

* Headers

        Authorization = token

* Body

        question = VARCHAR(255)
        answer = TEXT

        {
            "question": "Onde fica a Ecopatas?",
            "answer": "A Ecopatas fica em São Paulo"
        }

* Resposta

        {
            "message": "FAQ criada com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Pegar FAQs
### GET "/questions/faqs"

* Resposta

        {
        "faqs": [
            {
            "id": "0a2dd28a-a785-4372-af2d-a1359c3c7e20",
            "question": "Onde fica a Ecopatas?",
            "answer": "A Ecopatas fica em São Paulo"
            }
          ]
        }

        OU

        { 
            "error": Mensagem de erro
        }

---

## - Fale Conosco
### POST "/questions/contact"

* Body

        name = VARCHAR(64)
        email = VARCHAR(64)
        message = VARCHAR(2000)
        
        {
            "name": "Silvio Viana",
            "email": "silvio@teste.com",
            "message": "Olá, eu tenho um gato que achei embaixo da ponte. Como eu posso conversar com vocês sobre uma possível castração dele?"
        }

* Resposta

        {
            "message": "Mensagem enviada com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }

---
