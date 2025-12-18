import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Título da tarefa', example: 'Comprar leite' })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Descrição detalhada da tarefa', example: 'Ir ao supermercado e comprar leite integral' })
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: TaskStatus, description: 'Status da tarefa', example: TaskStatus.ABERTO })
  status?: TaskStatus;
}
