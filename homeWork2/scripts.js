// Tornike Shvangiradze

// Task 1

let sampleObject = {
    isItarable: false,
    sampleArray: [12, 63, 21, 34, 98, 57],
};

function LogOrNot(trueOrFalse) {
    let objArr = sampleObject.sampleArray;
    if(trueOrFalse){
        for (let i = 0; i < objArr.length; i++) {
            console.log(objArr[i]);
        }
    }else{
        console.log("provided array isn't itarable");
    }
};

LogOrNot(sampleObject.isItarable);

// Task 2

function checkPythagoras(a,b,c){
    console.log((a * a + b * b) === c * c || b * b === (c * c - a * a) || a * a === (c * c - b * b));
};

checkPythagoras(3, 4, 5);

// Task 3

const test3Arr = [2, 14, 25, 75, 11, 6];

function task3Fun(par) {

    let arrayLen = test3Arr.length;

    let minCount = 0;
    let maxCount = 0;

    let minNum;
    let maxNum;

    for(let i = 0; i < arrayLen; i++){
        for (let minI = 0; minI < arrayLen; minI++) {
            if (test3Arr[i] <= test3Arr[minI]) {
                minCount++;
            }else {
                minCount = 0;
            }
        }
        if (minCount === 6) {
            minNum = test3Arr[i];
        }
    }

    for (let i = 0; i < arrayLen; i++) {
        for (let maxI = 0; maxI < arrayLen; maxI++) {
            if (test3Arr[i] >= test3Arr[maxI]) {
                maxCount++;
            }else{
                maxCount = 0;
            }
        }
        if (maxCount >= 6) {
            maxNum = test3Arr[i];
        }
    }

    console.log(`min value is ${minNum} and Max value is ${maxNum}`);
}

task3Fun(test3Arr);

// Task 4

function fun4(par) {
    if (par > 0 && par < 90) {
        console.log("Acute angle");
    } else if (par == 90) {
        console.log("Right angle");
    } else if ((par > 90) & (par < 180)) {
        console.log("Obtuse angle");
    } else if (par == 180) {
        console.log("Straight angle");
    } else {
        console.log("Smth went wrong! Please enter arg again");
    }
};

fun4(0);

// Task 5

function checkStudentGrade() {
    let studentsArr = [{name: "student1", grade : 91}, {name: "student2", grade : 71}, {name: "student3", grade : 45}];

    let arrayLength = studentsArr.length;

    for(let i = 0; i < arrayLength; i++){
        if (studentsArr[i].grade >= 0 && studentsArr[i].grade <= 50){
            studentsArr[i].finalResult = "F";
        }else if (studentsArr[i].grade >= 51 && studentsArr[i].grade <= 60){
            studentsArr[i].finalResult = "E";
        }else if (studentsArr[i].grade >= 61 && studentsArr[i].grade <= 70){
            studentsArr[i].finalResult = "D";
        }else if (studentsArr[i].grade >= 71 && studentsArr[i].grade <= 80){
            studentsArr[i].finalResult = "C";
        }else if (studentsArr[i].grade >= 81 && studentsArr[i].grade <= 100){
            studentsArr[i].finalResult = "A";
        }
    }

    return studentsArr;
};

console.log(checkStudentGrade());