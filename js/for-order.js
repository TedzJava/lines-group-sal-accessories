function orderNow(){
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    var res = "<h2>Your Order:</h2><h3>You can check the items you don't want anymore :</h3><table><tr><th>Item name :</th><td>Item code :</td></tr>";
    for(var checkbox of checkboxes){
        if(checkbox.checked == true){
            res += "<tr><th><input id='" + checkbox.id + "' class='popup-checkbox' type='checkbox' name='order[]' value='" + checkbox.value + "'/> " + checkbox.value + "</th><td>" + checkbox.id + "</td></tr>";
        }
    } res += "</table><input id='popup-next-btn' type='button' value='Next' name='next step button' onclick='nextStepOrder()'/>";
    popup.innerHTML = res;
}
function nextStepOrder(){
    const popup = document.getElementById('popup');
    const checkboxes = document.querySelectorAll('.popup-checkbox');
    var res = "<h2>This is your FINAL Order:</h2><h3>You can now copy your order to clipboard and go to 'Contact us' section to send us your order</h3><textarea id='orderText' readonly>Hi, I'm looking to buy from your shop these items : ";
    var sequence = 1;
    for(var checkbox of checkboxes){
        if(checkbox.checked == false){
            res += "Item number " + sequence++ + " : " + checkbox.value + ". Code : " + checkbox.id + ". ";
        } 
    } res += "I'm grateful !</textarea><br/><input id='popup-submit-btn' type='button' value='Copy to clipboard' name='ok btn' onclick='copyOrder()'/>";
    popup.innerHTML = res;
    
}
function copyOrder(){
    const text = document.querySelector("#orderText");

    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand('copy');
}