"use strict";
// Skill 1: Typed Variables & Functions
// Student Profile
const studentName = "sana";
const studentAge = 25;
const isEnrolled = true;
const describeStudent = (name, age) => {
    return `${name} is ${age} years old.`;
};
console.log(describeStudent(studentName, studentAge));
// Greeting with Options
const formatGreeting = (name, formal) => {
    if (formal) {
        return `Good day, ${name}.`;
    }
    return `Hi ${name}!`;
};
console.log(formatGreeting("sana", true));
console.log(formatGreeting("sana"));