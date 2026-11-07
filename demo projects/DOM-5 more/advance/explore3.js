function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode" , url : "https\\"})
        })
    })
}

async function getUserData() {
    try {
        console.log("fetching user data...");
        const userData = await fetchData();
        console.log("user data : ", userData);
    }
    catch (error) {
        console.log("error ", error);
    }
}

getUserData();