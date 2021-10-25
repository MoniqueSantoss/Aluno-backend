import { create } from 'domain';
import { Column , CreateDateColumn,Entity, PrimaryGeneratedColumn , UpdateDateColumn } from 'typeorm';

@Entity()

export class Students{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column()
    data_nascimento: string;

    @Column()
    endereco: string;

    @Column({
        default: true
    })
    matriculado: boolean;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}
