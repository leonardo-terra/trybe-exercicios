DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionarios(
	funcionario_id INT AUTO_INCREMENT primary key,
    nome VARCHAR(60) NOT NULL,
    sobrenome VARCHAR(60) NOT NULL,
    data_cadastro DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO funcionarios(nome, sobrenome)
VALUES 
	('Joseph', 'Rodrigues'),
	('André','Freeman'),
	('Cintia', 'Duval'),
	('Fernanda', 'Mendes');

CREATE TABLE contatos(
	contato_id INT AUTO_INCREMENT PRIMARY KEY,
    telefone CHAR(10) NOT NULL,
    email VARCHAR(30)    
);

INSERT INTO contatos(telefone, email)
VALUES
	(1234567892, 'lalala@gmail.com'),
    (1234122232, 'bbbb@gmail.com'),
    (1223322232, 'ccc@gmail.com');
    
CREATE TABLE setor(
	setor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30)
);

INSERT INTO setor(nome)
VALUES
	('Administraçao'),
    ('Vendas'),
    ('Operacional'),
    ('Estrategico'),
    ('Vendas'),
    ('Marketing');
    
ALTER TABLE funcionarios
ADD contato_id INT NOT NULL;
    
ALTER TABLE funcionarios
ADD FOREIGN KEY (contato_id) REFERENCES contatos(contato_id);