function reset() {
    let res1 = Math.ceil(Math.random() * 6);
    let res2 = Math.ceil(Math.random() * 6);
    let total = res1 + res2;

    let totalElem = document.querySelector(".total");
    totalElem.innerHTML = `<span class="total">Total : ${total}</span>`;

    let roll1 = document.querySelector(".dice1");
    let roll2 = document.querySelector(".dice2");
    roll1.innerHTML = facesMap[res1];
    roll2.innerHTML = facesMap[res2];
}



let facesMap = {
    1: `<div class="one-face">
    <span class="dot"></span>
    </div>`,

    2: `<div class="two-face">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>`,

    3: `<div class="three-face">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    </div>`,

    4: `<div class="four-face">
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    </div>`,

    5: `<div class="five-face">
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    <div class="row-mid">
    <span class="dot"></span>
    </div>
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    </div>`,

    6: `<div class="six-face">
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    <div class="row">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    </div>
    </div>`,

}
