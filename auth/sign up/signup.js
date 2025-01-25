import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../../firebase.js"

const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

console.log(email, password, firstName, lastName)


const signupHandler = async () => {
    try {
        console.log("this")
        const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log(user)
        const userInfo = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            userType: "user",
            isBlock: false,
            isDeleted: false
        }
        console.log(userInfo)
        setDoc(doc(db , "users" , user.user.uid),userInfo);
        alert("User Successfully signed Up!")
        // window.location.assign("../../index.html")
    } catch (error) {
        console.log(error)
        alert(error.code)
    }
}

window.signupHandler = signupHandler