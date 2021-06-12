import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
//import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    //PassportModule,
    JwtModule.register({
      secret: 'test',
      signOptions: {expiresIn: '3h'}
    })
  ],
  controllers: [AuthController]
})
export class AuthModule {}
