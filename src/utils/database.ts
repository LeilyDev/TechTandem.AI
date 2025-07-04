
import usersData from '../data/users.json';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  university?: string;
  career?: string;
  interests: string[];
}

class DatabaseSimulator {
  private users: User[] = usersData.users;

  registerUser(userData: Omit<User, 'id'>): User | null {
    // Verificar si el email ya existe
    const existingUser = this.users.find(user => user.email === userData.email);
    if (existingUser) {
      return null; // Usuario ya existe
    }

    const newUser: User = {
      ...userData,
      id: Date.now().toString()
    };

    this.users.push(newUser);
    return newUser;
  }

  loginUser(email: string, password: string): User | null {
    return this.users.find(user => user.email === email && user.password === password) || null;
  }

  getUserById(id: string): User | null {
    return this.users.find(user => user.id === id) || null;
  }
}

export const database = new DatabaseSimulator();
