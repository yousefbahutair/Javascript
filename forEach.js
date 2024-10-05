let users = [
    {
        userName: "ahmed674",
        password : "jdgajfhahfghf",
        history : {
            videosPlayedLastMount : [
                "https://www.youtube.com/watch?v=jCaRbVmh0Ms&pp=ygUMdXIgY3Jpc3RpYW5v",
                "https://www.youtube.com/watch?v=pTP44MPKX4Y&pp=ygUMdXIgY3Jpc3RpYW5v" 
            ],
            subscibedChannels :[
                "https://www.youtube.com/@cristiano",
                "https://www.youtube.com/@MrBeast"
            ],
            likedVideos : [
                "https://www.youtube.com/watch?v=ndAQfTzlVjc&pp=ygUHbXJiZWFzdA%3D%3D",
                "https://www.youtube.com/watch?v=kX3nB4PpJko&pp=ygUHbXJiZWFzdA%3D%3D"
            ],
        }
    },
    {   userName: "khalid999",
        password : "bncbxnzv",
        history : {
            videosPlayedLastMount : [
                "https://www.youtube.com/watch?v=jCaRbVmh0Ms&pp=ygUMdXIgY3Jpc3RpYW5v",
                "https://www.youtube.com/watch?v=pTP44MPKX4Y&pp=ygUMdXIgY3Jpc3RpYW5v" 
            ],
            subscibedChannels :[
                "https://www.youtube.com/@cristiano",
                "https://www.youtube.com/@MrBeast"
            ],
            likedVideos : [
                "https://www.youtube.com/watch?v=ndAQfTzlVjc&pp=ygUHbXJiZWFzdA%3D%3D",
                "https://www.youtube.com/watch?v=kX3nB4PpJko&pp=ygUHbXJiZWFzdA%3D%3D"
            ],
        }
    },
    {        userName: "FahadAlALi",
        password : "2310283081",
        history : {
            videosPlayedLastMount : [
                "https://www.youtube.com/watch?v=jCaRbVmh0Ms&pp=ygUMdXIgY3Jpc3RpYW5v",
                "https://www.youtube.com/watch?v=pTP44MPKX4Y&pp=ygUMdXIgY3Jpc3RpYW5v" 
            ],
            subscibedChannels :[
                "https://www.youtube.com/@cristiano",
                "https://www.youtube.com/@MrBeast"
            ],
            likedVideos : [
                "https://www.youtube.com/watch?v=ndAQfTzlVjc&pp=ygUHbXJiZWFzdA%3D%3D",
                "https://www.youtube.com/watch?v=kX3nB4PpJko&pp=ygUHbXJiZWFzdA%3D%3D"
            ],
        }
    }
]
 users.forEach(function showRecentVideosWatched(users){
    console.log(`last videos watched: \n ${users.history.videosPlayedLastMount}`)
})
users.forEach(function showRecentVideosLiked(users){
    console.log(`last videos liked: \n ${users.history.likedVideos}`)
})
users.forEach(function showRecentChannelsSub(users){
    console.log(`last channels subscribed: \n ${users.history.subscibedChannels}`)
})