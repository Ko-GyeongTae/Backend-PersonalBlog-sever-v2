import { Controller, Get } from '@nestjs/common';
import { CrawlService } from './crawl.service';

@Controller('crawl')
export class CrawlController {
    constructor(
        private readonly crawlService: CrawlService
    ) { }

    @Get('test')
    getAll():Promise<object>{
        return this.crawlService.getAll();
    }
}
