class Cat {

    constructor(firstname, secondname, lastname, petsname, tel, sex, breed, food, comment) {
        this.firstname = firstname;
        this.secondname = secondname;
        this.lastname = lastname;
        this.petsname = petsname;
        this.tel = tel;
        this.sex = sex;
        this.breed = breed;
        this.food = food;
        this.comment = comment;
    }

}
let yourcat = new Cat();


console.log(yourcat);

function save() {
    yourcat.firstname = document.getElementById('firstname').value;
    yourcat.secondname = document.getElementById('secondname').value;
    yourcat.lastname = document.getElementById('lastname').value;
    yourcat.petsname = document.getElementById('petsname').value;
    yourcat.tel = document.getElementById('tel').value;

    const sex = document.querySelectorAll('input[name="sex"]')
    for (const s of sex) {
        if (s.checked) {
            yourcat.sex = s.value;
        }
    }

    let select = document.getElementById("breed");
    yourcat.breed = select.value;

    checkbox = document.getElementsByName("foodtype");

    let str = "";

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            str += checkbox[i].value + ", ";
        }
    }
    yourcat.food = str;
    yourcat.comment = document.getElementById('comment').value;

    console.log(yourcat);
};