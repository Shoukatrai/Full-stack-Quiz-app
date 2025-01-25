import { auth, db, doc, getDoc, signInWithEmailAndPassword } from "../../firebase.js"

const loginHandler = async () => {
    try {
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        const loginUser = await signInWithEmailAndPassword(auth , email.value , password.value)
        console.log(loginUser.user.uid)
        const userInfo = await getDoc(doc (db , "users" , loginUser.user.uid))
        const userData = {
            ...userInfo.data(),
            uid:loginUser.user.uid
        }
        localStorage.setItem("user" , JSON.stringify(userData))
        alert("Login Successful!");

        if(userData.userType === "admin"){
            window.location.replace("../../admin/dash/dash.html")
        }else{
            window.location.replace("../../user/dash/dash.html");
        }
        
    } catch (error) {
        console.log(error)
        alert(error.code)
    }
}

window.loginHandler = loginHandler 