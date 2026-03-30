# Reverta iFacil

Aplicativo mobile para agendamento e gerenciamento de coletas de materiais reciclaveis, conectando usuarios a ecopontos proximos.

## Sobre o Projeto

O **Reverta iFacil** e uma plataforma mobile que facilita o descarte consciente de residuos reciclaveis. O usuario pode localizar ecopontos proximos no mapa, agendar coletas de materiais, acompanhar o status das coletas e gerenciar seu perfil — tudo de forma simples e intuitiva.

## Funcionalidades

### Autenticacao
- Cadastro com captura automatica de localizacao (GPS)
- Login com email e senha
- Recuperacao de senha via codigo de verificacao por email
- Sessao persistente com refresh token

### Mapa e Ecopontos
- Mapa interativo (Google Maps) com marcadores dos ecopontos
- Busca de ecopontos por CEP ou localizacao atual
- Tela de detalhes do ecoponto com horario de funcionamento, materiais aceitos, telefone e imagens

### Agendamento de Coletas
- Selecao de data via calendario
- Escolha de materiais reciclaveis
- Estimativa de peso
- Campo de observacoes

### Gerenciamento de Coletas
- Listagem com filtros por status (Pendente, Em Andamento, Concluida, Cancelada)
- Detalhes da coleta
- Reagendamento e cancelamento
- Pull-to-refresh

### Dashboard (Home)
- Saudacao com nome do usuario
- Cards de acesso rapido: mapa, coletas em andamento, historico, agendamentos
- Botao de nova coleta

### Perfil e Configuracoes
- Visualizacao e edicao de dados pessoais e endereco
- Logout

## Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React Native 0.79 + React 19 |
| Linguagem | TypeScript |
| Navegacao | React Navigation 7 (Stack + Bottom Tabs) |
| Estado servidor | TanStack React Query 5 |
| Estado local | Zustand |
| Formularios | React Hook Form + Zod |
| Estilizacao | @shopify/restyle |
| HTTP | Axios |
| Mapas | react-native-maps |
| Geolocalizacao | react-native-geolocation-service |
| Armazenamento | react-native-mmkv |
| Backend/Storage | Firebase (Firestore + Storage) |
| Calendario | react-native-calendars |
| Imagens | react-native-image-picker / image-crop-picker |

## Arquitetura

O projeto segue **Clean Architecture** com separacao por dominio:

```
src/
├── api/              # Configuracao do Axios (interceptors, refresh token)
├── assets/           # Imagens, icones e fontes
├── Brand/            # Logo e identidade visual
├── components/       # Componentes reutilizaveis (Button, TextInput, Screen, Toast, etc.)
├── domain/           # Logica de negocio por dominio
│   ├── Auth/         # Autenticacao (types, api, adapter, service, useCases)
│   ├── Collect/      # Coletas
│   ├── EcoPoint/     # Ecopontos
│   └── User/         # Usuario
├── form/             # Utilitarios de formulario (validacao async)
├── hooks/            # Hooks customizados
├── routes/           # Navegacao (AuthStack, AppStack, TabNavigator)
├── screens/          # Telas organizadas por contexto (auth/ e app/)
├── services/         # Servicos de infraestrutura (storage, auth credentials, toast)
├── theme/            # Sistema de design (cores, espacamentos, tipografia)
└── utils/            # Funcoes utilitarias
```

Cada dominio segue o fluxo:

```
API Response → Adapter → Service → useCase (React Query hook) → Componente
```

## Como Executar

### Pre-requisitos

- Node.js >= 18
- Yarn 4
- Ambiente React Native configurado ([guia oficial](https://reactnative.dev/docs/set-up-your-environment))

### Instalacao

```bash
yarn install
```

### Android

```bash
yarn android
```

### iOS

```bash
bundle install
bundle exec pod install
yarn ios
```

## Scripts

| Comando | Descricao |
|---|---|
| `yarn start` | Inicia o Metro bundler |
| `yarn android` | Build e execucao no Android |
| `yarn ios` | Build e execucao no iOS |
| `yarn lint` | Executa o ESLint |
| `yarn test` | Executa os testes com Jest |
