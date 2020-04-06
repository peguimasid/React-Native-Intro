<h1 align="center">
  <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<h3 align="center">
  :rocket: [Bootcamp GoStack#10] Primeiro projeto com React Native
</h3>

### Rodando na sua maquina:

1. Baixe o arquivo ***.ZIP***
2. `cd React-Native-Intro-master`
3. `yarn` para instalar as dependencias
4. `npx react-native start` para iniciar o servidor
5. Abrir o emulador de IOS no seu computador.

# Primeiro projeto com React Native

Vamos aprender agora a utilizar todos os conceitos aprendidos sobre ***React*** no ***React Native***. [React-Parte-1](https://github.com/peguimasid/React-Introduction) [React-Parte-2](https://github.com/peguimasid/React-Part-2)

## Aula 01 - Conceitos do React Native

### O que é React Native?

- Versāo do React para desenvolvimento mobile
- Multiplataforma (Android, IOS)
- Podemos alterar coisas em cada plataforma
- Interface Nativa

### Arquitetura

Codigo ***Javascript*** é monitorado por um carinha chamado ***Metro Bundler*** ou ***Packager***, depois é gerado nosso arquivo ***Bundle*** que passa por uma ***Bridge*** e é transformado para ***IOS*** e ***Android***.

### Sintaxe

```
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function Button() {
  return (
    <View style={style.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
    </View>
  ) ;
}
```

Como podemos perceber:

- A declaraçāo dos componentes é igual a da Web
- Nāo usamos HTML e sim componentes proprio do ***React Native***
- Aplicamos estilos sem classes ou ID's
- Todo texto é `<Text />`, nao existe `<h1>` `<p>` ...

Exemplo de estilizacao com ***React Native***:

```
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  button: {
    backgtoundColor: '#7159c1',
  }

  text: {
    fontWeight: 'bold',
  },
});
```

- Utlizamos o camelCase ao inves do hifen:

- ***backgroundColor*** CERTO
- ***background-color*** ERRADO

### O que é Expo? Vamos usar?

- É uma SDK, que é um conjunto de funcionalidades prontas pra usar(câmera, vídeo, integrações)
- Nāo é necessario configurar emulador

#### Porque não vamos utilizar?

- Limitações sobre o controle de código nativo
- Varias bibliotecas nāo tem suporte para o Expo

[Slides sobre os conceitos](https://skylab.rocketseat.com.br/api/files/1580330972023-attachment.pdf)

## Aula 02 - Ambiente de desenvolvimento

Para configurar o emulador de celular no computador, vá ao site [docs.rocketset.dev](https://docs.rocketseat.dev/) escolha sua maquina e execute o que for mandado.

## Aula 03 - Criando Projeto

***OBS:*** Primeiro, se voce estiver utilizando o ***MacOS*** voce deve intalar o [Cocoapods](https://cocoapods.org/) pois o emulador faz o uso de alguns desse pacotes no Mac, para instalar rode esse comando:

`sudo gem install cocoapods`

1. rodar `npx react-native init <nomeDoProjeto>`

***EX:*** `npx react-native init reactNativeIntro`

OBS: Nāo usar `-` no nome do projeto pois dara erro.

2. Rodar `cd <nomeDoProjeto>` ***EX:`cd reactNativeIntro`***
3. Rodar `npx react-native run-ios`

Depois de rodarmos esse comando uma unica vez, quando desligarmos a maquina ou algo do tipo, somente rodamos `npx react-native start` na pasta do projeto para iniciar, abrimos o emulador e clicamos no icone do app.

4. Provavelmente seu código estara mais complexo, entao mude para esse para comecarmos no basico (`App.js`):

```
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
```

## Aula 04 - ESLint, Prettier & EditorConfig

Vamos configurar agora os pacotes que vao ajudar a gente a manter os padrões de codigo dentro do nosso projeto.

### EditorConfig

1. Instale no VSCode a extensao do ***EditorConfig***
2. Vá na localizaçāo das pastas e clique com os dois dedos (botao direito no mouse) e clique em `Generate .editorconfig` e nosso arquivo sera criado.

A configuracao dele ficará assim:

```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### ESLint

1. Rodar `yarn add eslint -D`
2. Rodar `yarn eslint --init`
3. Selecionar:

`❯ To check syntax, find problems, and enforce code style` <br>
`❯ JavaScript modules (import/export)`<br>
`❯ React` <br>
`? Does your project use TypeScript? (y/N) N` <br>
```
❯◯ Browser  NENHUM DOS DOIS
 ◯ Node
```
`❯ Use a popular style guide` <br>
`❯ Airbnb: https://github.com/airbnb/javascript` <br>
`❯ JavaScript` <br>
`? Would you like to install them now with npm? (Y/n) Y` <br>

4. Deletar o arquivo `package-lock.json`
5. Rodar `yarn`

### Prettier

1. Rodar `yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D `
2. Vamos deixar nosso arquivo `.eslintrc.js` que foi criado na raiz do projeto assim:

```
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },
};
```

3. Criamos um arquivo `.prettierrc` e deixamos ele assim:

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### Problema com algum erro instalando os pacotes:

`yarn start --reset-cache` ou `react-native start --reset-cache`, dependendo de como voce inicia o projeto, e tambem se nao resolver rodar `yarn ios` ou `react-native run-ios` resolve tambem.

## Aula 05 - Configurando Reactotron

Podemos debugar a aplicaçao usando `console.log()` mas nao é interessante pois os dados sao mostrados no navegador, e fica muito desorganizado, e para resolver isso vamos [instalar o Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-js.md)

Depois de instalar no computador abrimos o aplicativo e fazemos o seguinte:

1.Rodamos no terminal na pasta do nosso projeto:`yarn add reactotron-react-native`
2. Criamos uma pasta `src` na raiz do projeto e la dentro criamos um arquivo `index.js` e dentro dele colocamos o codigo que esta no `App.js` na raiz da aplicaçāo:

***`src > index.js`***:
```
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
    </View>
  );
}
```

3. Deletamos o arquivo `App.js` que estava na raiz da aplicaçāo
4. Vamos no `index.js` que esta na raiz da aplicaçāo e deixamos ele assim:

***`index.js`***

```
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```
***--> trocamos o caminho do arquivo principal***

5. Dentro da pasta `src` criamos outra pasta `config` e dentro dela um arquivo chamado `ReactotronConfig.js`

***`ReactotronConfig.js`***:

```
import Reactroton from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactroton.configure().useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
```

6. Vamos no `.eslintrc` e adicionamos dentro de `globals`:

` __DEV__ : 'readonly'`

7. Dentro de `src > index.js` --> `import './config/ReactotronConfig';`

Agora toda vez que usarmos o comando `console.tron.log()` ele vai fazer o console.log dentro do aplicativo do ***Reactotron***.

Vamos aprender mais utilizades do ***Reactotron*** mais pra frente.


## Aula 06 - React Navigation

Assim como temos a parte de rotas na ***Web*** vamos ter aqui tambem.

### Configurando

1. Para começar vamos deixar nosso `src > index.js` assim, quase sem nada:

```
import React from 'react';
import { View } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  return <View />;
}
```

2. Depois vamos dentro de `src` criar uma pasta `pages` e dentro dela duas pastas: `Main` e `User` cada uma com um arquivo `index.js` dentro, que serao as rotas que a nossa aplicaçāo tera.

3. No arquivo `index.js` de cada pasta colocamos as configurações base do ***React Native*** digitando `rnfc` (temos que ter instalado os snippets de React e React Native da Rocketseat) ficando assim:

```
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function User || Main() {
  return <View />;
}
```

4. Rodar `yarn add react-navigation`

5. Rodar `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

6. Entrat em `android > app > build.gradle` e em `dependencies` adicionar essas linhas:

```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

7. Rodar `cd ios`; `pod install`; `cd ..`

8. Rodar `yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context`

9. Dentro de `src` criamos um arquivo `routes.js` que vai ficar assim:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
```

--> Sempre colocar qualquer tipo de navegaçāo dentro do `createAppContainer`

10. Voltamos no `index.js` na raiz do projeto e deixamos ele assim

```
import React from 'react';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return <Routes />;
}
```

Se aparecer um cabecalho na parte de cima da tela do simulador é sinal de que funcionou perfeitamente

Se quisermos mudar o titulo que aparece no cabecalho podemos fazendo o seguinte la em `src > pages > Main > index.js`:

```
Main.navigationOptions = {
  title: 'Nome da Pagina',
};
```

podemos tambem mudar os estilos la em `routes.js`

***EXEMPLO:***

```
createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerTitleAlign: 'center', // Titulo no meio
      defaultNavigationOptions: {
        headerBackTitleVisible: false, // tira o titulo em outra pagina
        headerStyle: {
          backgroundColor: '#7159c1', // cor do header
        },
        headerTintColor: '#FFF', //cor da escrita do header
      },
    }
  )
```

## Aula 07 - Configurando StatusBar

Podemos configurar a ***StatusBar*** do dispositivo.

Podemos fazer isso em qualquer rota, mas como quero alterar em todas vou fazer o seguinte:

1. Vamos em `src > index.js`
2. `import { StatusBar } from 'react-native';`
3. dentro do `return` colocamos assim:

`<StatusBar barStyle="light-content" backgroundColor="#7159c1" />`

o ***barStyle*** altera a cor das informacões pra branco e a ***backgroundColor*** altera a cor de fundo no android para a mesa que estivermos usando na navegaçāo.

## Aula 08 - Styled Components

Vamos intalar a mesma lib que utlizamos para estilizaçāo no ***ReactJS*** no ***React Native***

### Configurando

1. `yarn add styled-components`
2. Dentro da rota que quisermos estilizar (***EX:***`src > pages > Main`) criamos um arquivo `styles.js`
3. se digitarmos `styled-rn` ele já monta todas as configurações base pra gente

```
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
```
4. Vamos depois no `index.js` da mesma pasta que adicionamos o `styles.js`

```
import { Container } from './styles';

export default function Main() {
  return <Container />;
}
```

e nossa estilizacao sera aplicada.
