# 2025-3-atividades-03-api-swagger
Atividade sobre documentação de API com NestJS e Swagger

## 📋 Descrição

Esta atividade tem como objetivo aplicar conhecimentos de documentação de APIs REST utilizando **Swagger/OpenAPI** em um projeto NestJS. Você irá documentar endpoints, entidades e DTOs de uma API de gerenciamento de tarefas (TODO list).

## 🎯 Objetivos de Aprendizagem

- Compreender a importância da documentação de APIs
- Aplicar decorators do `@nestjs/swagger` para documentar endpoints
- Documentar schemas de entidades e DTOs
- Configurar o Swagger UI no NestJS
- Gerar documentação interativa e autodescritiva

## 🚀 Tecnologias Utilizadas

- **NestJS** - Framework Node.js para construção de APIs
- **Swagger/OpenAPI** - Especificação para documentação de APIs
- **TypeORM** - ORM para banco de dados
- **SQLite** - Banco de dados para desenvolvimento
- **Class Validator** - Validação de dados
- **Class Transformer** - Transformação de objetos

## 📚 Estrutura do Projeto

O projeto possui os seguintes componentes principais:

### Entidade
- **Task** (`src/tasks/task.entity.ts`) - Entidade de tarefa com os campos:
  - `id` (number) - Identificador único
  - `title` (string) - Título da tarefa
  - `description` (string) - Descrição da tarefa
  - `status` (enum) - Status da tarefa (aberto, fazendo, finalizado)
  - `createdAt` (Date) - Data de criação
  - `updatedAt` (Date) - Data de atualização

### DTOs (Data Transfer Objects)
- **CreateTaskDto** (`src/tasks/dto/create-task.dto.ts`) - DTO para criação de tarefas
- **UpdateTaskDto** (`src/tasks/dto/update-task.dto.ts`) - DTO para atualização de tarefas

### Endpoints da API
A API possui os seguintes endpoints:

#### Raiz
- `GET /` - Retorna informações da API (status, versão, descrição)

#### Tarefas
- `GET /tasks` - Lista todas as tarefas
- `GET /tasks/:id` - Busca uma tarefa específica por ID
- `POST /tasks` - Cria uma nova tarefa
- `PUT /tasks/:id` - Atualiza uma tarefa existente
- `DELETE /tasks/:id` - Remove uma tarefa

## ✅ Atividades (Checklist)

### 1️⃣ Preparação do Ambiente
- [x] **Fazer fork deste repositório** para sua conta do GitHub
- [x] Clonar o fork para sua máquina local
- [x] Instalar as dependências com `npm install`
- [x] Verificar se o projeto está funcionando com `npm run start:dev`
- [x] Acessar a API em `http://localhost:3000` e verificar o endpoint raiz

### 2️⃣ Configuração do Swagger
- [x] Abrir o arquivo `src/main.ts`
- [x] Importar os módulos necessários do `@nestjs/swagger`:
  - `SwaggerModule`
  - `DocumentBuilder`
- [x] Criar a configuração do Swagger usando `DocumentBuilder`:
  - Definir título: "API de Tarefas (TODO List)"
  - Definir descrição: "API para gerenciamento de tarefas da turma Infoweb 2025"
  - Definir versão: "1.0"
  - Adicionar tag: "tasks"
- [x] Criar o documento Swagger com `SwaggerModule.createDocument()`
- [x] Configurar a rota de acesso ao Swagger UI (sugestão: `/api-docs`)
- [x] Testar o acesso ao Swagger UI em `http://localhost:3000/api-docs`
- [x] Guardar as modificações com `git commit -m "configurado o ambiente swagger"`

### 3️⃣ Documentação da Entidade Task
- [x] Abrir o arquivo `src/tasks/task.entity.ts`
- [x] Importar o decorator `@ApiProperty` do `@nestjs/swagger`
- [x] Adicionar `@ApiProperty()` para o campo `id`:
  - Exemplo: description, type, etc.
- [x] Adicionar `@ApiProperty()` para o campo `title`:
  - Adicionar description, example
- [x] Adicionar `@ApiProperty()` para o campo `description`:
  - Adicionar description, example
- [x] Adicionar `@ApiProperty()` para o campo `status`:
  - Adicionar enum, description, default, example
- [x] Adicionar `@ApiProperty()` para o campo `createdAt`:
  - Adicionar description, type
