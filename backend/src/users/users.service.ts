import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UsersService {
    private users = [];

    create(createUserDto: CreateUserDto) {
        const newUser = { id: Date.now().toString(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }

    findAll() {
        return this.users;
    }

    findOne(id: string) {
        return this.users.find(user => user.id === id);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex > -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
            return this.users[userIndex];
        }
        return null;
    }

    remove(id: string) {
        this.users = this.users.filter(user => user.id !== id);
        return { deleted: true };
    }
}