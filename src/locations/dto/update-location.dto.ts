import { IsOptional, IsString } from 'class-validator';

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  building?: string;

  @IsOptional()
  @IsString()
  locationName?: string;

  @IsOptional()
  @IsString()
  locationNumber?: string;

  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  parentId?: number;
}
