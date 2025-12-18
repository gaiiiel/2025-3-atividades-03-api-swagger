import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Listar tarefas', description: 'Retorna todas as tarefas cadastradas' })
  @ApiResponse({ status: 200, description: 'Lista de tarefas retornada com sucesso', type: Task, isArray: true })
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @ApiOperation({ summary: 'Buscar tarefa por ID', description: 'Retorna uma tarefa pelo seu identificador' })
  @ApiParam({ name: 'id', description: 'ID da tarefa', type: Number })
  @ApiResponse({ status: 200, description: 'Tarefa encontrada', type: Task })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar tarefa', description: 'Cria uma nova tarefa com os dados fornecidos' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso', type: Task })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar tarefa', description: 'Atualiza os dados de uma tarefa existente' })
  @ApiParam({ name: 'id', description: 'ID da tarefa', type: Number })
  @ApiBody({ type: UpdateTaskDto })
  @ApiResponse({ status: 200, description: 'Tarefa atualizada com sucesso', type: Task })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover tarefa', description: 'Remove uma tarefa pelo seu ID' })
  @ApiParam({ name: 'id', description: 'ID da tarefa', type: Number })
  @ApiResponse({ status: 204, description: 'Tarefa removida com sucesso' })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.remove(id);
  }
}
