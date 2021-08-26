const txt = document.getElementById("txt");
let btns = Array.from(document.getElementsByClassName('btn'));

btns.map(btn => {
    btn.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case "AC":
                txt.innerText = "";
                break;
            case "C":
                txt.innerText = txt.innerText.slice(0, -1);
                break;
            case "=":
                try{
                    txt.innerText = eval(txt.innerText);
                } catch{
                    txt.innerText = "Error!"
                    setTimeout(function(){
                        txt.innerText = "";
                    }, 1000);
                    }
                break;
            default:
                txt.innerText += e.target.innerText;
        }
    })
});