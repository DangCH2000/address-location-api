import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Location } from './locations.entity';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() locationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.createLocation(locationDto);
  }

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationService.getAllLocations();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Location> {
    return this.locationService.getLocationById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() locationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.updateLocation(id, locationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.locationService.deleteLocation(id);
  }
}
