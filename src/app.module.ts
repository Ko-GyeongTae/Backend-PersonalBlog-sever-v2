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
    host: process.env.DATABASE_HOST,
    port: 27017,
    database: process.env.DATABASE_NAME,
    entities: ["src/entity/*.*"],
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    logging: true,
    synchronize: true,
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
