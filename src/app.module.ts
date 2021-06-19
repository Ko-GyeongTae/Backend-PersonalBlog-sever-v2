import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlModule } from './crawl/crawl.module';
import Joi from 'joi';

@Module({
  imports: [CrawlModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV,
    isGlobal: true,
    /*validationSchema: Joi.object({
      DB_HOST:Joi.string().required(),
      DB_PORT:Joi.number().required(),
      DB_USERNAME:Joi.string().required(),
      DB_PASSWORD:Joi.string().required(),
      NODE_PORT:Joi.number().required(),
      JWT_SECRET:Joi.string().required(),
    }),*/
  }), 
  TypeOrmModule.forRoot({
    type: 'mongodb',
    url:
      `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PASSWORD}`,
    entities: [__dirname + '**/**.entity{.ts,.js}'],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
