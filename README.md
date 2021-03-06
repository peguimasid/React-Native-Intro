<h1 align="center">
  <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<h3 align="center">
  :rocket: [Bootcamp GoStack#10] Primeiro projeto com React Native
</h3>

<h1 align="center">
  <img src="./assets/demoApp.png" width="1000px" />
</h1>

### Rodando na sua maquina:

1. Baixe o arquivo ***.ZIP***
2. `cd React-Native-Intro-master`
3. `yarn` para instalar as dependencias
4. `yarn ios` para iniciar o servidor (demora um pouco essa parte)
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

10. Voltamos no `index.js` na pasta `src` e deixamos ele assim

```
import React from 'react';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return <Routes />;
}
```
Se aparecer qualquer erro faca isso: `cd ios` > `pod install` > `cd ..` pare o servidor e inicie novamente com `yarn ios`

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

## Aula 09 - Estilizando formulário

Vamos utilizar para isso uma biblioteca de icones e para configura-la vamos fazer o seguinte:

1. `yarn add react-native-vector-icons`
2. Vamos no [repositorio dele no github](https://github.com/oblador/react-native-vector-icons)
3. Vamos em `Instalation > iOS`
4. Clicamos em `List of all available fonts to copy & paste in info.plist`
5. Copiamos isso:

```
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```
Vamos no nosso projeto em `Raiz > ios > <nome do projeto> > Info.plist`

6. colamos o que pegamos antes de terminar a tag `<dict>`

7. `cd ios` --> `pod install` --> `cd ..`

### Para Android

1. Entra no repositorio, `Instalation > Android` e copiamos:

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

2. entramos em `Raiz > android > app > build.gradle` e colamos la no final o código que copiamos.

### Arquivos:

`Main > index.js`:

```
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
```

`Main > styles.js`:

```import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #4f4f4f;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #d3d3d3;
  height: 45px;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px solid #d3d3d3;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #4f4f4f;
  padding: 0 14px;
  border-radius: 10px;
  margin-left: 10px;
`;
```

assim que fazemos os estilos.

## Aula 10 - Acessando API do Github

Para isso vamos mudar nosso carregamento do componente ***Main*** de um ***function*** para uma ***class*** pois vamos usar ***estado(state)*** dentro dele, entao nosso componente ficara assim:

```
...
import React, { Component } from 'react';
...
export default class Main extends Component {
  state = {

  }

  render() {
    return (...
...
```
depois disso fazemos isso no nosso ***state*** e no nosso ***Input***:

***state***:

```
state = {
    newUser: '',
    users: [],
  };
```

***Input***:

```
render(){
const { users, newUser } = this.state;

.
.
.

        <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
      *     value={newUser}
      *     onChangeText={(text) => this.setState({ newUser: text })}
      *     returnKeyType="send"
      *     onSubmitEditing={this.handleAddUser}
          />
```

### Conectando API

1. Rodar `yarn add axios`
2. Dentro de `src` criamos uma pasta `services` e dentro dela criamos um arquivo `api.js`.

`api.js`:

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

3. Dentro de `src > pages > Main > index.js`

```
...
import api from '../../services/api'
...
handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`); //pega dados da api

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });
    Keyboard.dismiss(); //Dispensa o teclado
  };

```

ao enviarmos receberemos os dados do usuario que digitarmos la no ***Reactotron***

## Aula 11 - Estilizando listagem

1. Comecamos criando nossos componentes

2. Fazemos isso com o componente List:

```
<List
   data={users}
   keyExtractor={(user) => user.login}
   renderItem={({ item: user }) => (
    <User>
      <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
           <Bio>{user.bio}</Bio>

          <ProfileButton onPress={() => {}}>
            <ProfileButtonText>Ver perfil</ProfileButtonText>
          </ProfileButton>
      </User>
     )}
 />
```

3. importamos cada componente que criamos ali:

```
import {
  Container,
  Form,
  Input,
  SubmitButton,
*  List,
*  User,
*  Avatar,
*  Name,
*  Bio,
*  ProfileButton,
*  ProfileButtonText,
} from './styles';
```

4. Criamo eles no `styles.js` e estilizamos:

```
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #777;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 20px;
  align-self: stretch;
  border-radius: 10px;
  background: #4f4f4f;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
```

## Aula 12 - Loading e disabled

Vamos colocar aquele simbolo de carregando enquanto a API estiver buscando os dados e vamos desabilitar o botao.

1. importar o ***ActivityIndicartor*** do react-native, que é aquele simbolo de carregando padrāo do iPhone e Android:

`import { ActivityIndicator } from 'react-native';`

2. Dentro de `state` criamos `loading: false`

3. antes de chamar a API colocamos para setar o estado (setState) do loading para true `this.setState({ loading: true });`

e depois que chamar setamos para falso `this.setState({ loading: false });`

4. Vamos no submit button e deixamos ele assim:

```
<SubmitButton loading={loading} onPress={this.handleAddUser}>
  {loading ? (
    <ActivityIndicator color="#FFF" />
  ) : (
    <Icon name="add" size={20} color="#fff" />
  )}
</SubmitButton>
```

Ou seja, se estiver carregando(loading) ele vai mostrar o ActivityIndicator, se nao ele ira mostrar o icone normal.

la no estilo do nosso botao colocamos assim:

`opacity: ${(props) => (props.loading ? 0.7 : 1)};`

Ou seja, se ele esiver carregando a opacidade ira diminuir.

## Aula 13 - Salvando no storage

Por padrao o react native nao tem uma funcionalidade tipo o `localStorage`, entao vamos ter que instalar uma lib para esse papel:

1. Rodar `yarn add @react-native-community/async-storage `
2. `cd ios > pod install > cd ..`
3. Rodar `yarn ios`
4. `import AsyncStorage from '@react-native-community/async-storage';`
5.

```
// CARREGA OS ITENS
async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

// ARMAZENA OS ITENS
  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }
```

com isso nossos dados agora serao salvos no localStorage, nao sumindo se sairmos do app.

## Aula 14 - Realizando navegaçāo

Vamos fazer a navegaçao de um usuario para uma proxima rota quando ele clicar em um botao

`<ProfileButton onPress={() => this.handleNavigate(user)}>`

1.criamos a funçao `handleNavigate`

```
handleNavigate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };
```
Com isso ele chama a funcao e leva a gente para a outra tela, e estamos tambem passando os parametros daquele usuario para a proxima pagina.

2. Vamos em `src > pages > User > index.js` e passamos assim:

```
export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));
  return <View />;
}
```
Veremos la no Reactotron os nossos dados passados atraves das propriedades.

3. Rodar `yarn add prop-types`

4. `src > pages > Main > index.js` dentro do class component

```
static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };
```
temos que passar essa validacao de dados para o ESLint nao reclamar.

## Aula 15 - Buscando dados da API

Vamos agora ao clicar no botao ***Ver Perfil*** levar o usuario para outra pagina onde ele vera os repositorios que o usuario que ele clicou deu Star.

`pages > User > index.js`:

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {

  // PEGANDO O NOME DAQUELE USUARIO E COLOCANDO NO HEADER DA PAGINA
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    // PEGANDO OS DADOS DOS REPOS QUE O USUARIO DEU STAR
    const response = await api.get(`/users/${user.login}/starred`);

    // SETANDO O ESTADO DE STARS COM ESSAS INFORMAÇÕES
    this.setState({ stars: response.data });
  }

  render() {
    const { starts } = this.state;

    return <View />;
  }
}
```

## Aula 16 - Listando favoritos

Vamos listar esses dados que pegamos na ultima aula.

```
render() {
    const { navigation } = this.props;
    const { starts } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}
```

depois disso importamos os componentes e estilizamos como quiser;

Olhar o repositorio do [desafio de React Native](https://github.com/Rocketseat/bootcamp-gostack-desafio-06/blob/master/README.md#desafio-06-aplica%C3%A7%C3%A3o-com-react-native), la fazemos a paginacao(scroll infinito), refresh, loading enquanto nao carrega, e WebView.
