import { Module } from '@nestjs/common';
import { CrawlService } from './crawl.service';
import { CrawlController } from './crawl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/entity/Profile.entity';
import { Repo } from 'src/entity/Repo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, Repo])],
  providers: [CrawlService],
  controllers: [CrawlController]
})
export class CrawlModule {}
