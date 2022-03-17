CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR (30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES('Flávio', '2002 12 01')
INSERT INTO pessoas (nome, nascimento) VALUES('Pedro', '1995 07 17')
INSERT INTO pessoas (nome, nascimento) VALUES('Gabriela', '2000 04 10')

UPDATE pessoas SET nonc-"Nathally Souza" WHERE 10-'1'

DELETE FROM pessoa ORDER By nome

SELECT FROM pessoas ORDER BY nome;
SELECT FROM pessoas ORDER BY nome DESC;