// function User(firstName, lastName, age, programmingLang) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.programmingLang = programmingLang
// }
// const newUser = new User('Abubakar', 'Muhammad Ala', 20, 'Javascript');
// console.log(newUser.firstName);




// summing function



const suming = [1,2,3,4];
let add = 0;
const result = document.getElementById(`result`)
const btn = document.getElementById(`btn`)
const demo = document.getElementById(`demo`)
console.log(demo)
btn.addEventListener(`click`, () => {
    for (let i = 0; i< suming.length; ++i) {   
        add += suming[i]
    }    
    result.innerHTML = 'The total sumation is ' +  add;
} )

// reversing function
const btn2 = document.getElementById(`btn2`)
const demo2 = document.getElementById(`demo2`)
const result2 = document.getElementById(`result2`)
// console.log(reversing, demo2)
btn2.addEventListener(`click`, () => {
    let see = suming.reverse();
    result2.innerHTML = see
})


const word = '   "  welcome   "    '
const trimWord = word.trim()

// const currectWord;

const demo3 = document.getElementById(`demo3`).innerHTML = word
const trimBtn = document.getElementById(`tri`)
trimBtn.addEventListener(`click`, () => {
    const demo4 = document.getElementById(`demo4`).innerHTML = trimWord
})




const regForm = document.getElementById(`reg-form`);
// console.log(regForm)
const regBtn = document.getElementById(`reg-btn`);



const getLocalStorage = () => {
    const usersFromLocalStorage = JSON.parse(localStorage.getItem(`users`));
    if (usersFromLocalStorage !== null) {
        return usersFromLocalStorage;
    } else {
        return [];
    }
}

const processUserReg = (username, password) => {
    const addToLocalStorage = async (username, password) => {
        const localUsers = await getLocalStorage();
        const newUser = {};
        newUser.username = username;
        newUser.password = password;

        const newLocalUser = [...localUsers, newUser];

        localStorage.setItem('users', JSON.stringify(newLocalUser))
    }
    addToLocalStorage(username, password);
}

const storedUser = JSON.parse(localStorage.getItem(`users`));
const error = document.querySelector(`.error`);
const errorOne = document.querySelector(`.errorOne`);
 
password.onfocus = function() {
    const error = document.querySelector('.error')
    error.innerHTML = 'A special charcter, number, capital and small letter and not less than 8';
    error.style.color = 'green'
}

password.onblur = function() {
    const error = document.querySelector('.error');
    error.innerHTML = ''
}

regBtn.addEventListener(`click`, (e) =>  {
    e.preventDefault()
    // console.log(regForm)
   
    const userName = document.getElementById(`username`)
    const password = document.getElementById(`password`)
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specil =  /[!@#$%^&*()_=[[+{};':"|/,<>?.-]/g;
  
    // console.log(typeof storedUser)

   
    // let isExist = storedUser.find(items => {
    //     return items.username.toUpperCase() === userName.value.toUpperCase()
    // })

    if (userName.value.length === 0 && password.value.length === 0) {
        // alert(`fill in the form`)
        password.style.border = '1px solid red'
        error.innerHTML =  'password required'
        error.style.color = 'red';
        userName.style.border = '1px solid red'
        errorOne.innerHTML = 'user name required'
        errorOne.style.color = 'red'
        return false
    } else if (userName.value.length === 0) {
       if (userName.blur) {
        userName.style.border = '1px solid red';
        errorOne.innerHTML = 'User name required'
       } else if (userName.onfocus) {
        errorOne.innerHTML = ''
        // userName.style.border = '1px solid green'
       }
    //    userName.style.border = '1px solid green'
        // alert(`fill in the user name`)
        // password.style.border = '1px solid red';
    } else if (password.value.length === 0) {
        // alert(`please fill in the password`)
        error.innerHTML = 'password required'
        error.style.color = 'red'
        password.style.border = '1px solid red';
    } else if (password.value.length < 8) {
        // alert(`password must not be less than eight`)
        error.innerHTML = 'passsword must not be less than 8'
        error.style.color = 'red'
        password.style.border = '1px solid red';
        return false;
    } else if (!password.value.match(numbers)) {
        // alert(`password must contain a number`)
        error.innerHTML = 'password must contain a number';
        error.style.color = 'red'
        password.style.border = '1px solid red';
    } else if (!password.value.match(lowerCaseLetters)) {
        // alert(`password must contain a small letter`)
        error.innerHTML = 'password must contain small letter';
        error.style.color = 'red'
        password.style.border = '1px solid red';
    } else if (!password.value.match(upperCaseLetters)) {
        // alert(`password must contain capital letter`)
        error.innerHTML = 'password must contain capital letter';
        error.style.color = 'red'
        password.style.border = '1px solid red';
    } else if (!password.value.match(specil)) {
        // alert(`password must contain a special character`)
        error.innerHTML = 'password must contain special character';
        error.style.color = 'red'
        password.style.border = '1px solid red';
        
    }  else if (isExist) {
        alert(`user exist`);
        return false
    }
    else { 
        processUserReg(userName.value, password.value);
        // userName.style.border = '1px solid green'    
        // password.value = '';
        userName.value = '';
        password.value = '';
        errorOne.innerHTML = ''
        alert(`account created`);
        userName.style.border = '1px solid green'
        password.style.border = '1px solid green'
    }
})


const formLogin = document.getElementById(`form-login`)
formLogin.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const userLog = document.getElementById(`usernamelog`)
    const passwordLog = document.getElementById(`passwordlog`)
    

    const userLogData = {
        username: userLog.value,
        password: passwordLog.value
    };
    JSON.stringify(userLogData)
    // JSON.stringify(userLogData)
    storedUser.forEach( (items, index, arr) => {
       if (items.username === userLogData.username && items.password === userLogData.password) {
        // console.log(`got it`)
        window.location.href = 'next.html'
       } else {
        alert('incorrect data')
        return false
       } 
    })
})
