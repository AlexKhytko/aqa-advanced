function checkOrder (available, ordered){
    switch (true){
        case available < ordered && available !== 0 && ordered !== 0 :
        console.log("Your order is too large, we don’t have enough goods");
        break;
        case ordered == 0 && available !== 0:
            console.log("Your order is empty");
            break;
         case available > ordered && available !== 0 && ordered !== 0:
            console.log("Your order is accepted");
        break;   
        case available == 0 && ordered !== 0 :
            console.log("Product ended");
        break;
        default:
         console.log("Make your order, please");
    }
}
checkOrder(15, 25);
checkOrder(275, 25);
checkOrder(0, 25);
checkOrder(15, 0);
checkOrder(0, 0);
