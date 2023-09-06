<br><a href="https://fercastor.github.io/pokedex/" target="_blank">Acessar Pokédex

# Documentação do Projeto Pokédex

## Visão Geral

Este projeto consiste em uma aplicação web chamada "Pokédex" que permite aos usuários pesquisar e visualizar informações sobre Pokémon. A Pokédex exibe cartões de Pokémon com detalhes, incluindo o nome, número de identificação, tipo(s) e uma imagem.

## Tecnologias Utilizadas

- HTML5: Linguagem de marcação para estruturar a página web.
- CSS3: Linguagem de estilo para estilizar a página e criar uma interface atraente.
- JavaScript: Linguagem de programação usada para interatividade e manipulação de dados na página.
- PokeAPI: API de Pokémon utilizada para obter dados sobre Pokémon, como nome, imagem e tipo.
- Visual Studio Code: Ambiente de desenvolvimento utilizado para escrever código.
- Git: Sistema de controle de versão para rastrear e gerenciar as mudanças no código-fonte.
- GitHub: Plataforma de hospedagem de código-fonte para armazenar o projeto.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- index.html: O arquivo HTML principal que define a estrutura da página.
- css/style.css: O arquivo CSS que estiliza a página e os elementos.
- img/: Diretório que contém imagens, incluindo o logotipo e o ícone da aplicação.
- js/app.js: O arquivo JavaScript que controla a interatividade da página e faz solicitações à API de Pokémon.
- README.md: Este arquivo de documentação, fornecendo informações sobre o projeto.

## Funcionalidades Principais

### Pesquisa de Pokémon

- Os usuários podem inserir o nome ou número de identificação de um Pokémon na caixa de pesquisa.
- Eles podem clicar no botão "Buscar" ou pressionar "Enter" para pesquisar o Pokémon.
- Os detalhes do Pokémon pesquisado, incluindo nome, número de identificação, imagem e tipo(s), são exibidos na página.

### Listagem de Pokémon

- Os usuários podem especificar a quantidade de Pokémon que desejam listar usando a caixa "Cards exibidos" e o botão "Atualizar".
- A página exibirá uma lista de Pokémon com base no limite especificado.

## Instruções de Uso

- Abra o arquivo index.html em um navegador web moderno (como Google Chrome).
- Para pesquisar um Pokémon:
  1. Insira o nome ou número de identificação do Pokémon na caixa de pesquisa.
  2. Clique no botão "Buscar" ou pressione "Enter".
  3. Os detalhes do Pokémon serão exibidos na página.
- Para listar um número específico de Pokémon:
  1. Insira a quantidade desejada na caixa "Cards exibidos".
  2. Clique no botão "Atualizar".
  3. A página exibirá a lista de Pokémon com base no limite especificado.

## Melhorias Futuras

- Implementar paginação para navegar por várias páginas de Pokémon.
- Adicionar mais detalhes sobre cada Pokémon, como habilidades e estatísticas.
- Aprimorar o design e a usabilidade da interface do usuário.
- Incluir recursos adicionais, como filtragem por tipo de Pokémon.

## Considerações Finais

Este projeto da Pokédex é um exemplo de uma aplicação web simples que utiliza tecnologias front-end para exibir informações sobre Pokémon. Ele pode ser estendido e aprimorado de várias maneiras para criar uma experiência mais rica para os usuários.

Nota: Certifique-se de que todas as bibliotecas e dependências necessárias, como a API PokeAPI, estejam acessíveis e funcionando corretamente para garantir o bom funcionamento do projeto.

Esta documentação fornece uma visão geral do projeto e suas funcionalidades principais. Para um entendimento mais aprofundado do código e detalhes técnicos, consulte o código-fonte nos arquivos correspondentes.

## Principais dificuldades encontradas no decorrer do projeto e suas respectivas soluções

### Centralizar a Imagem de Fundo

**Dificuldade:** No início, a imagem de fundo não estava centralizada na página.

**Solução:** Foi adicionada a propriedade background-position: center; ao CSS do body para centralizar a imagem de fundo horizontalmente. Além disso, background-attachment: fixed; foi utilizado para manter a imagem fixa no lugar enquanto a página rola.

### Estilo dos Cards

**Dificuldade:** Inicialmente, os cards não tinham um estilo visual atraente.

**Solução:** Foi criada uma classe .card no CSS que definiu o estilo dos cards, incluindo bordas arredondadas, sombras e uma transição suave ao passar o mouse para melhorar a aparência.

### Exibição de Dados Pokémon

**Dificuldade:** Exibir os dados corretos de um Pokémon ao clicar em sua busca era um desafio.

**Solução:** Foi criada uma função JavaScript fetchPokemon para fazer solicitações à API do Pokémon com base no nome ou ID fornecido. Os dados do Pokémon foram então exibidos dinamicamente no HTML.

