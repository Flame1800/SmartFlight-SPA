
window.onload = () => {
    const calculate = () => {
        const inputBookings = document.querySelector('.booking-input');
        const mainValue = document.querySelector('.availability');
        const price = document.querySelector('.price');
        const errorCont = document.querySelector('.info-error');

        inputBookings.addEventListener('change', (e) => {

            if (e.target.value !== 0) {
                if (e.target.value.length > 2) {
                    errorCont.innerHTML =  "Введите число до 60%!";
                }
                else {
                    errorCont.innerHTML =  "";
                    const result = Math.floor((e.target.value / 60) * 100);
                    mainValue.innerHTML = `${result}%`;
                    price.innerHTML = 46  - result / 100;
                }


            }
        })
    }


    calculate();
}