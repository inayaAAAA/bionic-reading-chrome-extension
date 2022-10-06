// Inaya Alkhatib
// Date Started: 10/5/22
// Date Completed: 10/6/22
// Hours spent: 5~7
//
// This program/Chrome Extension converts any website main text (no headers) 
// into a Bionic Reading Format. I did this because Bionic Reading Extensions
// I downloaded did not work :P
//
// Known Issues/Needed Fixes: 
// - Links in paragraphs are converted to normal text
// - No on or off button
// - only works on some websites (change through manifest.json)




// WORKING makes all text bold in p 
const ps = document.getElementsByTagName("p");
//for (p of ps){
    //p.style.fontWeight = '700';
    //console.log("hi");    
//}

for (p of ps){
    //ps[p].textContent.style.fontWeight= '700';
    //p.style.color = 'red';
    //p.textContent = 'Poop';

    var text = p.textContent.split(" ");
    console.log(text);
    var newText = text;
    for (w = 0; w < text.length; w++){
        //var halfed = text[w].slice((text[w].length)/2);
        //var temp_1 = text[w].substr(0, text[w].length/2);
        //var temp_2 = text[w].substr((-text.length/2) + 1, text.length/2);

        var middle = Math.ceil(text[w].length / 2);
        
        var temp_1 = (text[w].slice(0, middle));
        var temp_2 = text[w].slice(middle);
        var bolded_1 = text[w].replace(text[w], '<b>' + temp_1 + '</b>');
        newText[w] = bolded_1 + temp_2;
        //console.log(w);
    }
    //console.log(newText);
    p.innerHTML = newText.join(" ");
}



// Left over code from early testing, will use later, probably

/*
const ps = document.getElementsByTagName("p");
for (p of ps){
    const text = p.textContent.bold();
    const wordMatchRegExp = /([A-Za-z])\w+/g; 
    const words = text.matchAll(wordMatchRegExp);
    p = "<strong>"+text+"<strong>";
*/    


    ///for (i = 0; i < words.length; i++){
        //split = words[i].slice((words[i].length)/2)
        //words[i] = split[0].style.fontWeight = '700' + split[1]
       // words[i].style.fontWeight = '700';
    //}  
//}


//const ps = document.getElementsByClassName("css-at9mc1 evys1bk0");
// div class="css-53u6y8"
// p class="css-at9mc1 evys1bk0"

//const ps = document.getElementsByTagName("p");
//for (var i = 0; i < ps.length; i++) {
//    ps[i].style.color="red";
//}