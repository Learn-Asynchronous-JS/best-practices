// BAD

const sharePost = () => {
    getPost().then((post) => {
        sendEmail(post.url, `Post ${post.title}`).then(() => {
            console.log('posted');
        })
    })
}

//  GOOD

const sharePost = async () => {
    const post = await getPost();
    const email = await sendEmail(post.url, `Post ${post.title}`);
    console.log('posted');
}