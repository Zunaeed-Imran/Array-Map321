// we use comma in every space
// than we set limit "100" it can go 100 string limit.

let text = "How are you my man";

const mysplarr = text.split("", 100);

document.write(mysplarr);