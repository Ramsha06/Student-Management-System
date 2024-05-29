"use strict";
class Student {
    constructor(name) {
        this.courses = [];
        this.balance = 0;
        this.name = name;
        this.id = Student.generateId();
    }
    static generateId() {
        return this.idCounter++;
    }
    enroll(course, courseFee) {
        this.courses.push(course);
        this.balance += courseFee;
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
Student.idCounter = 10000;
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }
    enrollStudent(studentId, course, courseFee) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.enroll(course, courseFee);
        }
        else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }
    viewStudentBalance(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            console.log(`Balance for student ID ${studentId}: $${student.viewBalance()}`);
        }
        else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }
    payStudentTuition(studentId, amount) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.payTuition(amount);
            console.log(`Paid $${amount} for student ID ${studentId}. New balance: $${student.viewBalance()}`);
        }
        else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }
    showStudentStatus(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.showStatus();
        }
        else {
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
