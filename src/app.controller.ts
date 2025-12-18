import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Informações da API', description: 'Retorna informações gerais sobre a API e versão' })
  @ApiResponse({ status: 200, description: 'Informações retornadas com sucesso.' })
  @Get()
  getInfo() {
    return this.appService.getInfo();
  }
}
