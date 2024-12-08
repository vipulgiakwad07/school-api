import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'your_password',
      database: 'school',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    AuthModule,
    StudentsModule,
  ],
})
export class AppModule {}
