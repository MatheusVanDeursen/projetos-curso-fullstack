# 📝 Sistema de Gestão de Biblioteca

> ⚠️ **Código Legado:** Este projeto foi desenvolvido em **2021** como trabalho final do módulo de **JavaScript Básico** do meu curso Full Stack. Ele é mantido aqui na sua forma original, servindo como um registro histórico do início da minha jornada na programação e dos meus primeiros passos na lógica de desenvolvimento.

## 🎯 O Desafio Proposto
O objetivo prático deste módulo era construir um sistema em JavaScript que utilizasse Programação Orientada a Objetos (POO), sendo manipulados por uma interface web. O sistema permite realizar o cadastro e a visualização de clientes, funcionários e livros, além de gerenciar o controle de estoque e cruzar esses dados para registrar vendas e calcular lucros dinamicamente.

## 🛠️ Tecnologias Utilizadas
* HTML5 e CSS3
* JavaScript Puro (ES6+)
* Bootstrap 4.0 (via CDN)

## 💡 Principais Aprendizados
* **Programação Orientada a Objetos (POO):** Utilizei herança para criar a classe Cliente e Funcionario a partir de uma classe base Pessoa, além de encapsular a lógica de exibição nos métodos imprime().
* **Manipulação de DOM:** Aprendi a controlar a visibilidade de múltiplas seções ("páginas") em um único arquivo HTML através de funções que alteram o display do CSS via JavaScript.
* **Gestão de Estado em Memória:** Implementei arrays globais (listaLivros, listaVendas, etc.) para armazenar e filtrar dados em tempo real, permitindo funções de busca por título ou nome.
* **Lógica de Fluxo de Caixa:** O módulo de vendas calcula automaticamente o lucro baseado no preço do livro e quantidade vendida, além de validar a disponibilidade no estoque antes de confirmar a transação.

## 🚀 Como Executar (Ambiente Local)
1. Clone o repositório completo.
2. Abra o arquivo `index.html` em qualquer navegador.
