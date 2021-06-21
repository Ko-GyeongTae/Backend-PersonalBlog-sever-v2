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

    getProfile():Promise<object>{
        return this.profileRepository.find();
    }

    async getByLanguage(params):Promise<object>{
        console.log(params.lang);
        const obj = await this.repoRepository.find(
            {
                where: {
                    language: {$eq: params.lang}
                }
            }
        );
        console.log(obj);
        return obj;
    }
}
