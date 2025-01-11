import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity'; 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  // Update with your MySQL host
      port: 3306,         // Update if necessary
      username: 'root',   // Your MySQL username
      password: '', // Your MySQL password
      database: 'student_db', // Your database name
      entities: [Student],
      synchronize: true,  // Don't use in production (helps with auto-syncing the DB schema)
    }),
    StudentModule,
  ],
})
export class AppModule {}
