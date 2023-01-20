# NLW Setup [Ignite]

Bruno Pereira | bruno.pereira@ifpa.edu.br

Acesse meu perfil no GitHub e encontre o repositório público `nlw-setup`.

[eubrunodiego - Overview](https://github.com/eubrunodiego)

# Sobre o evento

Este projeto foi desenvolvido durante a Next Level Week (NLW) Setup, evento de programação da Rocketseat, de 16 a 20 de janeiro de 2023.

[Rocketseat](https://app.rocketseat.com.br/event/nlw-setup)

# Sobre a aplicação desenvolvida

## Habit

Trata-se de uma aplicação (web e mobile) para…

Veja o protótipo no Figma:

[Figma](https://www.figma.com/community/file/1195326661124171197)

# Roteiros

## Aula 1 - Iniciando o projeto de ponta-a-ponta

- [x]  Back-end
    - [x]  Fundamentos do `Node.js`
    - [x]  Criação do projeto [`server`]
    - [x]  Setup do `TypeScript`
    - [x]  Criando a primeira rota
    - [x]  Configurando o `Prisma`
    - [x]  Configurando o `Cors`
- [x]  Front-end
    - [x]  Fundamentos do `React`
    - [x]  Criação do projeto [`web`]
    - [x]  Componentes e propriedades
    - [x]  Configurando o `Tailwind CSS`
- [x]  Mobile
    - [x]  O que é `React Native`
    - [x]  O que é o `Expo` e `Expo Go`
    - [x]  Ambiente de desenvolvimento
    - [x]  Conhecendo a estrutura de pastas e arquivos
    - [x]  Executando a aplicação
    - [x]  Configurando a Splash Screen
    - [x]  Instalando fontes personalizadas
    - [x]  Criação do `component` `Loading`
    - [x]  Customizando a Status Bar

## Aula 2 - Avançando o Back-end e o Front-end

- [x]  Back-end
    - [x]  Estrutura do banco de dados
        - [x]  Diagramação do banco de dados
        - [x]  Criação de tabelas no banco de dados
        - [x]  Criação de `seed` do banco de dados
    - [x]  Isolando arquivos do back-end
    - [x]  Rotas do back-end
        - [x]  Criação de novo hábito
        - [x]  Detalhamento dos hábitos do dia
        - [x]  Toggle do hábito no dia
        - [x]  Resumo dos dias
- [x]  Front-end
    - [x]  Estrutura da homepage
        - [x]  Componente `Header`
        - [x]  Tabela de hábitos diários
        - [x]  Geração de range de dias
        - [x]  Preenchimento de dias no fim
        - [x]  Adicionando Scroll horizontal
- [x]  Mobile
    - [x]  Conhecendo o `Nativewind`
    - [x]  Instalação do `Nativewind`
    - [x]  `tailwind.config` no `React Native`
    - [x]  Tipagem do `className` para usar o `tailwind`
    - [x]  Instalar o `Tailwind CSS IntelliSense`
    - [x]  Criando a `screen` de `Home`
        - [x]  Criando o `component` de `Header`
            - [x]  Incluindo logo `SVG` como componente
            - [x]  Tipagem do `SVG` com componente
            - [x]  Utilizando ícones do `vector-icons`
        - [x]  Criando o `component` para `HabitDay`
            - [x]  Instalando o `dayjs` para manipular datas
            - [x]  Definindo o padrão de datas `pt-br`
            - [x]  Reaproveitando o `generate-range-between-dates.ts`
        - [x]  Criando os dias para o componente HabitDay
        - [x]  Criando o cabeçalho dos dias da semana

## Aula 3 - Finalizando o layout Web e Mobile

- [x]  Back-end
    - [x]  Rota para completar hábito
    - [x]  Rota para o resumo dos dias
- [x]  Front-end
    - [x]  Acessibilidade com Radix-ui
    - [x]  Modal `Dialog` para criar Novo Hábito
    - [x]  `Popover` do detalhamento do dia
    - [x]  Personalizar `ProgressBar`
- [x]  Mobile
    - [x]  Criando estrutura básica das telas [screens]
        - [x]  Cadastro de Novo Hábito
        - [x]  Detalhes do Hábito
    - [x]  Implementando a Navegação
        - [x]  Criando rotas da aplicação `app.routes.tsx`
        - [x]  Navegar para a tela de cadastro
        - [x]  Tipagem das rotas de navegação
    - [x]  Criando `screen New.tsx` para Criar Hábito
        - [x]  Habilitando rolagem com `ScrollView`
        - [x]  Criando component `BackButton`
        - [x]  Implementando ação do botão de voltar
        - [x]  Criando o `input` de um novo hábito
        - [x]  Criando `component` `CheckBox`
        - [x]  Criando o botão de confirmação
    - [x]  Criando `screen Habit.tsx` para hábitos do dia
        - [x]  Navegando para a tela do hábito
        - [x]  Habilitando rolagem com `ScrollView`
        - [x]  Reaproveitando o `component` `BackButton`
        - [x]  Usando data como parâmetro da rota
        - [x]  Estilizar e exibir o dia da semana
        - [x]  Estilizar e exibir a data DD/MM
        - [x]  Criando `component` `ProgressBar`
        - [x]  Implementando ação do `CheckBox`

## Aula 4 - Conectando a API

- [x]  Front-end
    - [x]  Criando CheckBox
    - [x]  Obtendo dados do formulário
    - [x]  Sincronizando hábitos completos
- [x]  Conexão Front-end com Back-end
    - [x]  Configurando cliente HTTP
    - [x]  Buscando resumo da API
    - [x]  Utilizando dados da API no Popover
    - [x]  Implementação da criação de Novo Hábito
- [x]  Mobile
    - [x]  Iniciando o `server`
        - [x]  Instalando o `Axios`
        - [x]  Configurando o acesso ao `server`
    - [x]  `Home`
        - [x]  Listando o `summary`
        - [x]  Utilizando o `Loading` `component`
        - [x]  Manipulando propriedades no `HabitDay` `component`
        - [x]  Calculando percentual de progresso no dia
        - [x]  Utilizando o `clsx` para manipular classes de estilos condicionais
    - [x]  `New`
        - [x]  Obtendo dados do formulário
        - [x]  `get` e `post` de novos hábitos para a `api`

## Aula 5 - O próximo nível

- [x]  ???

# Tecnologias utilizadas no desenvolvimento

Agrupamos as tecnologias em `server` (back-end), `web` e `mobile` (front-end).

## Server

### Node.js

Iniciando a aplicação

```bash
npm run dev
```

### Prisma

ORM para Node.js e TypeScript

[Prisma | Next-generation ORM for Node.js & TypeScript](https://www.prisma.io/)

Instalação como dependência de desenvolvimento

```bash
npm i -D prisma
```

Executando o código prisma e gerando versões às quais se devem atribuir nomes

```bash
npx prisma migrate dev
```

Executando o front-end do prisma

```bash
npx prisma studio
```

## Web

### Tailwindcss

Biblioteca de classes para manipulação de estilos

[Installation - Tailwind CSS](https://tailwindcss.com/docs/installation)

Instalação e inicialização do **tailwindss**

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Configuração do `tailwind.config.js`

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Phosphor Icons

Biblioteca de ícones para aplicativos

[GitHub - phosphor-icons/homepage: The homepage of Phosphor Icons, a flexible icon family for everyone](https://github.com/phosphor-icons/homepage#phosphor-icons)

Instalação do Phosphor icons

```bash
npm install --save phosphor-react
```

### Radix-ui

Biblioteca não-estilizada para acessibilidade de componentes visuais do React

[Primitives - Radix UI](https://www.radix-ui.com/)

Instalação do modal **Dialog**

```bash
npm install @radix-ui/react-dialog
```

Importação do Dialog no arquivo `.tsx`

```tsx
import * as Dialog from '@radix-ui/react-dialog';
```

Instalação do **Popover**

```bash
npm install @radix-ui/react-popover
```

Importação do Popover no arquivo `.tsx`

```tsx
import * as Popover from '@radix-ui/react-popover';
```

Instalação do Checkbox

```bash
npm install @radix-ui/react-checkbox
```

Importação do Checkbox no arquivo `.tsx`

```tsx
import * as Checkbox from '@radix-ui/react-checkbox';
```

### Clsx

Biblioteca para criar condicionais dentro dos estilos

Instalação

```bash
npm i clsx
```

### Axios

```tsx
npm i axios    
```

## Mobile

### React Native com Expo

Iniciando a aplicação

```bash
npx expo start
```

### Nativewind

Biblioteca para usar os recursos do Tailwind CSS no React Native

[https://www.nativewind.dev/quick-starts/expo](https://www.nativewind.dev/quick-starts/expo)

Instalação no Terminal do MacOS

```bash
npm i nativewind
```

Após a instalação do "Nativewind”, instale o Tailwind CSS para desenvolvimento

```bash
npm i tailwindcss --save-dev
```

e altere o arquivo de configuração `tailwind.config.js` como mostrado abaixo.

```jsx
// tailwind.config.js

module.exports = {
- content: [],
+ content: [
"./App.{js,jsx,ts,tsx}",
"./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### SVG

Biblioteca para renderizar arquivos `.svg` no React Native.

[https://github.com/software-mansion/react-native-svg](https://github.com/software-mansion/react-native-svg)

Instalação

```bash
npx expo install react-native-svg
```

### SVG Transformer

Biblioteca para usar arquivos `.svg` como componentes no React Native

[https://github.com/kristerkari/react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)

Instalação

```bash
npm i react-native-svg-transformer --save-dev
```

Configuração criando na raíz do diretório do projeto o arquivo `metro.config.js` com o seguinte conteúdo:

```jsx
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

### Vector Icons

Biblioteca de ícones para o React Native.

[react-native-vector-icons directory](https://oblador.github.io/react-native-vector-icons/)

Dentre as diversas opções, o Rodrigo usa a "Feather”, importando-a assim:

```tsx
import { Feather } from '@expo/vector-icons’;
```

### Dayjs

Biblioteca para manipular datas.

[https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs)

Instalação

```tsx
npm install dayjs
```

Para configurar a região de data local, crie um diretório "lib” dentro de "src” e crie um documento `dayjs.ts` contendo:

```tsx
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
```

### React Navigation

Biblioteca para navegação entre telas com React Native

[](https://reactnavigation.org/docs/getting-started)

Instalação

```bash
npm install @react-navigation/native
```

Instalação de dependências para telas com notch

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Instalando o Stack navigator

```bash
npm install @react-navigation/native-stack
```
