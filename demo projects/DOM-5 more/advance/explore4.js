function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched ");
        }, 2000);
    })
};

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched");
        }, 3000);
    })
}


async function getBlogData(){
    try{
        console.log("data is processing");
        const [postData, postCommentdata] = await promise.all([
          fetchData(),
          fetchCommentData(),
        ]);
        console.log(postData);
        console.log(postCommentdata);
    }
    catch (error)
    {
        console.log( "there is some error",error);
    }
}
getBlogData();