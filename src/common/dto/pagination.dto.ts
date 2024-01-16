import { IsOptional, Min, IsPositive, IsNumber } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;
  @IsOptional()
  @IsPositive()
  offset?: number;
}
