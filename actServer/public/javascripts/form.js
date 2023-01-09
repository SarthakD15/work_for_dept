var prevBtn = document.getElementById("prev"),
    doneBtn = document.getElementById("done"),
    nextBtn = document.getElementById("next"),
    uploadBtn= document.getElementById("loadData"),
    progressBar = document.getElementById("progressBar"),
    step_two = document.getElementById("step_two"),
    step_three = document.getElementById("step_three"),
    step_four = document.getElementById("step_four"),
    buttonsContainer = document.getElementById("buttonsCTN"),
    formStepOne = document.getElementById("formStepOne"),
    formStepTwo = document.getElementById("formStepTwo"),
    formStepFour = document.getElementById("formStepFour"),
    formStepThree = document.getElementById("formStepThree"),
    fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    birthDay = document.getElementById("birthDay"),
    country = document.getElementById("country"),
    phone = document.getElementById("phone"),
    adress = document.getElementById("adress"),
    city = document.getElementById("city"),
    state = document.getElementById("state"),
    nameText = document.getElementById("nameText"),
    emailText = document.getElementById("emailText"),
    userText = document.getElementById("userText"),
    dateText = document.getElementById("dateText"),
    countryText = document.getElementById("countryText"),
    cityText = document.getElementById("cityText"),
    stateText = document.getElementById("stateText"),
    phoneText = document.getElementById("phoneText");
    
var step = 1
// var Projects=require('../../models/project_details');

// function uploading(){
//     document.getElementById("loadData").required = true;
// }
// uploadBtn.addEventListener("click",()=>{
    
// })
// document.getElementById("nextBtn").required = true;
function postData() {
    document.getElementById("done").required = true;
}
doneBtn.addEventListener("click",() => {
  alert("Loading Pls WAIT !!");
})
function myFunction() {
    document.getElementById("next").required = true;
}

nextBtn.addEventListener("click", () => {

    if (step === 1) {
        if (document.getElementById('title').value && document.getElementById('obj').value && document.getElementById('myfile1').value) {
            step++;
            progressBar.style.width = "40%"
            setTimeout(() => {
                step_two.setAttribute("style", "background-color: rgb(99,179,152);color: white;")
            }, 100)
            buttonsContainer.style.justifyContent = "space-between"
            prevBtn.style.display = "block"
            formStepOne.style.display = "none"
            formStepTwo.style.display = "block"
            // nextBtn.innerText = "Next"
            nextBtn.style.display = "block"
            // doneBtn.style.display = "block"

        }

    }
    if (step === 2) {
        if (document.getElementById('yname').value) {
            step++;
            progressBar.style.width = "75%"
            setTimeout(() => {
                step_three.setAttribute("style", "background-color: rgb(99,179,152);color: white;")
            }, 100)
            formStepTwo.style.display = "none"
            formStepThree.style.display = "block"
            //  nextBtn.innerText = "Done"
            nextBtn.style.display = "none"
            
            doneBtn.style.display = "block"
        }
    }
    if (step === 3) {
        progressBar.style.width = "75%"
        setTimeout(() => {
            step_four.setAttribute("style", "background-color: rgb(99,179,152);color: white;")
        }, 100)
        nameText.innerText = fName.value + " " + lName.value
        userText.innerText = username.value
        emailText.innerText = email.value
        dateText.innerText = birthDay.value
        countryText.innerText = country.value
        cityText.innerText = city.value
        stateText.innerText = state.value
        phoneText.innerText = phone.value
        
        // formStepThree.style.display = "none"
        // doneBtn.style.display = "none"

    }

})

prevBtn.addEventListener("click", () => {

    if (step === 2) {
        progressBar.style.width = "0%"
        step_two.setAttribute("style", "background-color: transparent;color: black;")
        buttonsContainer.style.justifyContent = "right"
        prevBtn.style.display = "none"
        formStepTwo.style.display = "none"
        formStepOne.style.display = "block"
        nextBtn.style.display = "block"
        nextBtn.innerText = "Next"
        // doneBtn.style.display = "none"
        step--
    }
    else if (step === 3) {
        progressBar.style.width = "40%"
        step_three.setAttribute("style", "background-color: transparent;color: black;")
        formStepThree.style.display = "none"
        formStepTwo.style.display = "block"
        nextBtn.style.display = "block"
        nextBtn.innerText = "Next"
        doneBtn.style.display = "none"
        step--
    }
})

//Dynamic field creation in form step 2
const addBtn = document.querySelector('.add');
const input = document.querySelector(".member-info");

function removeInput(){
    this.parentElement.remove();
}

function addInput(){
    const name = document.createElement("input");
    name.type = "text";
    name.placeholder = "Enter Member Name";

    const prn = document.createElement("input");
    prn.type = "text";
    prn.placeholder = "Enter Member PRN";

    const btn=document.createElement("a");
    btn.className= "delete";
    btn.innerHTML="&times";

    btn.addEventListener("click", removeInput);

    const flex=document.createElement("div");
    flex.className="flex";

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(prn);
    flex.appendChild(btn);


}
addBtn.addEventListener("click", addInput);