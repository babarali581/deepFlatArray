



function deepFlat (dummy) {

let afterDeep = dummy.reduce((acc , val)=>{
    if(Array.isArray(val)){
       return [...acc , ...deepFlat(val)]
    }
    return [...acc ,val]
},[])

return afterDeep
}

module.exports = deepFlat

//let test = [ 'a' , 'b' , 'c' ,'d' , ["e","f","g",["i", "j" , "k" , ["l" , "m " , "n"]] ,"h"] ]
