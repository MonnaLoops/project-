const btn = document.querySelector('#btn');

btn.addEventListener('click', (ev) =>{
    //prevents form submition
    ev.preventDefault();

    //slecting the values
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const address = document.querySelector('#address').value;

    //selecting the elements that will reive the values
    const input_name = document.querySelector('#input-name');
    const input_age = document.querySelector('#input-age');
    const input_address = documen.querySelector('#input-address');

    //adding values to said elements
    input_name.innerHTML += name;
    input_age.innerHTML += age;
    input_address.innerHTML += address;
})

/*
   toDo:
   - flex-box & design
   - conditions for age to only except numbers 

*/