import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): {
        username: string;
        email: string;
        password: string;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateUserDto: UpdateUserDto): any;
    remove(id: string): {
        deleted: boolean;
    };
}
