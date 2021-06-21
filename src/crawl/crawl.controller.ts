import { Controller, Get, Param } from '@nestjs/common';
import { CrawlService } from './crawl.service';

@Controller('crawl')
export class CrawlController {
    constructor(
        private readonly crawlService: CrawlService
    ) { }

    @Get('profile')
    getProfile():Promise<object>{
        return this.crawlService.getProfile();
    }

    @Get(':lang')
    getByLanguage(@Param() params): Promise<object>{
        return this.crawlService.getByLanguage(params);
    }
}