- [x] Adicionar `@ApiProperty()` para o campo `updatedAt`:
  - Adicionar description, type
- [x] Verificar a documentação da entidade no Swagger UI
- [x] Guardar as modificações com `git commit -m "documentado as entidades"`

### 4️⃣ Documentação do CreateTaskDto
- [x] Abrir o arquivo `src/tasks/dto/create-task.dto.ts`
- [x] Importar o decorator `@ApiProperty` do `@nestjs/swagger`
- [x] Adicionar `@ApiProperty()` para o campo `title`:
  - Adicionar description, example, minLength, maxLength
- [x] Adicionar `@ApiProperty()` para o campo `description`:
  - Adicionar description, example
- [x] Adicionar `@ApiPropertyOptional()` para o campo `status`:
  - Adicionar enum, description, default, example
  - Usar `@ApiPropertyOptional` pois o campo é opcional
- [x] Verificar a documentação do DTO no Swagger UI (schema CreateTaskDto)

### 5️⃣ Documentação do UpdateTaskDto
- [x] Abrir o arquivo `src/tasks/dto/update-task.dto.ts`
- [x] Importar `@ApiPropertyOptional` do `@nestjs/swagger`
- [x] Adicionar `@ApiPropertyOptional()` para o campo `title`:
  - Adicionar description, example
- [x] Adicionar `@ApiPropertyOptional()` para o campo `description`:
  - Adicionar description, example
- [x] Adicionar `@ApiPropertyOptional()` para o campo `status`:
  - Adicionar enum, description, example
- [x] Verificar a documentação do DTO no Swagger UI (schema UpdateTaskDto)
- [x] Guardar as modificações com `git commit -m "documentado os DTOs"`

### 6️⃣ Documentação do Endpoint Raiz
- [ ] Abrir o arquivo `src/app.controller.ts`
- [ ] Importar decorators do `@nestjs/swagger`:
  - `@ApiTags`
  - `@ApiOperation`
  - `@ApiResponse`
- [ ] Adicionar `@ApiTags('root')` no controller
- [ ] Documentar o endpoint `GET /`:
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiResponse()` para status 200 com description
- [ ] Guardar as modificações com `git commit -m "documentado o endpoint raiz"`

### 7️⃣ Documentação dos Endpoints de Tarefas - Listar Todas
- [ ] Abrir o arquivo `src/tasks/tasks.controller.ts`
- [ ] Importar decorators do `@nestjs/swagger`:
  - `@ApiTags`
  - `@ApiOperation`
  - `@ApiResponse`
- [ ] Adicionar `@ApiTags('tasks')` no controller
- [ ] Documentar o endpoint `GET /tasks` (método `findAll`):
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiResponse()` para status 200 com description e type

### 8️⃣ Documentação dos Endpoints de Tarefas - Buscar por ID
- [ ] Documentar o endpoint `GET /tasks/:id` (método `findOne`):
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiParam()` para o parâmetro `id`
  - Adicionar `@ApiResponse()` para status 200 com description e type
  - Adicionar `@ApiResponse()` para status 404 com description

### 9️⃣ Documentação dos Endpoints de Tarefas - Criar
- [ ] Documentar o endpoint `POST /tasks` (método `create`):
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiBody()` com type CreateTaskDto
  - Adicionar `@ApiResponse()` para status 201 com description e type
  - Adicionar `@ApiResponse()` para status 400 com description

