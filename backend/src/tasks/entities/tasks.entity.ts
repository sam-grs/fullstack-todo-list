import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tb_tasks' })
export class Tasks {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false, length: 100 })
    title: string

    @Column({ nullable: false, length: 1000 })
    about: string

    @Column({ nullable: false })
    status: string
}
