
// თორნიკე შვანგირაძის დავალება

// Task 1

let sisterName = "Ann";
let sisterAge = 28;

let brotherName = "Levan";
let brotherAge = 21;

let surplus = sisterAge - brotherAge;

function result (){
    if (surplus > 0) {
        console.log(`ანა ლევანიზე ${surplus} წლით უფროსია`);
    }
    else if (surplus < 0) {
        surplus *= -1;
        console.log(`ანა ლევანიზე ${surplus} წლით უმცროსია`);
    }else{
        console.log(`ანა ლევანის ტოლია`);
    }
};

result();

// Task 2

let studentsArr = ["John", "Sam", "Ann", "Will", "Andrew", "Joseph", "Lorelai", "Amelie", "Den"];

let studentsQuantity = studentsArr.length / 2;

if (studentsArr.length % 2 > 0) {
    let middleStudent = (studentsQuantity -= 0.5);
    console.log(studentsArr[middleStudent]);
} else {
    console.log("მასივი ლუწია. სცადე კენტი მასივის შექმნა");
};

// Task 3

let studentObject = {
    firstName: "Tornike",
    lastName: "Shvangiradze",
    age: 21,
    subjects: ["Math", "English", "Physics", "Georgian", "Music"],
    roommate: {
        fullname: "Nika Devashvili",
        Age: 21
    }
};

let studentObjectLenght = studentObject.subjects.length;

for(let i = 0; i < studentObjectLenght; i++){
    console.log(studentObject.subjects[i]);
};

let fullname = studentObject.firstName + " " + studentObject.lastName;

studentObject.fullname = fullname;

console.log(studentObject);

let result = `${studentObject.fullname} არის ${studentObject.age} წლის და მისი რუმმეითი არის: ${studentObject.roommate.fullname}`;

console.log(result);

// Tast 4

let mixedArr = ["Banana", "Orange", "Apple", "Mango", 2, 12];

let i = 0;

while (typeof mixedArr[i] == "string") {
    console.log(mixedArr[i]);
    i++;
};

// Task 5

let numberArr = [12, 23, 43, 11, 9, 2, 121, 90];

for(let i = 0; i < numberArr.length; i++){
    if(numberArr[i] > 31){
        if(numberArr[i] % 2 > 0){
            console.log(`${numberArr[i]} Element is greater than provided value and is EVEN`);
        }else {
            console.log(`${numberArr[i]} Element is less than provided value and is ODD`);
        }
    }
}