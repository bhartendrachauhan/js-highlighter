function search(){
    let textToSearch = document.querySelector('#text-to-search').value;
    let paragraph = document.querySelector('#paragraph');
    const counter = document.querySelector('#words-counter')
    const caseSensitive = document.querySelector('#ignore-case')
    let count = 0;
    if(caseSensitive.checked){
        textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
        let pattern = new RegExp(`${textToSearch}`,"gi");

        paragraph.innerHTML = paragraph.textContent.replace(pattern, (match) => {
            count++;
            match = `<span class="highlighted-txt">${match}</span>`
            return match;
        })
    }
    else{
        paragraph.innerHTML = paragraph.textContent.replaceAll(textToSearch, (match) => {
            count++;
            match = `<span class="highlighted-txt">${match}</span>`
            return match;
        })
    }
    if(textToSearch === ''){
        counter.innerHTML = 0;
    }
    else{
        counter.innerHTML = count.toString();
    }
    
}
function reset(){
    let textToSearch = document.querySelector('#text-to-search').value;
    let paragraph = document.querySelector('#paragraph');
    const counter = document.querySelector('#words-counter')
    const caseSensitive = document.querySelector('#ignore-case')
    let count = 0;
    if(caseSensitive.checked){
        textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
        let pattern = new RegExp(`${textToSearch}`,"gi");

        paragraph.innerHTML = paragraph.textContent.replace(pattern, (match) => {
            count++;
            match = `<span class="highlighted-txt">${match}</span>`
            return match;
        })
    }
    else{
        paragraph.innerHTML = paragraph.textContent.replaceAll(textToSearch, (match) => {
            count++;
            match = `<span class="highlighted-txt">${match}</span>`
            return match;
        })
    }
    if(textToSearch === ''){
        counter.innerHTML = 0;
    }
    else{
        counter.innerHTML = count.toString();
    }
}