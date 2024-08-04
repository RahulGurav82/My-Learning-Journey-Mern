const Display = document.querySelector(".display");


const Seven = document.querySelector(".row-2 .col-1");
Seven.addEventListener("click", ()=> {
    SevenValue = Seven.innerHTML;
    Display.append(SevenValue);
});

const Eight = document.querySelector(".row-2 .col-2");
Eight.addEventListener("click", ()=> {
    EightValue = Eight.innerHTML;
    Display.append(EightValue);
});

const Nine = document.querySelector(".row-2 .col-3");
Nine.addEventListener("click", ()=> {
    NineValue = Nine.innerHTML;
    Display.append(NineValue);
});

const Four = document.querySelector(".row-3 .col-1");
Four.addEventListener("click", ()=> {
    FourValue = Four.innerHTML;
    Display.append(FourValue);
});

const Five = document.querySelector(".row-3 .col-2");
Five.addEventListener("click", ()=> {
    FiveValue = Five.innerHTML;
    Display.append(FiveValue);
});

const Six = document.querySelector(".row-3 .col-3");
Six.addEventListener("click", ()=> {
    SixValue = Six.innerHTML;
    Display.append(SixValue);
});

const Three = document.querySelector(".row-4 .col-1");
Three.addEventListener("click", ()=> {
    ThreeValue = Three.innerHTML;
    Display.append(ThreeValue);
});

const Two = document.querySelector(".row-4 .col-2");
Two.addEventListener("click", ()=> {
    TwoValue = Two.innerHTML;
    Display.append(TwoValue);
});

const One = document.querySelector(".row-4 .col-3");
One.addEventListener("click", ()=> {
    OneValue = One.innerHTML;
    Display.append(OneValue);
});

const Zero = document.querySelector(".row-5 .col-2");
Zero.addEventListener("click", ()=> {
    ZeroValue = Zero.innerHTML;
    Display.append(ZeroValue);
});

// Addition
const Plus = document.querySelector(".row-3 .col-4");
Plus.addEventListener("click", ()=> {
    PlusValue = Plus.innerHTML;
    Display.append(PlusValue);
});
// Substraction
const Minus = document.querySelector(".row-2 .col-4");
Minus.addEventListener("click", ()=> {
    MinusValue = Minus.innerHTML;
    Display.append(MinusValue);
});
// Division
const Divide = document.querySelector(".row-1 .col-2");
Divide.addEventListener("click", ()=> {
    DivSymbol = Divide.innerHTML;
    Display.append(DivSymbol);
});
// Multiplication
const Multi = document.querySelector(".row-1 .col-3");
Multi.addEventListener("click", ()=> {
    MultiSymbol = Multi.innerHTML;
    Display.append(MultiSymbol);
});

let Answer = 0;
const EqualBtn = document.querySelector(".row-5, .col-4");
EqualBtn.addEventListener("click", ()=>{
    Answer = Equal(n1, n2, operation);
});

// Clear Button.
const Clear = document.querySelector(".row-1 .col-1");
Clear.addEventListener("click", ()=> {
    Display.innerHTML = "";
});

// back button 
const Back = document.querySelector(".row-1 .col-4");
Back.addEventListener("click", ()=> {
    Display.innerHTML = Display.innerHTML.slice(0, -1);
});

let Equal = (num1, num2, operation) => {
    if(operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "X") {
        return num1 * num2;
    } else if (operation === "%") {
        return num1 % num2;
    }
}

Display.innerHTML = Answer;
