# API Minimal - Fórmula 1 com Fastify

Esta é uma API minimalista criada para fornecer dados sobre equipes e pilotos de Fórmula 1. O projeto foi desenvolvido utilizando **Fastify**, um framework web de alta performance para Node.js, e **TypeScript** para garantir a tipagem e a qualidade do código.

## ✨ Recursos Principais

- **Framework Rápido**: Construído com [Fastify](https://www.fastify.io/) para garantir respostas de baixa latência e alta performance.
- **TypeScript**: Código totalmente tipado para maior robustez, manutenibilidade e melhor experiência de desenvolvimento.
- **CORS Configurado**: Utiliza o plugin `@fastify/cors` para permitir requisições de qualquer origem (`*`), facilitando a integração com aplicações front-end.
- **Ambiente de Desenvolvimento Moderno**: Usa `tsx` para execução de arquivos TypeScript em tempo real e com hot-reload, agilizando o desenvolvimento.
- **Build Otimizado**: Emprega `tsup` para compilar o código TypeScript para JavaScript otimizado para produção.

## ⚙️ Endpoints da API

A API fornece os seguintes endpoints:

### Times

#### `GET /times`
Retorna uma lista de todos os times de Fórmula 1.

**Exemplo de Resposta (200 OK):**
```json
{
  "times": [
    { "id": 1, "name": "Ferrari" },
    { "id": 2, "name": "Mercedes" },
    { "id": 3, "name": "Red Bull" }
  ]
}
```

### Corredores

#### `GET /corredores`
Retorna uma lista de todos os corredores.

**Exemplo de Resposta (200 OK):**
```json
{
  "corredores": [
    { "id": 1, "name": "Senna", "time": "Ferrari" },
    { "id": 2, "name": "Hamilton", "time": "Mercedes" },
    { "id": 3, "name": "Verstappen", "time": "Red Bull" }
  ]
}
```

#### `GET /corredores/:id`
Retorna um corredor específico com base no seu `id`.

**Parâmetros:**
- `id` (integer): O ID do corredor.

**Exemplo de Resposta (200 OK):**
```json
{
  "corredor": {
    "id": 3,
    "name": "Verstappen",
    "time": "Red Bull"
  }
}
```

**Exemplo de Resposta de Erro (404 Not Found):**
```json
{
  "error": "Corredor não encontrado"
}
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (ou um gerenciador de pacotes de sua preferência como Yarn ou pnpm)

### 1. Instalação

Clone o repositório e instale as dependências do projeto:
```bash
# Clone o repositório (se ainda não o fez)
# git clone https://github.com/ericdepaula/Minimal-api-Formula-1.git

# Navegue até a pasta do projeto
# cd minimal-api-formula1

# Instale as dependências
npm install
```

### 2. Executando em Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com recarregamento automático ao salvar (`watch mode`):
```bash
npm run start:watch
```
O servidor estará disponível em `http://localhost:3000` (ou na porta definida na variável de ambiente `PORT`).

### 3. Build para Produção

Para compilar o código TypeScript para JavaScript:
```bash
npm run dist
```
Os arquivos compilados serão gerados na pasta `dist`.

### 4. Executando em Produção

Após realizar o build, inicie o servidor com o script de produção:
```bash
npm run start:dist
```
