const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks").value;
    let txtmidden=document.getElementById("txtmidden").value;
    let txtRechts=document.getElementById("txtRechts").value;


    let resultaat = txtLinks.substring(txtmidden, txtRechts);
    txtOutput.innerHTML= "= " + resultaat;

}

window.addEventListener("load", setup);