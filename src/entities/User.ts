import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  constructor(firstName: string, lastName: string, age: number, email: string) {
    this.id = new Date().getMilliseconds().toString();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;
}
