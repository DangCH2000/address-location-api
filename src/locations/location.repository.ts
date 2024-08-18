import { EntityRepository, Repository } from 'typeorm';
import { Location } from './locations.entity';

@EntityRepository(Location)
export class LocationRepository extends Repository<Location> {}
