
/*
const pyramid = (a,b) =>{ 
let result = "" 
//full
if( b == "full"){
    let x = a
    let y = ""
    let row = 0
    let i = 0
    for( row=0; row < x; row++)
    {
        y=""
    for (i=0; i < 2*x - 1; i++)
    {
        if (i < x - row - 1 )
        {y = y + " "}
        if (i >= x - row -1 && i <= x + row -1 )
        {y = y + "*"}
        if (i > x + row -1)
        {y = y + " "} 
    }
        result += y + "\n"
    }
}

//right
if (b=="right"){
    let x = a
    let y = ""
    let row = 0
    let i = 0
    for( row=0; row < x; row++)
    {
        y=""
    for (i=0; i <= x - 1; i++)
    {
        if (i < x - row - 1 )
        y = y + " "
        if (i >= x - row -1)
        y = y + "*"
    }
    result += y + "\n"
    }
}

//left
if (b =="left"){
    let x = a
    let y = ""
    let row = 0
    for( row=0; row < x; row++)
    {
        y+="*"
    result += y + "\n"    
    }
}
return (result)
}

console.log(pyramid(4,"right"))
*/


/*
let  x = [1, 3, 5, 19, 44, 57, 69, "hello", "world"]

const reverseList = (x) => {
    let y = []
    for(let i = x.length-1 ; i >= 0; i--)
    {
        //y = y.concat(x[i])
        y.push(x[i])

    }
    return (y)
}
console.log(reverseList(x))
*/

/*let x = "a"

const palindrome = (x) =>{
    let result = true
    for (let i = 0; i <= x.length/2-1; i++)
    {
        if(x.charAt(i) == x.charAt(x.length-i-1))
        {
            result = true
        }
        else
        {
            result = false
            break
        }
    }
    return(result)
}
console.log (palindrome(x))
*/

/*
let x = [1,3,5,7]
let y = [2,4,6,8,10]

const mergeList = (x,y) =>{
    let z = []
    for ( let i = 0; i < x.length || i < y.length ; i ++)
    { 
        if (x[i] != undefined){
        z.push (x[i])}
        if (y[i] != undefined){
        z.push (y[i])}
    }
    return (z)
}
console.log (mergeList(x,y))
*/

/*
let x = [1,3,7,9]
let y = [2,6,8,10,21]

const sortedMergedList = (x,y) => {
    let z = []
    let xLength = x.length
    let yLength = y.length
    for (;;)
    {
        if (x.length == 0)
        {
            z=z.concat(y)
            break
        }
        else if (y.length == 0)
        {
            z=z.concat(x)
            break
        }
        else if (x[0] <= y[0])
        {
            z.push(x[0])
            x.shift()
        }
        else if (x[0] > y[0])
        {
            z.push(y[0])
            y.shift()
        }
        
    }
    return (z)
}
console.log(sortedMergedList(x,y))
*/

/*
let x = [1,2,"Hello",'a']

const rotateList = (x,k) => {
    let y = []
    let i = 0
    if (k >= x.length )
    {
        return ("invalid")
    }
    else
    {
        for (i; i < k; i++ )
        {
            y.push(x[i])
        }
        for (let j = 1; j <= x.length - k; j++)
        {
            y.unshift(x[x.length - j])
        }
    }    
    return (y)
}
console.log(rotateList(x,2))
*/

/*
const returnDigit = (x) => {
    let i = 0
    let a
    let z = []
    for (let j = 0 ;  x/(10**j) >= 1; j++ )
    {
        i = j
    }
    for (i; i >=0; i--)
    {
        a = (x-x%(10**i))/(10**i)
        x = x -  a*(10**i)
        z.push(a)
    }
    return (z)
}
console.log(returnDigit(88888))
*/


let x = ["Hello", "I'm", "Huy","I","Love","Someone"]

const Frame = (x) =>{
    let i = 0
    let longest = 0
    let z = ""
    for (i; i < x.length; i++)
    {
        longest = (x[i].length > longest) ? x[i].length:longest
    }
    for (let j = 0; j < x.length +2; j++)
    {
        let k = 1
        let y = ""
        for (k; k <= longest +4;)
        {
            if (j == 0 || j == x.length + 1)
            {
                y = y + "*"
            }
            else if(k==1)
            {
                y = "* " + x[j-1]
                k = k + x[j-1].length
            }
            else if (k < longest+2)
            {
                y = y + " "
            }
            else if (k==longest +2)
            {
                y = y + " *"
            }
            k++
        }
        z = z + y +"\n"
    }
    return (z)
}

console.log (Frame(x))

