#! /usr/bin/env node  


class Student {
    private static idCounter: number = 10000;
    public id: number;
    public name: string;
    private courses: string[] = [];
    private balance: number = 0;

    constructor(name: string) {
        this.name = name;
        this.id = Student.generateId();
    }

    private static generateId(): number {
        return this.idCounter++;
    }

    enroll(course: string, courseFee: number): void {
        this.courses.push(course);
        this.balance += courseFee;
    }

    viewBalance(): number {
        return this.balance;
    }

    payTuition(amount: number): void {
        this.balance -= amount;
    }

    showStatus(): void {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}

class StudentManagementSystem {
    private students: Student[] = [];

    addStudent(name: string): Student {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }

    enrollStudent(studentId: number, course: string, courseFee: number): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.enroll(course, courseFee);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    viewStudentBalance(studentId: number): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            console.log(`Balance for student ID ${studentId}: $${student.viewBalance()}`);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    payStudentTuition(studentId: number, amount: number): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.payTuition(amount);
            console.log(`Paid $${amount} for student ID ${studentId}. New balance: Rs.${student.viewBalance()}`);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    showStudentStatus(studentId: number): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.showStatus();
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }
}

// Example usage
const sms = new StudentManagementSystem();
const student1 = sms.addStudent("Sifra");
const student2 = sms.addStudent("Sara");

sms.enrollStudent(student1.id, "Math 101", 500);
sms.enrollStudent(student1.id, "History 101", 300);

sms.enrollStudent(student2.id, "Science 101", 400);

sms.viewStudentBalance(student1.id);
sms.payStudentTuition(student1.id, 200);
sms.showStudentStatus(student1.id);

sms.showStudentStatus(student2.id);
