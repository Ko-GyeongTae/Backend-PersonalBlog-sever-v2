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

    @Get('language/:lang')
    getByLanguage(@Param() params): Promise<object>{
        return this.crawlService.getByLanguage(params);
    }

    @Get('category/:category')
    getByCategory(@Param() params): Promise<object>{
        return this.crawlService.getByCategory(params);
    }
}
