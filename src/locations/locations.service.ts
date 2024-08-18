import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationRepository } from './location.repository';
import { Location } from './locations.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationRepository)
    private readonly locationRepository: LocationRepository,
  ) {}

  async createLocation(locationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(locationDto);
    return await this.locationRepository.save(location);
  }

  async getAllLocations(): Promise<Location[]> {
    return await this.locationRepository.find();
  }

  async getLocationById(id: number): Promise<Location> {
    const location = await this.locationRepository.findOneBy({ id });
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  async updateLocation(id: number, locationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.getLocationById(id);
    Object.assign(location, locationDto);
    return await this.locationRepository.save(location);
  }

  async deleteLocation(id: number): Promise<void> {
    const result = await this.locationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
  }
}
