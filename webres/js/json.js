/**
 * @Author Hxgfk
 */

let JSONData;
function getJSONFile(path){
    let request = new XMLHttpRequest();
    request.open("get", path);
    request.send(null);
    request.onload = function(){
        if(request.status === 200){
            if(request.responseText !== ""){
                JSONData = JSON.parse(request.responseText);
            }
        }
    }
    return JSONData;
}

class Json{
    myJson = {}

    add(name, value){
        if (typeof name != "string" || name === ""){
            throw Error("The arg 'name' type must is string or not is empty");
        }else {
            this.myJson[name.toString()] = value;
        }
    }

    get(name){
        if (typeof name != "string" || name === ""){
            throw Error("The arg 'name' type must is string or not is empty");
        }else {
            return this.myJson[name];
        }
    }
}

class JsonData{
    name = "";
    value = null

    constructor(name, value) {
        if (typeof name != "string" || name === ""){
            throw Error("The arg 'name' type must is string or not is empty");
        }else {
            this.name = name;
            this.value = value;
        }
    }

    createObject(){
        return {name : this.value};
    }

    getName(){
        return this.name;
    }

    getValue(){
        return this.value;
    }
}

class JsonArray{
    array = [];

    /**
     * param 'element' type must is JsonData or other type
     * @param element
     */
    add(element){
        this.array.push(element);
    }
}