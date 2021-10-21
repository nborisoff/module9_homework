window.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input'),
        requestBtn = document.querySelector('button'),
        resultDiv = document.getElementsByClassName("result")[0];
        

    requestBtn.addEventListener("click", () => {
        if (input.value > 0 && input.value <= 10) {
            useRequest(displayResult);
        } else {
            resultDiv.innerHTML = "Число вне диапазона от 1 до 10";
        }
    });

    function useRequest(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://picsum.photos/v2/list?limit=${input.value}`, true);

        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log(`${xhr.status}: ${xhr.statusText}`);
            } else {
                const result = JSON.parse(xhr.response);

                if (callback) {
                    callback(result);
                }
            }
        }

        xhr.onerror = function() {
            console.log(`Ошибка! Статус ответа: ${xhr.status}`)
        }

        xhr.send();
    }

    function displayResult(data) {
        let pictures = '';
        
        data.forEach(element => {
            const pictureDiv = `
                <div>
                    <img src=${element.download_url}>
                </div>
            `;
            pictures += pictureDiv;
        });
        resultDiv.innerHTML = pictures;
    }
});