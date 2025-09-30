import type { User } from '../models/User';
type UserPublic = Pick<User, 'id' | 'name' | 'email'>;
export declare class UserService {
    private users;
    registerUser(user: User): void;
    getUserDetails(id: string): UserPublic | undefined;
    getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
}
export {};
//# sourceMappingURL=UserService.d.ts.map