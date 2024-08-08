// utwórz typ Studenta

// utwórz funkcję generującą email studenta na podstawie indexu

// utwórz obiekt studenta wraz z typem

// wygeneruj i wyświetl email dla studenta

// skompiluj i uruchom kod

type Student = {
    firstName: string,
    lastName: string,
    index: number,
};


const createEmail = (student: Student): string => {
    return `${student.index}@student.pwr.edu.pl`;
};

const sampleStudent: Student = {
    firstName: "Robert",
    lastName: "Kubica",
    index: 123456,
};

console.log(createEmail(sampleStudent));
