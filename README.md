# Ecopatas-Backend
Parte Backend do website da ONG Ecopatas

---
## Endpoints
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
