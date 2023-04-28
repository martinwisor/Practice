let name1 = "Sofia";
let name2 = "Theodor";
let name3 = "Elsie";
let name4 = "Martin";

if (name1 > name2 && name3 && name4){
    console.log(`${name1} has the longest name`)
}
else if (name2 > name1 && name3 && name4){
    console.log(`${name2} has the longest name`)
}
else if (name3 > name1 && name2 && name4){
    console.log(`${name3} has the longest name`)
}
else if (name4 > name1 && name2 && name3){
    console.log(`${name4} has the longest name`)
}
else if(name1 === name2 && name3 && name4){
    console.log(`All four names, ${name1}, ${name2}, ${name3}, and ${name4} are the same length.`)
}