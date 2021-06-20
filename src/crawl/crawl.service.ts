import { Injectable } from '@nestjs/common';
import { Profile } from 'src/entity/Profile.entity';
import { Repo } from 'src/entity/Repo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrawlService {
    constructor(
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>,
        @InjectRepository(Repo)
        private readonly repoRepository: Repository<Repo>
    ) { }

    getAll():Promise<object>{
        return this.profileRepository.find();
    }
}
