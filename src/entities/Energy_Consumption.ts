import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EnergyConsumption {
  constructor(userId: string, energy: number) {
    this.id = new Date().getMilliseconds().toString();
    this.userId = userId;
    this.energy = energy;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  energy: number;
}
