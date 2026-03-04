# 📝 Sistema Bancário (JavaScript Orientado a Objetos)

> ⚠️ **Código Legado:** Este projeto foi desenvolvido em **2024** como trabalho final do módulo de **JavaScript Intermediário** do meu curso Full Stack. Ele é mantido aqui na sua forma original, servindo como um registro histórico do início da minha jornada na programação e dos meus primeiros passos na lógica de desenvolvimento.

## 🎯 O Desafio Proposto
O objetivo prático deste projeto era construir um simulador de sistema bancário operado inteiramente via console do navegador. O sistema deveria permitir a criação de contas, autenticação de usuários (login), consultas de saldo, registro de histórico de transações e a realização de operações de crédito e débito, garantindo a integridade do saldo.

## 📺 Demonstração em Vídeo
Para documentar a entrega e o funcionamento do sistema na época, gravei uma breve explicação mostrando o projeto rodando e a lógica por trás do código.
👉 **[Clique aqui para assistir ao vídeo de demonstração no YouTube](https://youtu.be/5cgWRw3jgfI)**

## 🛠️ Tecnologias Utilizadas
* JavaScript (ES6+)
* HTML5

## 💡 Principais Aprendizados
* **Herança e POO:** Estruturei as entidades do sistema utilizando classes, criando uma classe base Pessoa e estendendo-a (extends) para gerar a classe Conta. Também modelei as transações como objetos independentes (Transacao) que compõem o histórico da conta.
* **Modularização (ES6 Modules):** Durante o desenvolvimento, evoluí a arquitetura do projeto. Saí de um arquivo único (main.js) e fragmentei a aplicação usando export e import, separando as regras de negócio nos arquivos Classes.mjs e Servicees.mjs.
* **Regras de Negócio e Validações:** Implementei verificações lógicas para garantir a segurança das operações, como bloquear o cadastro de senhas com menos de 8 caracteres e impedir transações de débito quando o valor for maior que o saldo disponível (this.saldo < transacao.valor).
* **Estruturas de Repetição e Interação:** Criei menus interativos baseados em laços de repetição (do/while) e condicionais (switch/case), capturando a entrada do usuário através de prompt() e renderizando os extratos através do console.log().

## 🚀 Como Executar (Ambiente Local)
1. Clone o repositório completo.
2. Abra o arquivo index.html em qualquer navegador web.
3. Clique com o botão direito na página, selecione "Inspecionar" e abra a aba "Console".
4. Interaja com o sistema através das caixas de diálogo (prompts) que aparecerão na tela, e acompanhe os resultados e extratos impressos diretamente no seu Console.
