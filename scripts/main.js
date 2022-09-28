function User(firstName, lastName, age, programmingLang) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.programmingLang = programmingLang
}
const newUser = new User('Abubakar', 'Muhammad Ala', 20, 'Javascript');
console.log(newUser.firstName);




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

const processUserReg = (username, password) => {
    const getLocalStorage = () => {
        const usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
        if (usersFromLocalStorage !== null) {
            console.log(usersFromLocalStorage)
            return usersFromLocalStorage;
        } else {
            console.log(usersFromLocalStorage)
            return [];
        }
    }

    const addToLocalStorage = async (username, password) => {
        const localUsers = await getLocalStorage();
        const newUser = {};
        newUser.username = username.value;
        newUser.password = password.value;
        const newLocalUsers = [...localUsers, newUser];
        localStorage.setItem('users', JSON.stringify    (newLocalUsers))
    }

    addToLocalStorage(username, password);
}

regBtn.addEventListener(`click`, (e) =>  {
    e.preventDefault()
    console.log(regForm)
    const userName = document.getElementById(`username`)
    const password = document.getElementById(`password`)
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specil =  /[!@#$%^&*()_=[[+{};':"|/,<>?.-]/g;

    // if (userName.value.length === 0 && password.value.length === 0) {
    //     alert(`input must not be empty`)
    // } else if (userName.value.length === 0) {
    //     alert(`fill in the user name`)
    // } else if (password.value.length === 0) {
    //     alert(`please fill in the password`)
    // } else if (password.value.length < 8) {
    //     alert(`password must not be less than eight`)
    // } else if (!password.value.match(numbers)) {
    //     alert(`password must contain a number`)
    // } else if (!password.value.match(lowerCaseLetters)) {
    //     alert(`password must contain a small letter`)
    // } else if (!password.value.match(upperCaseLetters)) {
    //     alert(`password must contain capital letter`)
    // } else if (!password.value.match(specil)) {
    //     alert(`password must contain a special character`)
    // } else {
        processUserReg(userName, password);
        alert(`account created`)
    // }
})


const formLogin = document.getElementById(`form-login`)
formLogin.addEventListener(`submit`, (e) => {
    e.preventDefault();

    // const storedUser = localStorage.getItem(`user`)
    // const storedpassword = localStorage.getItem(`psw`)
    // const h3 = document.querySelector(`h3`)
    // const h4 = document.querySelector(`h4`)
    // console.log(h3);
    // h3.innerHTML = storedUser;
    // h4.innerHTML = storedpassword;

    const userLog = document.getElementById(`usernamelog`)
    const passwordLog = document.getElementById(`passwordlog`)
    // console.log(userLog)

    if (userLog.value === storedUser && passwordLog.value === storedpassword) {
         
    Swal.fire('Login successfully!')
        window.location.href = 'next.html' 
    } else {
        // alert('Please check your inputs')
        Swal.fire('Check your input and try again')
    }

})
