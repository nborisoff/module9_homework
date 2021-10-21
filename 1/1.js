let example = `
        <list>
            <student>
                <name lang="en">
                    <first>Ivan</first>
                    <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
            </student>
            <student>
                <name lang="ru">
                    <first>Петр</first>
                    <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
            </student>
        </list>`;

function xmlToObject(xml) {
    let parser = new DOMParser(),
        xmlDOM = parser.parseFromString(xml, "text/xml");
        students = xmlDOM.querySelectorAll("student"),
        object = {
            list: []
        };

    for (let i = 0; i < students.length; i++) {
        object.list.push({
            name: `${students[i].querySelector("first").textContent} ${students[i].querySelector("second").textContent}`,
            age: students[i].querySelector("age").textContent,
            prof: students[i].querySelector("prof").textContent,
            lang: students[i].querySelector("name").getAttribute("lang")
        });
    }

    return object;
}

console.log(xmlToObject(example));