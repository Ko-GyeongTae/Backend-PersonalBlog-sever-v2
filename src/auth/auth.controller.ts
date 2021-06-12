import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}
    
    @Post('login')
    logIn(
        @Req() request: Request,
        @Res() response: Response
    ): object {
        return this.authService.login(request, response);
    }
}
