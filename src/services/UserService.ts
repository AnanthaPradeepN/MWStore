import type { User } from '../models/User';

type UserPublic = Pick<User, 'id' | 'name' | 'email'>;
type UserPrivate = Omit<User, 'role'>;

export class UserService {
  private users: Readonly<User[]> = [];

  registerUser(user: User) {
    this.users = [...this.users, user];
  }

  getUserDetails(id: string): UserPublic | undefined {
    return this.users.find(u => u.id === id);
  }

  getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
