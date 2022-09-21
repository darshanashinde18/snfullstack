// const getBlogs=()=>{
//     setTimeout(()=>{
//         return{
//             title:'welcome to my App'
//         }
//     }, 2000);
// }

// const mydata=getBlogs()
// console.log(mydata.title)

const getBlogs=(callbackdemo)=>{
    setTimeout(()=>{
        callbackdemo({
            title:'welcome to my App'
        })
    }, 2000);
}

getBlogs((bp)=>{
    console.log(bp.title)
})
