function processGrades(students) {
    return students.map(s => {
        let avg = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
        return { name: s.name, average: avg, passed: avg >= 70 };
    });
}

let students = [
    { name: "Rahul", scores: [80, 70, 90] },
    { name: "Aman", scores: [50, 60, 65] }
];

console.log(processGrades(students));