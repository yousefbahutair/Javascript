const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const pages = {
            '/users' : 'username',
            '/about' : 'about this page',
        }
        data = pages[url];
        if(data) {
            resolve({statu : 200, page: data})
        }
        else{
            reject({statu : 404, page : 'Not found'})
        }}, 4000)

    })
}
fakeRequest('/about')
.then((res) => {
    console.log(res.statu);
    console.log(res.page);
    console.log("the request has been succfully done");
})
.catch((res) => {
    console.log(res.statu);
    console.log(res.page);
    console.log('Error occur');
})