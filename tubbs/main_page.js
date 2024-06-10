const search_result_div = document.getElementById('search_result');
const search_value_inp = document.getElementById('search_inp');
let now_select_tube = {};

function search_page_tube() {
    function search_callback(tube) {
        const elm = document.createElement("p");
        elm.classList.add("suggestion");
        elm.classList.add("suggestion-focus");
        elm.addEventListener("click", function (e) {
            //if (Object.)
        });
        const name = document.createElement("b");
        name.innerText = tube0.name;
        name.classList.add("suggestion-focus");
        elm.appendChild(name);
        const maker = document.createElement("i");
        maker.classList.add("suggestion-maker");
        maker.classList.add("suggestion-focus");
        maker.innerHTML = tube0.maker;
        elm.appendChild(maker);
        const type = document.createElement("i");
        type.classList.add("suggestion-type");
        type.classList.add("suggestion-focus");
        type.innerHTML = tube0.type;
        elm.appendChild(type);
        elm.addEventListener("click", function (e) {
            e.preventDefault();
            search_result_div.style.display = 'none';
        });
        search_result_div.appendChild(elm);
    }

    if (search_value_inp.value.startsWith("#")) {
        searchTube(search_value_inp.value.slice(1), true, search_callback);
    }else {
        searchTube(search_value_inp.value, false, search_callback);
    }
}