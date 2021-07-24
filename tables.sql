CREATE TABLE Users (
id VARCHAR(64) PRIMARY KEY,
name VARCHAR(64) UNIQUE NOT NULL,
email VARCHAR(64) UNIQUE NOT NULL,
password VARCHAR(64) NOT NULL,
role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL",
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

CREATE TABLE CEPs (
id VARCHAR(64) PRIMARY KEY,
cep VARCHAR(64) UNIQUE NOT NULL,
latitude VARCHAR(64) NOT NULL,
longitude VARCHAR(64) NOT NULL,
);

CREATE TABLE PickupPoints (
id VARCHAR(64) PRIMARY KEY,
name VARCHAR(64) NOT NULL,
cep VARCHAR(64) NOT NULL,
neighborhood VARCHAR(64) NOT NULL,
street VARCHAR(64) NOT NULL,
number VARCHAR(64) NOT NULL,
schedule VARCHAR(255) NOT NULL,
status ENUM("ATIVO", "PAUSADO", "DELETADO"),
latitude VARCHAR(64) NOT NULL,
longitude VARCHAR(64) NOT NULL,
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

CREATE TABLE FAQs (
id VARCHAR(64) PRIMARY KEY,
question VARCHAR(255) NOT NULL,
answer TEXT NOT NULL,
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);
