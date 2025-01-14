const fakeRequest = (url) => {
    const pages = {
        'users/'      : 1,
        'users/1'     : ['soso', 432],
        'users/1/432' : 'nono'
    }
    data = pages[url];
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if(data){
                resolve({statu: 200, data})
                } else{
                    reject({statu: 404, data})
                }
            },3000)
        }) 
    
}
fakeRequest('users/')
    .then(
    (res) => {
      console.log(res);
      const id = res.data;
      return fakeRequest(`users/${id}`)
    })
    .then(
    (res) => {
        console.log(res);
        const postId = res.data[1];
        return fakeRequest(`users/${id}/${postId}`)
    })
    .then(
    (res) => {
        console.log(res);
    }
    )
    .catch(
        (err) => {
            console.log(err)
        }
    )

    


