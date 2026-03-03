==============================================================
==================== PROJETO LOJA VIRTUAL ====================
==============================================================

========================== CLIENTES ==========================
--CLIENTES

CREATE TABLE clientes(
id_cliente 		INTEGER PRIMARY KEY NOT NULL,
email 			VARCHAR(50) NOT NULL,
telefone 		VARCHAR(14) NOT NULL,
senha 			VARCHAR(30) NOT NULL,
nome 			VARCHAR(60) NOT NULL,
aniversario 	VARCHAR(10),
cpf 			DOUBLE PRECISION,
sexo 			VARCHAR(13),
data_criacao 	TIMESTAMP
);

CREATE SEQUENCE IF NOT EXISTS clientes_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE clientes ALTER COLUMN id_cliente SET DEFAULT NEXTVAL('clientes_increment_seq');

CREATE FUNCTION clientes_gatilho() RETURNS TRIGGER AS $clientes_gatilho$
BEGIN

IF LENGTH(NEW.senha) < 8 THEN
RAISE EXCEPTION 'A senha precisa de mais de 8 caracteres.';
END IF;
NEW.data_criacao := CURRENT_TIMESTAMP;
RETURN NEW;
END;

$clientes_gatilho$ LANGUAGE plpgsql;

CREATE TRIGGER clientes_gatilho BEFORE INSERT OR UPDATE on clientes 
FOR EACH ROW EXECUTE PROCEDURE clientes_gatilho();


--ENDERECOS

