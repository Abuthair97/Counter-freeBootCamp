let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")


btns.forEach(function (btn) {
    btn.addEventListener("click",function (a) {
        const styles = a.currentTarget.classList;
        if (styles.contains("decrease")) {
           count--;
        }
        else if(styles.contains("reset")){
            count =0;
        }
        else{
            count++;
        }
        if(count < 0){
                value.style.color="red"
        }
        else if(count > 0){
            value.style.color="green";
        }
        else{
            value.style.color="blue"
        }
         
     
    value.textContent=count;
    })
    
})