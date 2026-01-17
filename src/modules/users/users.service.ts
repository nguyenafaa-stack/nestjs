import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(private repo: UserRepository) {}

  async createUser(data: any) {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new ConflictException('Email đã tồn tại!');
    return this.repo.create(data);
  }

  async getProfile(id: number) {
    return this.repo.findById(id);
  }
}
