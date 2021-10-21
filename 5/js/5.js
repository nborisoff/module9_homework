window.addEventListener('DOMContentLoaded', function() {
    const requestBtn = document.querySelector('button'),
        resultDiv = document.getElementsByClassName("result")[0];
        
    if (localStorage.getItem("pictures") != null) resultDiv.innerHTML = localStorage.getItem("pictures");

    requestBtn.addEventListener("click", () => {
        const pageNumber = document.getElementsByClassName("page-number")[0].value,
            limit = document.getElementsByClassName("limit")[0].value;

        if ((pageNumber >= 1 && pageNumber <= 10) && (limit >= 1 && limit <= 10)) {
            fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {return response.json()})
            .then((data) => {displayResult(data)})
            .catch(() => {console.log('error')});
        } else if ((pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) && (limit < 1 || limit > 10 || isNaN(limit))){
            resultDiv.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        } else if (pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) {
            resultDiv.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        } else {
            resultDiv.innerHTML = "Лимит вне диапазона от 1 до 10";
        }
    });

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
        localStorage.setItem("pictures", pictures);
        resultDiv.innerHTML = pictures;
    }
});