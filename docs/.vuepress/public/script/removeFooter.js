-function(){
    setInterval(() => {
        let footer = document.querySelector('.footer');
        if(footer && footer.children.length >= 4){
            let child = footer.firstElementChild;
            footer.removeChild(child);
        }
    }, 1000);
}()