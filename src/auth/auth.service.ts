import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user to the database
    return { email, hashedPassword };
  }

  async login(email: string, password: string): Promise<string> {
    const user = { email, password }; // Replace with database fetch
    if (user && (await bcrypt.compare(password, user.password))) {
      return this.jwtService.sign({ email });
    }
    throw new Error('Invalid credentials');
  }
}
