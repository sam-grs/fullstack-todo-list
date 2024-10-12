import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

enum taskStatus {
    pending = 'pendente',
    completed = 'concluído',
}

@Entity({ name: 'tb_tasks' })
export class Tasks {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false, length: 100 })
    title: string

    @Column({ nullable: false, length: 1000 })
    about: string

    @Column({ type: 'enum', enum: taskStatus, default: taskStatus.pending })
    status: taskStatus
}
