//Call

export const course = {
    addStudents(studentName) {
        this.students.push(studentName);
        console.log(`${studentName} added to
        ${this.name} course`);
    },
    date: '12/12/2021'
};

export const english = {
    name: "english course",
    description: "this is good course",
    students: []
};

export const math = {
    name: "math course",
    description: "this is very good course",
    students: []
};


export const addStudents = course.addStudents;

addStudents.call(english,'Sebas');
// addStudents.call(math, "Dani")
// addStudents.call(english, "asaf")
// addStudents.call(math, "Ron")
// console.log(math);
// console.log(english);



// apply
addStudents.apply(math, ['Fernando'])

//bind

const addStudent = addStudents.bind(math);
addStudent('Daniel');