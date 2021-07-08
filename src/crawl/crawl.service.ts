import { Injectable, Logger } from '@nestjs/common';
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
    private logger = new Logger();

    getProfile():Promise<object>{
        this.logger.log(`[CRAWL] Request of Profie`);
        return this.profileRepository.find();
    }

    async getByLanguage(params):Promise<object>{
        const obj = await this.repoRepository.find(
            {
                where: {
                    language: {$eq: params.lang}
                },
                order: {
                    created_at: 'DESC'
                }
            }
        );
        this.logger.log(`[CRAWL] Request of Repositories find by language`);
        return obj;
    }

    async getByCategory(params):Promise<object>{
        const obj = await this.repoRepository.find(
            {
                where: {
                    category: {$eq: params.category}
                },
                order: {
                    created_at: 'DESC'
                }
            }
        );
        this.logger.log(`[CRAWL] Request of Repositories find by category`);
        return obj;
    }
}
