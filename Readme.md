<p align="center" target="_blank">
  <img src="https://i.imgur.com/b9HrmqJ.png" target="_blank">
</p>

# Módulo Mobile

> Reconhecidamente a melhor solução para serviços de entrega, com foco exclusivamente no cliente e totalmente comprometida em superar expectativas.

<p align="center" target="_blank">
  <img src="https://img.shields.io/badge/Version-0.1-blueviolet?style=plastic">
  <img src="https://img.shields.io/badge/React Native-%3E%3D0.61.5-blueviolet?style=plastic&logo=React">
  <img src="https://img.shields.io/badge/Redux-%3E%3D4.0.5-blueviolet?style=plastic&logo=Redux">
</p>

<p align="center" target="_blank">
:link:| &nbsp;<a href="#page_with_curl-Descrição" target="_blank">Descrição</a> &nbsp;  | &nbsp; <a href="#books-Bibliotecas">Bibliotecas</a> &nbsp; | &nbsp; <a href="#shell-ambiente-de-desenvolvimento-teste-e-uso">Ambiente de teste e uso</a> &nbsp; | &nbsp; <a href="#floppy_disk-Como-Instalar">Como instalar</a> &nbsp; | &nbsp; <a href="#mortar_board-Como-usar">Como usar</a> &nbsp; | &nbsp; <a href="https://github.com/SDamasceno-Dev/gostack-fastfeet-mobile/blob/master/LICENSE.MD">Licença</a> &nbsp; |
</p>

# :page_with_curl: Descrição

O módulo **Mobile** do Sistema Fastfeet é a ferramenta necessária para que o entregador possa gerir as suas entregas e poder informar ao sistema sobre alguma intercorrência que possa ocorrer durante a ação da entrega.

Por meio desse módulo o Entregador pode, dentre outras coisas:

* Visualizar as encomendas pendentes a serem retiradas e entregues;
* Confirmar a retirada de uma encomenda para ser entregue;
* Visualizar as encomendas entregues;
* Visualizar os detalhes da entrega;
* Cadastrar e visualizar os problemas de uma entrega;
* Registrar a assinatura do cliente na finalização de uma entrega;
* Visualizar o seu perfil cadastrado no Sistema Fastfeet.

# :books: Bibliotecas

Abaixo estão listadas as dependências, com a sua respectiva versão, utilizadas para o desenvolvimento desse módulo Mobile do Sistema Fastfeet:

