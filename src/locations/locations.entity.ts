import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  building: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  locationName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  locationNumber: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  area: string;

  @Column({ nullable: true })
  @IsOptional()
  parentId: number;

  @ManyToOne(() => Location, (location) => location.children)
  parent: Location;

  @OneToMany(() => Location, (location) => location.parent)
  children: Location[];
}
