const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    },
};
setTimeout((()=>{
    console.log("first")
}), 1000); 
