import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import Joi from 'joi';

@Module({
  imports: [AuthModule, PostModule, ConfigModule.forRoot({
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
  }), PostModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
