import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { User } from 'src/users'

enum taskStatus {
    pending = 'pending',
    completed = 'completed',
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

    @UpdateDateColumn()
    date_time: Date

    @ManyToOne(() => User, (user) => user.tasks, {
        onDelete: 'CASCADE',
    })
    user: User
}
