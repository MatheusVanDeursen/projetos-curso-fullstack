# 📝 Landing Page Educacional: CompMastery (HTML, CSS & SASS)

> ⚠️ **Código Legado:** Este projeto foi desenvolvido em **2024** como trabalho final do módulo de **HTML & CSS Intermediário** do meu curso Full Stack. Ele é mantido aqui na sua forma original, servindo como um registro histórico do início da minha jornada na programação e dos meus primeiros passos na lógica de desenvolvimento.

## 🎯 O Desafio Proposto
O objetivo prático deste projeto era construir uma Landing Page completa, moderna e 100% responsiva para uma plataforma fictícia de cursos de tecnologia (CompMastery). O grande foco do módulo era otimizar a escrita de estilos utilizando um pré-processador CSS (SASS) e integrar os componentes com um framework de mercado (Bootstrap).

## 📺 Demonstração em Vídeo
Para documentar a entrega e o funcionamento do sistema na época, gravei uma breve explicação mostrando o projeto rodando e a lógica por trás do código.
👉 **[Clique aqui para assistir ao vídeo de demonstração no YouTube](https://youtu.be/zvppobrw8Dg)**

## 🛠️ Tecnologias Utilizadas
* HTML5
* CSS3 e SASS (Syntactically Awesome Style Sheets)
* Bootstrap 5.3 (via CDN)

## 💡 Principais Aprendizados
* **Pré-processadores (SASS):** Abandonei a repetição do CSS puro e estruturei o estilo de forma modular. Criei arquivos separados como _variables.sass para gerenciar a paleta de cores globalmente e apliquei o aninhamento (nesting) de seletores, tornando o código muito mais limpo e fácil de manter.
* **Responsividade Avançada:** Implementei regras de @media (max-width: 768px) diretamente no SASS e utilizei o sistema de Grid do Bootstrap para garantir que o layout se adaptasse perfeitamente. Desenvolvi uma lógica de exibição em que componentes específicos (como os Banners do Carrossel) são renderizados de formas totalmente diferentes no Mobile e no Desktop.
* **Componentização com Bootstrap:** Aprendi a utilizar e sobrescrever classes nativas do Bootstrap 5, implementando a navbar responsiva com menu dropdown (hamburguer menu no mobile) e montando o sistema de Carrossel interativo na primeira dobra do site.
* **Design e UI Visual:** Explorei recursos visuais modernos, como linear-gradient e radial-gradient para compor o fundo das seções de cursos, além de aplicar transições suaves e efeitos de hover dinâmicos nos botões e nos cards informativos.

## 🚀 Como Executar (Ambiente Local)
1. Clone o repositório completo.
2. Abra o arquivo index.html em qualquer navegador web moderno para visualizar o projeto.
3. Caso queira alterar os estilos, faça as edições nos arquivos dentro da pasta sass e utilize o compilador do SASS rodando o comando: sass --watch sass/styles.sass:css/styles.css no seu terminal.