### Layout Lado a Lado para Informações

**Dificuldade:** Colocar informações de altura e peso do Pokémon lado a lado nos cards.

**Solução:** Duas abordagens foram apresentadas: usando display: inline-block; para os elementos e também usando display: flex; com um contêiner para alinhar as informações lado a lado.

### Documentação para Entrevista

**Dificuldade:** Criar uma documentação clara e concisa para o projeto de entrevista.

**Solução:** A documentação foi criada de acordo com as solicitações da entrevista, detalhando os componentes do projeto, suas funcionalidades e os códigos relevantes. Isso ajudou a fornecer uma visão geral do projeto.

### Manutenção da Lista de Pokémon

**Dificuldade:** Manter uma lista atualizada de Pokémon ao clicar no botão "Atualizar".

**Solução:** A função getPokemon foi criada para buscar uma lista de Pokémon com base no limite fornecido pelo usuário e atualizar dinamicamente o conteúdo da página.

### Limpeza do Input de Pesquisa

**Dificuldade:** Limpar o campo de pesquisa após a busca.

**Solução:** Foi criada a função clearInput para limpar o campo de pesquisa após a busca ser feita.

## Testes de Usabilidade

### Teste de Busca por Pokémon

**Ação:** Digitar o nome ou ID de um Pokémon e clicar no botão "Buscar" ou pressionar Enter.

**Resultado Esperado:** O card do Pokémon correspondente deve ser exibido na tela com seu nome, ID e tipos.

### Teste de Limite de Pokémon Exibidos

**Ação:** Digitar um número no campo "Cards exibidos" e clicar no botão "Atualizar" ou pressionar Enter.

**Resultado Esperado:** O número de cards de Pokémon exibidos na página deve corresponder ao limite inserido.

### Teste de Centralização da Imagem de Fundo

**Ação:** Abrir a página.

**Resultado Esperado:** A imagem de fundo deve estar centralizada horizontalmente na tela e fixa enquanto a página é rolada.

### Teste de Estilo dos Cards

**Ação:** Passar o mouse sobre um card de Pokémon.

**Resultado Esperado:** O card deve aumentar de tamanho suavemente e um efeito de sombra deve ser visível.

### Teste de Limpeza do Input de Pesquisa

**Ação:** Realizar uma busca e verificar o campo de pesquisa após a busca.

**Resultado Esperado:** O campo de pesquisa deve ser limpo após a busca ser realizada.

### Teste de Atualização da Lista de Pokémon

**Ação:** Digitar um novo limite de cards e clicar no botão "Atualizar" ou pressionar Enter.

**Resultado Esperado:** A lista de Pokémon na página deve ser atualizada com base no novo limite inserido.

### Teste de Exibição de Informações Lado a Lado

**Ação:** Verificar os cards de Pokémon para informações de altura e peso.

**Resultado Esperado:** As informações de altura e peso devem ser exibidas lado a lado nos cards.

## Tutorial de Uso da Pokédex

A Pokédex é uma aplicação simples que permite que você pesquise e explore informações sobre os Pokémon. Siga estas etapas para tirar o máximo proveito dela:

### Pesquisando Pokémon

#### Buscar Pokémon por Nome ou ID

1. No campo "Buscar Pokémon," digite o nome ou ID do Pokémon que deseja pesquisar.

2. Clique no botão "Buscar" ou pressione a tecla "Enter" no teclado.

#### Resultado da Pesquisa

O card do Pokémon correspondente será exibido na tela. Ele incluirá o nome, ID e os tipos do Pokémon.

Você pode repetir a pesquisa quantas vezes quiser para explorar diferentes Pokémon.

### Definindo o Limite de Cards Exibidos

#### Definindo o Limite de Cards Exibidos

1. No campo "Cards exibidos," digite o número de cards de Pokémon que deseja ver na página.

2. Clique no botão "Atualizar" ou pressione a tecla "Enter" no teclado.

#### Lista de Pokémon Atualizada

A lista de cards de Pokémon será atualizada para exibir o número de cards definidos pelo limite inserido.

Isso permite que você controle a quantidade de informações exibidas na página.

### Explorando Informações de Pokémon

#### Informações de Altura e Peso

- No card de cada Pokémon, você encontrará informações de altura e peso.

- A altura é exibida em metros (m) e o peso em quilogramas (kg).

- As informações de altura e peso são exibidas lado a lado para facilitar a visualização.

### Dicas Adicionais

- Centralização da Imagem: A imagem de fundo na página é centralizada horizontalmente e permanece fixa à medida que você rola a página.

- Limpar o Campo de Pesquisa: Após cada pesquisa, o campo de pesquisa é limpo automaticamente para facilitar pesquisas subsequentes.

- Efeito de Destaque nos Cards: Passe o mouse sobre um card de Pokémon para ver um efeito de destaque que aumenta suavemente o tamanho do card.
