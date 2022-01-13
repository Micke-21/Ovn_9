const btn = document.querySelector('#btn');
const bish = document.querySelector('#bishInput');
const bosh = document.querySelector('#boshInput');
const n = document.querySelector('#nInput');
const bishBoshSection = document.querySelector('#bishBoshRes');

btn.addEventListener('click', (e) => {
    // console.log(bish.value);
    // console.log(bosh.value);
    // console.log(n.value);
    // console.log(document.querySelector('#div1'));
    let div1 = document.querySelector('#div1');

    let bb = BishBosh(bish.value, bosh.value, n.value);

    if (div1 === null) {
        let div1 = document.createElement("div");
        div1.setAttribute("id", "div1");
        div1.setAttribute("class", "bg-success bg-opacity-25 p-3");
        bishBoshSection.appendChild(div1);
        div1.innerHTML = bb;
    }
    else {
        div1.innerText = bb;
    }

});

function BishBosh(bish, bosh, n) {
    let res = '';
    if (bish < 0) bish = 0;
    if (bosh < 0) bosh = 0;
    if (n < 0) n = 0;

    for (let index = 1; index <= n; index++) {
        if (index % bish == 0 && index % bosh == 0)
            res += 'Bish-Bosh';
        else if (index % bish == 0)
            res += 'Bish';
        else if (index % bosh == 0)
            res += 'Bosh';
        else
            res += index;

        if (index < n)
            res += ', ';
        // if (index % 10 == 0)
        //     res += '<br>'
    }

    return res;
}