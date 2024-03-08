const btn = document.querySelector('#btn-hitung1');
    const txt_celcius = document.querySelector('#celsius');
    const hasil_reamur = document.querySelector('.hasil-reamur');

const btn1 = document.querySelector ('#btn-hitung2');
    const txt_reamur = document.querySelector ('#reamur');
    const hasil_fahrenheit = document.querySelector ('.hasil-fahrenheit');
    
    const btn2 = document.querySelector('#btn-hitung3');
    const txt_fahrenheit = document.querySelector('#fahrenheit');
    const hasil_celcius = document.querySelector('.hasil-celcius');


    btn.addEventListener('click', function () {
        let celcius = parseFloat(txt_celcius.value);

        if (!isNaN(celcius)) {
            hasil_reamur.innerHTML = celcius * 4 / 5;
        } else {
            alert('Masukkan angka yang valid untuk suhu dalam Celcius.');
        }
    });

    btn1.addEventListener('click', function () {
        let reamur = parseFloat(txt_reamur.value);
        const hasil_reamur = (reamur * 2.25) + 32
        hasil_fahrenheit.innerHTML = hasil_reamur
    });

    
    btn2.addEventListener('click', function () {
        let fahrenheit = parseFloat(txt_fahrenheit.value);
        const celcius = (fahrenheit - 32) * 5/9;
        hasil_celcius.innerHTML = celcius.toFixed(2); 
    });
    





