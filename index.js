
function snapCrackle(maxValue) {
    let index = 1
    let resultado = ""
    while (index <= maxValue){
        if(index %2 && index %5 == 0){
            resultado += index + "SnapCrackle, "  
        } 
        else if(index %2){
            resultado += index + "Snap, "
        }
        else if(index %5 == 0){
            resultado += index + "Crackle, "   
        }
        else{
            index++
        }
        }
}
snapCrackle()


 