import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './locations.controller';
import { LocationService } from './locations.service';
import { Location } from './locations.entity';
import { LocationRepository } from './location.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Location, LocationRepository])],
  controllers: [LocationController],
  providers: [LocationService],
  exports: [LocationService],
})
export class LocationModule {}
