const authCheck = () => {
    console.log("authCheck")
    const user =  localStorage.getItem("user");

    if(user === null){
        window.location.replace("../../index.html")
    }
}

// window.authCheck = authCheck 
export {
    authCheck
}