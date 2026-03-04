# 📝 Sistema de Locadora de Veículos (Java MVC)

> ⚠️ **Código Legado:** Este projeto foi desenvolvido em **2021** como trabalho final do módulo de **Java** do meu curso Full Stack. Ele é mantido aqui na sua forma original, servindo como um registro histórico do início da minha jornada na programação e dos meus primeiros passos na lógica de desenvolvimento.

## 🎯 O Desafio Proposto
O objetivo prático deste projeto era construir uma aplicação Desktop completa e conectada a um banco de dados relacional. O sistema simula a operação de uma locadora de veículos, permitindo cadastrar clientes, gerenciar a frota de carros, realizar a autenticação de usuários e processar os registros de aluguéis, tudo operado através de uma interface gráfica nativa.

## 🛠️ Tecnologias Utilizadas
* Java (SE)
* Java Swing e WindowBuilder (Interface Gráfica)
* MySQL
* JDBC (Java Database Connectivity)
* Arquitetura MVC (Model-View-Controller)

## 💡 Principais Aprendizados
* **Arquitetura MVC na Prática:** Estruturei o projeto separando claramente as responsabilidades: Modelos (POJOs como Cliente e Carro), Visualização (Telas geradas no Eclipse WindowBuilder) e Controladores (classes responsáveis pelas regras de negócio e comunicação externa).
* **Integração Java e Banco de Dados:** Implementei a classe ConnMySQL para gerenciar a conexão e utilizei PreparedStatement e ResultSet nos Controllers para executar operações de CRUD de forma segura diretamente no MySQL.
* **Algoritmos de Ordenação:** Desenvolvi manualmente lógicas de ordenação de arrays em memória, como a implementação de um Bubble Sort no controlador de carros para listar os veículos em ordem alfabética por modelo antes de enviá-los para a View.
* **Tratamento de Exceções e Validação:** Apliquei blocos try-catch robustos em todo o sistema, desde a captura de falhas de conexão SQL (SQLException) até a criação de serviços auxiliares para blindar o sistema contra erros de digitação (leitura de inteiros vs strings).

## 🚀 Como Executar (Ambiente Local)
1. Clone o repositório completo.
2. Certifique-se de ter o MySQL instalado e rodando na porta 3306.
3. Crie um banco de dados local chamado locadoracarros (você pode precisar recriar as tabelas cliente, carro e aluguel baseadas nos Models do projeto).
4. Adicione o driver JDBC do MySQL (mysql-connector-java.jar) ao Build Path do seu projeto na sua IDE (Eclipse/IntelliJ/NetBeans).
5. Execute o arquivo Main.java localizado no pacote MAIN para iniciar a aplicação e abrir a tela de Login.
