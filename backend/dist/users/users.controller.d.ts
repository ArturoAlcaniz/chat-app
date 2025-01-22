import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
