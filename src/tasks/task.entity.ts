import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identificador da tarefa', type: Number, example: 1 })
  id: number;

  @Column()
  @ApiProperty({ description: 'Título da tarefa', example: 'Comprar leite' })
  title: string;

  @Column()
  @ApiProperty({ description: 'Descrição detalhada da tarefa', example: 'Ir ao supermercado e comprar leite integral' })
  description: string;

  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  @ApiProperty({
    description: 'Status da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  status: TaskStatus;

  @CreateDateColumn()
  @ApiProperty({ description: 'Data de criação', type: String, example: '2025-12-18T12:00:00.000Z' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Data da última atualização', type: String, example: '2025-12-18T12:00:00.000Z' })
  updatedAt: Date;
}