### 🔟 Documentação dos Endpoints de Tarefas - Atualizar
- [ ] Documentar o endpoint `PUT /tasks/:id` (método `update`):
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiParam()` para o parâmetro `id`
  - Adicionar `@ApiBody()` com type UpdateTaskDto
  - Adicionar `@ApiResponse()` para status 200 com description e type
  - Adicionar `@ApiResponse()` para status 404 com description
  - Adicionar `@ApiResponse()` para status 400 com description

### 1️⃣1️⃣ Documentação dos Endpoints de Tarefas - Deletar
- [ ] Documentar o endpoint `DELETE /tasks/:id` (método `remove`):
  - Adicionar `@ApiOperation()` com summary e description
  - Adicionar `@ApiParam()` para o parâmetro `id`
  - Adicionar `@ApiResponse()` para status 204 com description
  - Adicionar `@ApiResponse()` para status 404 com description
- [ ] Guardar as modificações com `git commit -m "documentado o endpoint de tarefas(\tasks)"`

### 1️⃣2️⃣ Testes e Validação Final
- [ ] Executar `npm run start:dev` e acessar o Swagger UI
- [ ] Verificar se todos os endpoints estão documentados
- [ ] Verificar se todos os schemas (DTOs e entidades) estão documentados
- [ ] Testar cada endpoint através do Swagger UI:
  - Testar GET / (endpoint raiz)
  - Testar POST /tasks (criar tarefa)
  - Testar GET /tasks (listar todas)
  - Testar GET /tasks/:id (buscar por ID)
  - Testar PUT /tasks/:id (atualizar tarefa)
  - Testar DELETE /tasks/:id (deletar tarefa)
- [ ] Verificar se as descrições estão claras e os exemplos são adequados
- [ ] Executar os testes com `npm test` para garantir que nada quebrou
- [ ] Fazer commit das alterações
- [ ] Fazer push para o repositório fork
- [ ] Criar um Pull Request (opcional, para revisão)


- [ ] Publicar modificações no repositório com `git push`

## 📖 Recursos Úteis

### Documentação Oficial
- [NestJS Swagger/OpenAPI](https://docs.nestjs.com/openapi/introduction)
- [Swagger/OpenAPI Specification](https://swagger.io/specification/)
- [Class Validator Decorators](https://github.com/typestack/class-validator#validation-decorators)

### Decorators do @nestjs/swagger

#### Para Controllers
- `@ApiTags(tag: string)` - Agrupa endpoints por tag
- `@ApiOperation({ summary, description })` - Descreve a operação
- `@ApiResponse({ status, description, type })` - Documenta respostas
- `@ApiParam({ name, description, type })` - Documenta parâmetros de rota
- `@ApiBody({ type, description })` - Documenta o corpo da requisição

#### Para DTOs e Entidades
- `@ApiProperty({ description, example, type, enum, etc })` - Documenta propriedades obrigatórias
- `@ApiPropertyOptional({ description, example, etc })` - Documenta propriedades opcionais

### Exemplos de Uso

#### Exemplo de Configuração do Swagger (main.ts)
```typescript
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Dentro da função bootstrap()
const config = new DocumentBuilder()
  .setTitle('Título da API')
  .setDescription('Descrição da API')
  .setVersion('1.0')
  .addTag('tag-name')
  .build();
  
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);
```

#### Exemplo de Documentação de Controller
```typescript
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  @Get()
  @ApiOperation({ summary: 'Listar todas as tarefas' })
  @ApiResponse({ status: 200, description: 'Lista de tarefas retornada com sucesso' })
  findAll() {
    // ...
  }
}
```

#### Exemplo de Documentação de DTO
```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    description: 'Status da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
```

## 🏃 Como Executar o Projeto

### Instalação
```bash
npm install
```

### Executar em modo de desenvolvimento
```bash
npm run start:dev
```

### Acessar a aplicação
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api-docs (após configurar)

### Executar testes
```bash
# Testes unitários
npm test

# Testes e2e
npm run test:e2e

# Testes com coverage
npm run test:cov
```

## 📝 Critérios de Avaliação

- ✅ Fork do repositório realizado
- ✅ Swagger configurado corretamente no `main.ts`
- ✅ Todos os endpoints documentados com `@ApiOperation`, `@ApiResponse`, etc.
- ✅ Entidade Task documentada com `@ApiProperty`
- ✅ DTOs (CreateTaskDto e UpdateTaskDto) documentados
- ✅ Swagger UI acessível e funcional
- ✅ Documentação clara e com exemplos adequados
- ✅ Testes continuam passando após as alterações
- ✅ Código commitado e enviado para o fork

## 💡 Dicas

1. **Ordem de execução**: Siga a ordem das atividades para facilitar o aprendizado
2. **Teste frequentemente**: Após cada etapa, verifique o Swagger UI para ver as mudanças
3. **Exemplos realistas**: Use exemplos que fazem sentido para uma TODO list
4. **Documentação completa**: Não se esqueça de documentar status codes de erro (400, 404, etc.)
5. **Enum no Swagger**: Para enums, use a propriedade `enum` no `@ApiProperty`
6. **Consulte a documentação**: Use os recursos úteis listados acima quando tiver dúvidas

## 🤝 Contribuindo

Se encontrar problemas ou tiver sugestões de melhoria, abra uma issue ou pull request.

## 📄 Licença

Este projeto está sob a licença UNLICENSED - veja o arquivo LICENSE para detalhes.
