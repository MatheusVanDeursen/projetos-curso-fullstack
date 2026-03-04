# 📝 Sistema de E-commerce / Loja Virtual (PostgreSQL)

> ⚠️ **Código Legado:** Este projeto foi desenvolvido em **2022** como trabalho final do módulo de **PostgreSQL** do meu curso Full Stack. Ele é mantido aqui na sua forma original, servindo como um registro histórico do início da minha jornada na programação e dos meus primeiros passos na lógica de desenvolvimento.

## 🎯 O Desafio Proposto
O objetivo prático deste módulo era modelar e construir a infraestrutura de dados completa para uma loja virtual (e-commerce). O sistema gerencia o cadastro de clientes e endereços, o catálogo detalhado de produtos (com marcas, categorias e dimensões físicas), além de todo o fluxo operacional de carrinho de compras, faturamento de pedidos e meios de pagamento.

## 📺 Demonstração em Vídeo
Para documentar a entrega e o funcionamento do sistema na época, gravei uma breve explicação mostrando o projeto rodando e a lógica por trás do código.
👉 **[Clique aqui para assistir ao vídeo de demonstração no YouTube](https://youtu.be/iTUATYp-EvY)**

## 🛠️ Tecnologias Utilizadas
* SQL
* PostgreSQL
* PL/pgSQL (Procedural Language)

## 💡 Principais Aprendizados
* **Automação com Triggers e Functions:** Programei regras de negócio de segurança e consistência diretamente no banco de dados utilizando plpgsql. Criei gatilhos (TRIGGERS) que disparam funções para impedir o cadastro de senhas curtas, bloquear a ativação de produtos sem estoque e barrar a inserção de preços negativos.
* **Modelagem de Entidade-Relacionamento N:N:** Estruturei a relação de muitos-para-muitos entre "Pedidos" e "Produtos" criando a tabela associativa itens_pedidos, garantindo o rastreio da quantidade exata de cada SKU vendido.
* **Gerenciamento Avançado de IDs:** Implementei o controle manual de auto-incremento de chaves primárias utilizando o comando CREATE SEQUENCE em diversas tabelas.
* **Relatórios Analíticos:** Construí consultas complexas utilizando LEFT JOIN e INNER JOIN para gerar relatórios operacionais, como a contagem de produtos por categoria (COUNT), cruzamento de dados de frete (dimensões) e o cálculo financeiro total multiplicando o preço do produto pela quantidade vendida no pedido.

## 🚀 Como Executar (Ambiente Local)
*(Instruções básicas para rodar o projeto)*
1. Clone o repositório completo.
2. Abra o seu gerenciador de banco de dados compatível com PostgreSQL (ex: pgAdmin, DBeaver).
3. Crie um novo database em branco.
4. Execute o script Projeto final de BD.sql completo. Ele irá gerar as Sequences, Tabelas, Funções e Triggers.
5. Ao final do arquivo, existem blocos de códigos isolados com exemplos de SELECTs que você pode rodar individualmente para testar os filtros e relatórios.
