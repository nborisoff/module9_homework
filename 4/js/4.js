window.addEventListener('DOMContentLoaded', function() {
    const requestBtn = document.querySelector('button'),
        resultDiv = document.getElementsByClassName("result")[0];
        
    requestBtn.addEventListener("click", () => {
        const firstInput = document.querySelectorAll('input')[0].value,
            secondInput = document.querySelectorAll('input')[1].value;
        if ((firstInput >= 100 && firstInput <= 300) && (secondInput >= 100 && secondInput <= 300)) {
            fetch(`https://picsum.photos/${firstInput}/${secondInput}`)
            .then((response) => {displayResult(response.url)})
            .catch(() => { console.log('error') });
        } else {
            resultDiv.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
        }
    });

    function displayResult(data) {
        resultDiv.innerHTML = `
            <div>
                <img src=${data}>
            </div>
        `;
    }
});