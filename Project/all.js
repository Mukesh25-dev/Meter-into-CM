function convert(){
    let cm=document.getElementById("cm")
    m = cm.value * 100
    let result = "convert value"+m+"cm"
    document.getElementById("result").innertext=result;
}