<details><summary>Dependências</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/@react-native-community/async-storage">@react-native-community/async-storage</a> [^1.8.1]</li>
    <li><a href="https://www.npmjs.com/package/@react-native-community/cameraroll">@react-native-community/cameraroll</a> [^1.5.2]</li>
    <li><a href="https://www.npmjs.com/package/@react-native-community/masked-view">@react-native-community/masked-view</a> [^0.1.7]</li>
    <li><a href="https://www.npmjs.com/package/axios">axios</a> [^0.19.2]</li>
    <li><a href="https://www.npmjs.com/package/date-fns">date-fns</a> [^2.0.0-beta.5]</li>
    <li><a href="https://www.npmjs.com/package/date-fns-tz">date-fns-tz</a> [^1.0.10]</li>
    <li><a href="https://www.npmjs.com/package/immer">immer</a> [^6.0.2]</li>
    <li><a href="https://www.npmjs.com/package/prop-types">prop-types</a> [^15.7.2]</li>
    <li><a href="https://www.npmjs.com/package/react">react</a> "16.9.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native">react-native</a> "0.61.5]</li>
    <li><a href="https://www.npmjs.com/package/react-native-camera">react-native-camera</a> [^3.21.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native-gesture-handler">react-native-gesture-handler</a> [^1.6.1]</li>
    <li><a href="https://www.npmjs.com/package/react-native-permissions">react-native-permissions</a> [^2.0.10]</li>
    <li><a href="https://www.npmjs.com/package/react-native-reanimated">react-native-reanimated</a> [^1.7.1]</li>
    <li><a href="https://www.npmjs.com/package/react-native-safe-area-context">react-native-safe-area-context</a> [^0.7.3]</li>
    <li><a href="https://www.npmjs.com/package/react-native-screens">react-native-screens</a> [^2.4.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native-vector-icons">react-native-vector-icons</a> [^6.6.0]</li>
    <li><a href="https://www.npmjs.com/package/react-navigation">react-navigation</a> [^4.3.3]</li>
    <li><a href="https://www.npmjs.com/package/react-navigation-stack">react-navigation-stack</a> [^2.3.10]</li>
    <li><a href="https://www.npmjs.com/package/react-navigation-tabs">react-navigation-tabs</a> [^2.8.9]</li>
    <li><a href="https://www.npmjs.com/package/react-redux">react-redux</a> [^7.2.0]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-react-native">reactotron-react-native</a> [^5.0.0]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux">reactotron-redux</a> [^3.1.3]</li>
    <li><a href="https://www.npmjs.com/package/reactotron-redux-saga">reactotron-redux-saga</a> [^4.2.3]</li>
    <li><a href="https://www.npmjs.com/package/redux">redux</a> [^4.0.5]</li>
    <li><a href="https://www.npmjs.com/package/redux-persist">redux-persist</a> [^6.0.0]</li>
    <li><a href="https://www.npmjs.com/package/redux-saga">redux-saga</a> [^1.1.3]</li>
    <li><a href="https://www.npmjs.com/package/styled-components">styled-components</a> [^5.0.1]</li>
  </ul>
</details>

<details><summary>Dependências de desenvolvimento</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/@babel/core">@babel/core</a> [^7.9.0]</li>
    <li><a href="https://www.npmjs.com/package/@babel/runtime">@babel/runtime</a> [^7.9.2]</li>
    <li><a href="https://www.npmjs.com/package/@react-native-community/eslint-config">@react-native-community/eslint-config</a> [^0.0.7]</li>
    <li><a href="https://www.npmjs.com/package/babel-eslint">babel-eslint</a> [10.0.3]</li>
    <li><a href="https://www.npmjs.com/package/babel-jest">babel-jest</a> [^25.2.1]</li>
    <li><a href="https://www.npmjs.com/package/babel-plugin-root-import">babel-plugin-root-import</a> [^6.5.0]</li>
    <li><a href="https://www.npmjs.com/package/eslint">eslint</a> [^6.8.0]</li>
    <li><a href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</a> [^18.1.0]</li>
    <li><a href="https://www.npmjs.com/package/eslint-config-prettier">eslint-config-prettier</a> [^6.10.1]</li>
    <li><a href="https://www.npmjs.com/package/eslint-import-resolver-babel-plugin-root-import">eslint-import-resolver-babel-plugin-root-import</a> [^1.1.1]</li>
    <li><a href="https://www.npmjs.com/package/eslint-plugin-import">eslint-plugin-import</a> [^2.20.1]</li>
    <li><a href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a> [^6.2.3]</li>
    <li><a href="https://www.npmjs.com/package/eslint-plugin-prettier">eslint-plugin-prettier</a> [^3.1.2]</li>
    <li><a href="https://www.npmjs.com/package/eslint-plugin-react">eslint-plugin-react</a> [^7.19.0]</li>
    <li><a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">eslint-plugin-react-hooks</a> [^2.5.1]</li>
    <li><a href="https://www.npmjs.com/package/jest">jest</a> [^25.2.1]</li>
    <li><a href="https://www.npmjs.com/package/metro-react-native-babel-preset">metro-react-native-babel-preset</a> [^0.59.0]</li>
    <li><a href="https://www.npmjs.com/package/prettier">prettier</a> [^2.0.2]</li>
    <li><a href="https://www.npmjs.com/package/react-test-renderer">react-test-renderer</a> [16.9.0]</li>
  </ul>
</details>

# :shell: Ambiente de desenvolvimento, teste e uso

Este módulo foi desenvolvido utilizando

```bash
Visual Studio Code
Version: 1.44.0
```

e testado utilizando o seguinte Sistema Operacional para Mobile e o seguinte dispositivo

```bash
Sistema Operacional: Android
Version: 7.0
Dispositivo: Galaxy Note5
```

:warning: **Obs:** Este módulo foi unicamente desenvolvido e testado para o Sistema Operacional **Android**. A versão para iOS **não** foi contemplada nessa versão, mas será desenvolvida em breve!

# :floppy_disk: Como Instalar

Para o bom funcionamento deste módulo, após a clonagem do Github, são necessárias algumas ações para a adequação da estrutura.

Antes de listar os passos necessários para o preparo do ambiente, é necessário que o computador onde irá rodar este módulo, já tenha instalado e devidamente configurado o [Git](https://git-scm.com/), [Node.JS >=v12.14.0 LTS](https://nodejs.org/en/), o [Yarn >=v1.22.4](https://yarnpkg.com/) e o [React-native-cli >= v2.0.1](https://www.npmjs.com/package/react-native-cli). Todos esses pacotes podem ser instalados utilizando um **Gerenciador de pacotes** compatível com o seu sistema operacional ([Homebrew](https://brew.sh/) para macOS, [Chocolatey](https://chocolatey.org/) para Windows).

Com essa estrutura pronta, pode-se iniciar o preparo do ambiente para se rodar este módulo Mobile do Sistema Fastfeet.

**1º Clonar o repositório**

Para se efetuar a clonagem desse repositório, de dentro da pasta  criada para o Sistema Fastfeet, a mesma pasta onde já foi clonado o [Backend](https://github.com/SDamasceno-Dev/gostack-fastfeet-backend) e o [Frontend](https://github.com/SDamasceno-Dev/gostack-fastfeet-frontend), abra uma sessão no terminal do computador, de dentro dessa pasta, e execute o seguinte comando:

```bash
# Clona a pasta Mobile do Sistema Fastfeet
$ git clone https://github.com/SDamasceno-Dev/gostack-fastfeet-mobile
```

**2º Acessar a pasta**

Acesse a pasta clonada

```bash
# Acessa a pasta clonada
$ cd gostack-fastfeet-mobile
```

**3º Instalar as dependências**

Execute o Yarn para que todas as dependências sejam corretamente instaladas

```bash
# Instala todas as dependências necessárias
$ yarn
```

**4º Ajustes necessários**

Devido à certas particularidades do Android em não reconhecer o localhost como caminho válido para o computador na rede local, é necessário alterar em alguns arquivos, que estão listados logo abaixo, a informação do IP da máquina onde estará rodando o Banco de Dados. Na listagem abaixo dos arquivos a serem alterados, já está indicado a linha com o respectivo local de ajuste. Esses ajustes são **fundamentais** serem feitos antes de se efetuar a compilação do App:

* gostack-fastfeet-mobile/src/services/api.js (linha 10)
* gostack-fastfeet-mobile/src/pages/Entregas/index.js (linha 65)
* gostack-fastfeet-mobile/src/pages/Profile/index.js (linha 37)
* gostack-fastfeet-mobile/src/config/ReactotronConfig.js (linha 14)

Após feito o ajuste do IP, pode-se efetuar a compilação do APP

**5º Compilação do App**

Após a instalação das dependências necessárias, e os devidos ajustes de IP da máquina onde está rodando o Banco de Dados, será necessária fazer a compilação e instalação do App.

Este App foi testado por meio de um dispositivo físico, que utiliza o Sistema Operacional Android, conectado via cabo USB ao computador que foi utilizado para desenvolver e compilar o arquivo App. Não foi utilizado durante o desenvolvimento, o uso de qualquer emulador de um dispositivo móvel.

Dessa maneira, o procedimento para compilação e instalação do App ocorrerá com os seguintes passos:

* Verifique se o dispositivo a ter o App instalado está com o modo de **Depuração USB** habilitado. Para se verificar isso, você pode seguir os passos descritos [aqui](https://react-native.rocketseat.dev/usb/android) ou pesquisar na WEB o procedimento para a habilitação desse modo para o seu aparelho;
* Após o modo de **Depuração USB** habilitado, conecte o dispositivo ao computador onde será compilado o App;
* Verifique se o computador reconheceu o dispositivo. Para verificar isso execute o seguinte comando no terminal do computador o qual o celular está conectado
  ```bash
  adb devices
  ```
  Se tudo estiver ok, você visualizará um resultado parecido com esse

  ```bash
  List of devices attached
  85b6425657323057	device # Dispositivo físico
  ```

  Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para rodar a aplicação. Nesse ponto basta executar o comando abaixo e aguardar a aplicação ser instalada no seu dispositivo.

  ```bash
  react-native run-android
  ```

  Nesse momento será realizada a compilação e a instalação do App do Sistema Fastfeet para o dispositivo conectado no computador.

:warning: **Obs:** Para que o módulo **Mobile**, do Sistema Fastfeet execute de forma correta é obrigatório que o módulo **Backend** esteja sendo executado e tendo acesso aos bancos de dados (Postgres e Redis).

Qualquer dúvida, basta acessar a documentação de como instalar e executar o módulo **Backend** [aqui](https://github.com/SDamasceno-Dev/gostack-fastfeet-backend)

# :mortar_board: Como usar

O módulo Mobile possui 3 grandes seções, vamos analisar e entender como funciona cada uma delas:

## :rocket: Seção "Login"

![Screenshot_20200414-121454](https://user-images.githubusercontent.com/58818002/79274014-43fd3900-7e7a-11ea-965c-9fb2ee26c721.png)

Essa seção tem a função de permitir o acesso do usuário ao módulo **Mobile** do Sistema Fastfeet.

Para que esse acesso ocorra, é necessário a entrada de um dado, o id do entregador cadastrado no sistema.

:heavy_exclamation_mark: **Regras de negócio**

* Somente serão autorizados os logins no módulo Mobile do Sistema Fastfeet, os perfis de **Entregadores** que tenham sido previamente cadastrados no Banco de Dados.

# :rocket: Seção "Dashboard de encomendas"

Assim que o login é efetuado com sucesso, será exibida a tela na Seção "Dashboard de entregas", conforme mostrada abaixo

![Screenshot_20200414-121624](https://user-images.githubusercontent.com/58818002/79274902-a73b9b00-7e7b-11ea-98ab-114bef9a1a6e.png)
Nessa Seção são acompanhadas as entregas que tenham sido devidamente cadastras para este perfil de entregador.

Como existem algumas entregas cadastradas para esse entregador, podemos perceber algumas áreas importantes nesta seção:

![Screenshot_20200414-121624-01](https://user-images.githubusercontent.com/58818002/79276056-b3285c80-7e7d-11ea-8f2e-dd1e15b876d7.png)

As áreas indicadas são as seguintes:

* **1- Efetuar o Logout do módulo Mobile do Sistema Fastfeet**

  Ao se clicar nesse botão o usuário efetua o o logout automático do módulo Mobile do Sistema Fastfeet.

* **2- Escolher visualizar as entregas pendentes e as entregas concluídas**

  Nestes botões o usuário tem a condição de selecionar quais as encomendas que ele gostaria de visualizar em sua dashboard.

  Ao escolher **Pendentes**, serão exibidas as encomendas que foram cadastradas no perfil desse entregador, independentemente se elas já foram ou não retiradas.

  Ao escolher **Entregues** o entregador irá visualizar a listagem de encomendas que já tiveram a entrega concluída por ele.

* **3- Informações básicas da entrega**

  Nessa área pode-se visualizar as seguintes informações:

  * **Nome do produto**: Exibido na parte superior, o nome do produto discrimina o produto que está sendo entregue;
  * **Marcação do status da entrega**: Essa marcação gráfica, exibe o status que a entrega tem no momento. Existem 3 momentos de marcação:
    * **Aguardando retirada**: Quando a entrega é cadastrada para o entregador e ainda não foi retirada;
    * **Retirada**: Quando o entregador efetua a retirada da encomenda e informa no sistema que realizou essa ação;
    * **Entregue**: Momento em que o entregador conclui a entrega.
  * **Data**: Exibe a data que a encomenda foi cadastrada no Sistema Fastfeet;
  * **Cidade**: Exibe a cidade onde a entrega deve ser realizada;
  * **Ver detalhes**: botão que exibe os detalhes da entrega bem como permite a execução de algumas ações relacionadas à entrega. Esta área será detalhada mais abaixo.

* **4- Alternar entre a Dashboard de entregas ou visualizar o perfil do entregador**

  Nessa área o usuário tem a possibilidade de visualizar a Dashboard de entregas, podendo visualizar os detalhes de cada uma das entregas ou pode visualizar o seu perfil no sistema contendo os seus dados cadastrados. Essa área do "Meu Perfil" será melhor exibida mais abaixo.

Agora que todas as áreas foram descritas, vamos conhecer melhor a função **"Ver detalhes"**

## :round_pushpin: Ver detalhes

Nessa área é possível visualizar diversas informações sobre a encomenda bem como executar algumas ações com ela. Podemos ver como essa área se apresenta na figura abaixo

![Screenshot_20200414-190420](https://user-images.githubusercontent.com/58818002/79278806-de617a80-7e82-11ea-8d19-7892a8732339.png)

Na figura mostrada se pode perceber que a entrega ainda não foi retirada.

Quando o entregador se apresenta na empresa e retira a encomenda para efetuar a entrega, ele deve confirmar a retirada clicando no botão **"Retirar Entrega"**. Quando esta ação é executada a encomenda passará a ter o status de **"Pendente"**, o campo data de retirada é preenchido com a data vigente e os botões **"Informar Problemas"**, **"Visualizar Problemas"** e **"Confirmar Entrega”** são habilitados na tela, conforme imagem abaixo

![Screenshot_20200414-151706](https://user-images.githubusercontent.com/58818002/79279088-a0b12180-7e83-11ea-9d12-4803a3df9927.png)

conforme podemos perceber esta encomenda já foi retirada pelo entregador.

:heavy_exclamation_mark: **Regras de negócio**

  * As entregas só podem ser retirada no horário de 08h às 18h;

### Descrição das ações  dos botões:

  * **Informar problema**: Caso durante a entrega exista alguma intercorrência que ocasione a não conclusão da mesma, a informação deverá ser registrada.

Para se informar um problema na entrega basta clicar no botão **"Informar Problema"** onde uma nova tela será exibida para preenchimento, conforme  exibida na imagem abaixo
  ![Screenshot_20200414-191352](https://user-images.githubusercontent.com/58818002/79279339-364cb100-7e84-11ea-99e3-dcd695bb3911.png)
    :round_pushpin: **Obs.**: Para habilitar o teclado clicar basta clicar no campo destinado para o registro do problema.

  Após a conclusão da digitação clicar em "Enviar" e o problema estará cadastrado.

  * **Visualizar Problemas**: Ao clicar no botão “Visualizar Problemas” é possível visualizar todos os problemas já cadastrados para determinada entrega, conforme demonstrado na figura abaixo
  ![Screenshot_20200414-192059](https://user-images.githubusercontent.com/58818002/79279757-208bbb80-7e85-11ea-8717-c6abb3fd1305.png)

  * **Confirmar Entrega**: Nesse botão é feita a confirmação da entrega ao destinatário.  É possível ainda capturar a assinatura do recebedor no campo designado para tal. A aparência dessa tela é mostrada abaixo bem como a descrição de como proceder para a conclusão da entrega da encomenda.
  ![Screenshot_20200414-193338-01](https://user-images.githubusercontent.com/58818002/79280908-f5ef3200-7e87-11ea-98da-f2e157f18951.jpg)
    * Para se registrar a assinatura confirmando a conclusão da entrega, primeiro deve-se posicionar a câmera de forma que a assinatura fique bem enquadrada e bem focada, logo em seguida clicar no botão, com a figura de uma câmera, indicado com o número 1 na figura acima.

      Com isso a foto da assinatura será registrada e exibida na tela, conforme abaixo

    ![Screenshot_20200414-193713](https://user-images.githubusercontent.com/58818002/79281129-8af22b00-7e88-11ea-8632-ca9730aef2d7.png)

      Nesse momento é possível verificar a qualidade da foto. Caso seja necessário tirar uma nova foto, basta clicar no botão com o símbolo **X**.

      Se a foto estiver com boa qualidade, basta clicar no símbolo de confirmação.

      Uma vez confirmada a foto, a tela voltará para a janela de registro da foto e, nesse momento basta clicar no botão **"Enviar"** que a foto registrada, será enviada para o Sistema Fastfeet e esta encomenda estará com o status de entrega concluído!

      Abaixo é demonstrada uma tela de uma entrega concluída

      ![Screenshot_20200414-195710](https://user-images.githubusercontent.com/58818002/79281920-318afb80-7e8a-11ea-9727-aae6bea2a44b.png)

:heavy_exclamation_mark: **Regras de negócio**

* Podem ser solicitadas permissões de acesso à câmera e ao local de armazenamento do aparelho no momento de se registrar a assinatura. Caso essas permissões não sejam dadas, a captura da assinatura para a conclusão da entrega não poderá ser realizada;
* Uma vez que um entrega tenha sido concluída, os botões **"Informar Problemas"** e **Confirmar Entrega** ficam desabilitados pois não há mais necessidade do uso dessas funções.

# :rocket: Seção "Meu Perfil"

Essa área tem por objetivo exibir os dados do entregador bem como permitir que seja efetuada a saída do sistema, através do botão "Logout".

Podemos observar a aparência dessa área na figura abaixo

![Screenshot_20200414-121632](https://user-images.githubusercontent.com/58818002/79282558-e5d95180-7e8b-11ea-81c5-39b8af7c9b00.png)

Nessa área são exibidas as informações de Nome, Email e a data de cadastro do entregador no Sistema Fastfeet.

Com isso está concluída a descrição do módulo Mobile do Sistema Fastfeet.

---
Elaborado, criado e editado por **Sandro de Oliveira Damasceno** :space_invader:   [github!](https://github.com/SDamasceno-Dev) :octocat:
