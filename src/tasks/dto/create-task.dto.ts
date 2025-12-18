import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Título da tarefa', example: 'Comprar leite', minLength: 3, maxLength: 100 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição detalhada da tarefa', example: 'Ir ao supermercado e comprar leite integral' })
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional({
    enum: TaskStatus,
    description: 'Status da tarefa',
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  status?: TaskStatus;
}
