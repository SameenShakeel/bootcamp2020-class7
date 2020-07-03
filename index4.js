function apiFetch() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("new Promise");
            resolve("data");
        }, 1000);
    });
    return promise;
}

async function _asyncJS() {
    try {
        let data = await apiFetch();
        console.log(data, "successful")
    } catch (error) {
        console.log("error");
    }
}

_asyncJS();