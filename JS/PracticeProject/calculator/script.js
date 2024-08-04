const Display = document.querySelector(".display");


const Divide = document.querySelector(".row-1 .col-2");
Divide.addEventListener("click", ()=> {
    DivSymbol = Divide.innerHTML;
    Display.append(DivSymbol);
});

const Multi = document.querySelector(".row-1 .col-3");
Multi.addEventListener("click", ()=> {
    MultiSymbol = Multi.innerHTML;
    Display.append(MultiSymbol);
});

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

const Minus = document.querySelector(".row-2 .col-4");
Minus.addEventListener("click", ()=> {
    MinusValue = Minus.innerHTML;
    Display.append(MinusValue);
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

const Plus = document.querySelector(".row-3 .col-4");
Plus.addEventListener("click", ()=> {
    PlusValue = Plus.innerHTML;
    Display.append(PlusValue);
});

