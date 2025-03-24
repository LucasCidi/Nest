import { IsDateString, IsEnum, IsOptional, IsString, isString, IsUUID, MaxLength, MinLength } from "class-validator";
import { UUID } from "crypto";

export enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}


export class TaskDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(300)
  description: string;

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: string;

  @IsDateString()
  expirationDate: Date;
}

export interface FindAllParameters {
  title: string;
  status: string;
}
