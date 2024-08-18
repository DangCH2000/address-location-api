import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  building: string;

  @IsString()
  @IsNotEmpty()
  locationName: string;

  @IsString()
  @IsNotEmpty()
  locationNumber: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsString()
  parentId?: number;
}
