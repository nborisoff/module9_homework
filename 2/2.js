let example = `{
        "list": [{
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
            },
            {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }]
    }`;

function jsonToObject(json) {
    let object = JSON.parse(json);

    for (let i = 0; i < object.list.length; i++) {
        object.list[i].age = parseInt(object.list[i].age);
    }

    return object;
}

console.log(jsonToObject(example));