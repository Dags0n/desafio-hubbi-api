import { IsOptional, IsNumber, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { enumStatusVenda } from '../enums/enumStatusVenda';
import { CreateItemVendaDto } from './create-item-venda.dto';

export class UpdateVendaDto {
  @IsOptional()
  @IsNumber()
  valorTotal?: number;

  @IsOptional()
  @IsEnum(enumStatusVenda)
  status?: enumStatusVenda;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateItemVendaDto)
  itens?: CreateItemVendaDto[];
}
