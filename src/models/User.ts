 type Role = 'customer' | 'admin';

 interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export type { User, Role };