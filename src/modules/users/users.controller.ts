import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.getProfile(id);
    console.log(user);
    return user;
  }
}
