# To-Do List Full-Stack Application

**AVISO:** O servidor demora para carregar uns 5 minutos e fica inativo depois de 15 minutos sem uso. 
**Link do deploy web:** https://fullstack-todo-list-ten.vercel.app/

## Desafio de Desenvolvimento Full-Stack – To-Do List Node.js

### Descrição do Projeto
Este projeto é uma aplicação To-Do List desenvolvida como um desafio de desenvolvimento Full-Stack, utilizando Node.js com NestJS no backend e React no frontend. A aplicação permite a criação, atualização, listagem e remoção de tarefas, com autenticação via JWT e validação de dados. O backend foi implementado com integração ao MySQL e utiliza Redis para cache de dados, melhorando a performance. A aplicação está implantada em plataformas de nuvem, garantindo acessibilidade pública e segurança básica.

## Funcionalidades

### Backend com NestJS

A API desenvolvida com Node.js e NestJS permite as seguintes operações:

- [x] Adicionar tabela de tarefa e usuário
- [x] Atualizar o status de uma tarefa (pendente/completa)
- [x] Remover uma tarefa
- [x] Listar todas as tarefas
- [ ] Utilizar Redis para cachear os dados do backend e persistir eles com MySQL
- [x] Implementar validação de dados (class-validator e class-transform)
- [x] Implementar validação em tarefas e usuário 

### Frontend com React

O frontend, desenvolvido em React, oferece uma interface simples e interativa para o usuário. As funcionalidades incluem:


- [x] Adicionar uma nova tarefa
- [x] Editar tarefa
- [x] Atualizar o status de uma tarefa
- [x] Remover uma tarefa
- [x] Listar todas as tarefas
- [ ] Fazer upload de arquivos dentro do To-Do List
- [x] Adicionar autenticação no usuário
- [x] Adicionar validação nos formulários de usuário e tarefas

### Deploy e Cloud Computing

- [x] A aplicação está implantada em uma plataforma de nuvem pública.
- [x] A aplicação é acessível publicamente via HTTPS.
- [ ] Utilização de serviço de armazenamento em nuvem para gerenciar arquivos estáticos.

### Resolução de Problemas

Enfrentei dificuldades ao tentar implementar meu projeto na AWS e com Google Cloud. No momento implementei o deploy com render.

### Segurança

- [x] Implementação de medidas básicas de segurança, como sanitização de entradas para evitar injeção de código.
- [x] Autenticação via JWT para proteger as rotas de adicionar e remover tarefas.
- [ ] Utilização de HTTPS para garantir a segurança das comunicações.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v14+)
- MySQL
- Redis
- PNPM

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   
2. Clone o repositório:
   ```bash
   cd seu-repositorio
   pnpm install
3. Configure o arquivo .env com suas variáveis de ambiente, como a URL do banco de dados MySQL e a chave JWT.

4. Inicie o servidor:
    ```bash
   pnpm run dev
    
5. O frontend pode ser executado separadamente em outro terminal com:
   ```bash
   pnpm run dev
   
## Tecnologias Utilizadas

- Backend: Node.js, NestJS, MySQL, Redis
- Frontend: React, HTML, CSS, JavaScript
- Deploy: AWS, Vercel

