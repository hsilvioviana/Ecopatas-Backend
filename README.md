# Ecopatas-Backend
Parte Backend do website da ONG Ecopatas

---
## Funcionalidades
- Login
- Criar ponto de coleta
- Pegar pontos de coletas ativos e pausados
- Criar FAQ
- Pegar FAQs
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
        neighborhood = VARCHAR(64)
        street = VARCHAR(64)
        number = VARCHAR(64)
        schedule = VARCHAR(255)

        {
            "name": "Nino's Pet Shop",
            "cep": "03644000",
            "neighborhood": "Penha",
            "street": "Rua Embirussu",
            "number": "66A",
            "schedule": "Seg 8 às 17h / Ter. e qua. 18 às 21h"
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

## - Pegar pontos de coletas ativos e pausados
### GET "/places/pickup"

* Resposta

        {
        "pickupPoints": {
            "ativos": [
                {
                "id": "52311335...",
                "name": "Nino's Pet Shop",
                "cep": "03644000",
                "neighborhood": "Penha",
                "street": "Rua Embirussu",
                "number": "66A",
                "schedule": "Seg 8 às 17h / Ter. e qua. 18 às 21h"
                },
            ],
            "pausados": []
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