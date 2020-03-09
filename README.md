# deepFlatArray 


It accepts nested array and flat it into single array  .


# Installation

`npm i deepFlat --save`


Then... 

```
let x = [ 'a' , 'b' , 'c' ,'d' , ["e","f","g",["i", "j" , "k" , ["l" , "m " , "n"]] ,"h"] ]

let  y = deepFlat(x)

//output

// y  = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm ', 'n', 'h' ]


```