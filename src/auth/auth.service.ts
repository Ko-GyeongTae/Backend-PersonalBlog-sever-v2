import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(req, res): object{
        console.log(req);
        return {
            'statusCode': 200,
            'accessToken' : 'token'
        };
    }
}