CREATE TABLE enderecos(
id_cliente 		INTEGER PRIMARY KEY NOT NULL,
cep 			INTEGER NOT NULL,
estado 			CHAR(2) NOT NULL,
cidade 			VARCHAR(30) NOT NULL,
rua 			VARCHAR(80) NOT NULL,
numero 			VARCHAR(20) NOT NULL,	
complemento 	VARCHAR(50),
CONSTRAINT fk_enderecos_id_cliente FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE FUNCTION enderecos_gatilho() RETURNS TRIGGER AS $enderecos_gatilho$
BEGIN

IF LEN(NEW.cep) != 8 THEN
RAISE EXCEPTION 'O cep só tem 8 algarismos';
END IF;

END;

$enderecos_gatilho$ LANGUAGE plpgsql;

CREATE TRIGGER enderecos_gatilho BEFORE INSERT OR UPDATE on enderecos 
FOR EACH ROW EXECUTE PROCEDURE enderecos_gatilho();

========================= PRODUTOS =========================
--MARCAS

CREATE TABLE marcas(
id_marca 	INTEGER PRIMARY KEY NOT NULL,
nome 		VARCHAR(30) NOT NULL,
descricao 	VARCHAR(100)
);

CREATE SEQUENCE IF NOT EXISTS marcas_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE marcas ALTER COLUMN id_marca SET DEFAULT NEXTVAL('marcas_increment_seq');


--CATEGORIAS

CREATE TABLE categorias(
id_categoria  	INTEGER PRIMARY KEY NOT NULL,
nome 			VARCHAR(30) NOT NULL
);

CREATE SEQUENCE IF NOT EXISTS categorias_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE categorias ALTER COLUMN id_categoria SET DEFAULT NEXTVAL('categorias_increment_seq');

INSERT INTO categorias(nome)VALUES('Salgadinhos');
INSERT INTO categorias(nome)VALUES('Frutas');


--DIMENSOES

CREATE TABLE dimensoes(
id_dimensao 	INTEGER PRIMARY KEY NOT NULL,
peso 			NUMERIC, --gramas
altura 			NUMERIC, --cm
largura 		NUMERIC, --cm
profundidade 	NUMERIC  --cm
);

CREATE SEQUENCE IF NOT EXISTS dimensoes_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE dimensoes ALTER COLUMN id_dimensao SET DEFAULT NEXTVAL('dimensoes_increment_seq');


--PRODUTOS

CREATE TABLE produtos(
cod_sku 		CHAR(10)	PRIMARY KEY NOT NULL,
nome 			VARCHAR(50) NOT NULL,
ativado 		BOOLEAN 	NOT NULL,
descricao 		VARCHAR(250),
preco 			NUMERIC 	NOT NULL,
estoque 		INTEGER,
id_dimensao 	INTEGER,
id_categoria 	INTEGER,
id_marca 		INTEGER,
data_criacao 	TIMESTAMP,
usu_criacao 	TEXT,
data_alter  	TIMESTAMP,
usu_alter 		TEXT,
CONSTRAINT fk_produtos_id_dimensao FOREIGN KEY (id_dimensao) REFERENCES dimensoes(id_dimensao),
CONSTRAINT fk_produtos_id_categoria FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
CONSTRAINT fk_produtos_id_marca FOREIGN KEY (id_marca) REFERENCES marcas(id_marca)
); 

CREATE FUNCTION produtos_gatilho() RETURNS TRIGGER AS $produtos_gatilho$
BEGIN

IF NEW.ativado = TRUE AND NEW.estoque <= 0 THEN
RAISE EXCEPTION 'O produto não pode ser ativado sem estoque.';
END IF;
IF NEW.preco < 0 THEN
RAISE EXCEPTION 'O preço do produto não pode ser negativo.';
END IF;
IF (TG_OP = 'UPDATE') THEN
NEW.data_alter := CURRENT_TIMESTAMP;
NEW.usu_alter := CURRENT_USER;
ELSIF (TG_OP = 'INSERT') THEN
NEW.data_criacao := CURRENT_TIMESTAMP;
NEW.usu_criacao := CURRENT_USER;
END IF;
RETURN NEW;
END;

$produtos_gatilho$ LANGUAGE plpgsql;

CREATE TRIGGER produtos_gatilho BEFORE INSERT OR UPDATE on produtos 
FOR EACH ROW EXECUTE PROCEDURE produtos_gatilho();


========================== PEDIDOS =========================
--PAGAMENTO

CREATE TABLE tipo_pagto(
id_tipo_pagto 	INTEGER PRIMARY KEY NOT NULL,
nome 			VARCHAR(20) NOT NULL
);

CREATE SEQUENCE IF NOT EXISTS tipo_pagto_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE tipo_pagto ALTER COLUMN id_tipo_pagto SET DEFAULT NEXTVAL('tipo_pagto_increment_seq');


--PEDIDOS

CREATE TABLE pedidos(
cod_pedido 		INTEGER PRIMARY KEY NOT NULL,
id_cliente 		INTEGER NOT NULL,
id_tipo_pagto 	INTEGER,
id_endereco 	INTEGER,
data_criacao 	TIMESTAMP,
data_pedido 	TIMESTAMP,
fechado 		BOOLEAN NOT NULL,
CONSTRAINT fk_pedidos_id_cliente FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
CONSTRAINT fk_pedidos_id_tipo_pagto FOREIGN KEY (id_tipo_pagto) REFERENCES tipo_pagto(id_tipo_pagto)
);

CREATE SEQUENCE IF NOT EXISTS pedidos_increment_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 2147483647
 CACHE 1;
ALTER TABLE pedidos ALTER COLUMN cod_pedido SET DEFAULT NEXTVAL('pedidos_increment_seq');

CREATE FUNCTION pedidos_gatilho() RETURNS TRIGGER AS $pedidos_gatilho$
BEGIN

IF (TG_OP = 'UPDATE') AND fechado = TRUE THEN
NEW.data_pedido:= CURRENT_TIMESTAMP;
ELSIF (TG_OP = 'INSERT') THEN
NEW.data_criacao := CURRENT_TIMESTAMP;
END IF;
RETURN NEW;

$pedidos_gatilho$ LANGUAGE plpgsql;

CREATE TRIGGER pedidos_gatilho BEFORE INSERT OR UPDATE on pedidos 
FOR EACH ROW EXECUTE PROCEDURE pedidos_gatilho();


--ITENS PEDIDOS

CREATE TABLE itens_pedidos(
cod_sku 	CHAR(10) NOT NULL,
cod_pedido 	INTEGER NOT NULL,
quantidade 	INTEGER NOT NULL,
CONSTRAINT 	pk_itens_pedidos PRIMARY KEY(cod_sku,cod_pedido),
CONSTRAINT 	fk_itens_pedidos_cod_pedido FOREIGN KEY (cod_pedido) REFERENCES pedidos(cod_pedido),
CONSTRAINT 	fk_itens_pedidos_cod_sku FOREIGN KEY (cod_sku) REFERENCES produtos(cod_sku)
);

CREATE FUNCTION itens_pedidos_gatilho() RETURNS TRIGGER AS $itens_pedidos_gatilho$
BEGIN

IF NEW.quantidade <= 0 THEN
RAISE EXCEPTION 'A quantidade do produto não pode ser negativa ou zero.';
END IF;

$itens_pedidos_gatilho$ LANGUAGE plpgsql;

CREATE TRIGGER itens_pedidos_gatilho BEFORE INSERT OR UPDATE on itens_pedidos 
FOR EACH ROW EXECUTE PROCEDURE itens_pedidos_gatilho();


======================== RELATÓRIOS ========================
--(Produtos com suas dimensoes, marca e categoria)
SELECT p.cod_sku, p.nome, p.ativado, p.descricao, p.preco, p.estoque, m.nome AS marca, c.nome AS categoria, d.peso, d.altura, d.largura, d.profundidade 
FROM produtos p
LEFT JOIN marcas m ON p.id_marca = m.id_marca
LEFT JOIN categorias c ON p.id_categoria = c.id_categoria
LEFT JOIN dimensoes d ON p.id_dimensao = d.id_dimensao;

--(Mostra quantos produtos há em cada marca)
SELECT m.nome, COUNT(pr.cod_sku)
FROM marcas m
LEFT JOIN produtos pr ON m.id_marca = pr.id_marca
GROUP BY m.id_marca;

--(Mostra quantas produtos há em cada categoria)
SELECT c.nome, COUNT(pr.cod_sku)
FROM categorias c
LEFT JOIN produtos pr ON c.id_categoria = pr.id_categoria
GROUP BY c.id_categoria;

--(Seleciona pedidos mostrando nome do cliente e tipo de pagamento)
SELECT p.cod_pedido, c.nome, tp.nome, p.id_endereco, p.data_criacao, p.data_pedido, p.fechado
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
LEFT JOIN tipo_pagto tp ON p.id_tipo_pagto = tp.id_tipo_pagto;

--(Mostra quantas compras foram feitas com cada meio de pagamento)
SELECT tp.nome, COUNT(p.cod_pedido)
FROM pedidos p
LEFT JOIN tipo_pagto tp ON p.id_tipo_pagto = tp.id_tipo_pagto
GROUP BY tp.id_tipo_pagto;

--(Seleciona todos o itens pedidos apresentando o nome do cliente e número do pedido)
SELECT p.cod_pedido,p.data_pedido ,c.nome, pr.nome AS nome_produto,pr.preco, (pr.preco * ip.quantidade) AS total_do_produto
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
LEFT JOIN itens_pedidos ip ON p.cod_pedido = ip.cod_pedido
INNER JOIN produtos pr ON ip.cod_sku = pr.cod_sku;


========================== FILTROS =========================
SELECT * FROM clientes WHERE aniversario >= '1985-01-01' AND aniversario < '2000-01-01';

SELECT * FROM clientes WHERE sexo = 'Feminino';

SELECT c.* FROM clientes c INNER JOIN enderecos e ON e.id_cliente = c.id_cliente WHERE e.estado = 'RJ';

SELECT pr* FROM produtos pr INNER JOIN categorias c ON pr.id_categoria = c.id_categoria WHERE c.nome = 'ZARA';

SELECT * FROM pedidos WHERE fechado = TRUE;

SELECT * FROM itens_pedidos WHERE quantidade >= 10;


========================= RELAÇÕES =========================
--Endereço (um para um clientes) 
--Cliente (um para muitos pedidos)
--Marcas (um para muitos com produto)
--Categorias (um para muitos com produto)
--Dimensoes (um para muitos com produto)
--Produtos (um para muitos itens pedidos)
--Tipo pag (um para muitos pedidos)
--Pedidos (um para muitos itens pedidos)
--Itens pedidos (muitos para muitos produtos e pedidos)
