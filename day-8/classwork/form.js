
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmPassword").value;

    if (password.length < 6) {
        return alert("password must be of 6 digits")
    }
    if (password !== confirmpassword) {
        return alert("password do not match")
    }
    let obj = {
        username,
        email,
        password,
        confirmpassword,
    };
    let userdata = document.getElementById("userdata");
    userdata.style.width = "30%"
    userdata.style.border = "1px solid black"
    userdata.style.margin = "auto"
    userdata.style.padding = "10px"
    userdata.style.borderRadius = "8px"
    userdata.style.textAlign = "center"
    userdata.style.marginTop = "30px"


  

    let h2 = document.createElement("h2");
    h2.innerText = obj.username;

    let p1 = document.createElement("p");
    p1.innerText = obj.email;

    let p2 = document.createElement("p");
    p2.innerText = obj.password;

    let p3 = document.createElement("p");
    p3.innerText = obj.confirmpassword;

    userdata.append(h2, p1, p2, p3);
})





