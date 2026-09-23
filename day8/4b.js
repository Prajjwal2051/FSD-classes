// write a js programm to create an array of student obects convert thwir makrs to cgpa using the map method and sispaly the lis to f studemts grwater or equal to 9 and also show the total number of students with cgpa greater than or equal to 9 usinf gthe filter and reduce methods
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 95 },
    { name: "Eve", marks: 88 }
];

// Convert marks to CGPA using map method
const studentsWithCGPA = students.map(student => {
    return {
        name: student.name,
        cgpa: (student.marks / 10).toFixed(2) // Assuming CGPA is calculated as marks/10
    };
});

// Filter students with CGPA greater than or equal to 9
const highCGPAStudents = studentsWithCGPA.filter(student => student.cgpa >= 9);

// Display the list of students with CGPA >= 9
console.log("Students with CGPA >= 9:");
highCGPAStudents.forEach(student => {
    console.log(`${student.name}: ${student.cgpa}`);
});

// Count the total number of students with CGPA >= 9 using reduce method
const totalHighCGPAStudents = highCGPAStudents.reduce((count, student) => count + 1, 0);

console.log(`Total number of students with CGPA >= 9: ${totalHighCGPAStudents}`);       