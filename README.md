# Ecopatas-Backend
Parte Backend do website da ONG Ecopatas

---
## Funcionalidades
- Login
- Criar ponto de coleta
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
            "name": "Padaria do João",
            "cep": "03634010",
            "neighborhood": "Penha",
            "street": "Rua Dr. João Ribeiro",
            "number": "456",
            "schedule": "Ter. a sáb. 10 às 18h"
        }

* Resposta

        {
            "message": "Ponto de coleta adicionado com sucesso"
        }

        OU

        { 
            "error": Mensagem de erro
        }
