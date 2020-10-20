// business logic
//Pizza object
var price , crust_price, topping_price ;
let total = 0;

function Pizzabuilder (name, size, crust, topping, total){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


$(document).ready(function(){
    $("button.proceed").click(function(event){
        let psize = $("#size option:selected").val();
        let pname = $("#name option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
     $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
     });
     
    console.log(ptopping.join(", "));

    switch(psize){
        case "0":
            price = 0;
        break;
        case "Large":
            price = 1400;
            console.log("The price is " + price);
        break;
        case "Medium":
           price = 1000;
           console.log("The price is " + price);
        break;
        case "Small":
           price = 700;
           console.log("The price is " + price);
        break;
        default:
           console.log("Error, please enter a pizza size!"); 
    }

    switch(pcrust){
        case "0":
            crust_price = 0;
        break;
        case "Crispy":
            crust_price = 100;
        break;
        case "Stuffed":
            crust_price = 200;
        break;
        case "Gluten-free":
            crust_price = 200;
        break;
        default:
            console.log("No price"); 
    }

    let topping_value = ptopping.length * 50;
    console.log("Topping value " + topping_value);

  // Alert to select pizza size
    if((psize == "0") && (pcrust == "0")){
        console.log("nothing selected");
        $("button.proceed").show();
        $("#info").show();
        $("div.tabulation").hide();
        alert("Please select your pizza size and crust!");
    }
    else{
        $("button.proceed").hide();
        $("#info").hide();
        $("div.tabulation").toggle();
    }


    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    
    // Query HTML for selections and add to IDs in order details
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzaname").html($("#name option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    console.log(ptopping.join(", "));
  
    //   "Add another pizza" button functionality, including constructor function
    $("button.addPizza").click(function(){
        let pname = $("#name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        $("button.addPizza").click(function(){
            let pname = $("#name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function(){            
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
      
            switch(psize){
              case "0":
                price =0;
              break;
              case "Large":
                 price = 1400;
                 console.log("The price is " + price);
               break;
               case "Medium":
                 price = 1000;
                 console.log("The price is " + price);
               break;
               case "Small":
                 price = 700;
                 console.log("The price is " + price);
                break;
               default:
                 console.log("error"); 
             }
             switch(pcrust){
                case "0":
                  crust_price = 0;
                break;
                case "Crispy":
                  crust_price = 100;
                  console.log("The price is" + crust_price);
                break;
                case "Stuffed":
                  crust_price = 200;
                  console.log("The price is" + crust_price);
                break;
                case "Gluten-free":
                  crust_price = 200;
                  console.log("The price is" + crust_price);
                break;
                default:
                  console.log("error"); 
              }
              let topping_value = ptopping.length * 50;
              console.log("Topping value " + topping_value);
              total = price + crust_price + topping_value;
              console.log(total);

              checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
     
      var newOrder = new Pizzabuilder(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzaname">' + newOrder.name + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);     
    });
});
//Front-End


$("button#checkout").click(function(){ 
    $("button#checkout").hide();
    $("button.addPizza").hide();
    $("button.deliver").toggle();
    $("#addedprice").toggle();
    $("#pizzatotal").append("Your total is " + checkoutTotal + " KES");
});

//   delivery fee addition
$("button.deliver").click(function(){
    $(".pizzatable").hide();
    $(".tabulation h2").hide();
    $(".delivery").toggle();
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#pizzatotal").hide();
    let deliverytotal= checkoutTotal + 100;
    console.log("You will pay " + deliverytotal + " KES on delivery.");
    $("#totalbill").append("Your total including the delivery fee is: " + deliverytotal + " KES");
});

$("button#final-order").click(function(event){
    event.preventDefault();

    $("#pizzatotal").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let deliverytotal= checkoutTotal + 100;
    console.log("Your final bill is: " + deliverytotal + " KES");
    let customer = $("input#names").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    // Order accepted message if delivery details provided
    if ($("input#names").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append("Thank you " + customer + ", we are preparing your pizza! Please be prepared to have it delivered at "+ location + ". You are reminded that the total due is " + deliverytotal + " KES. Please have it ready, and please consider a tip!");
        $("#totalbill").hide();
        $("#finallmessage").toggle();
    }
      
    else {
        alert("Please enter your delivery details.");
        $(".delivery").show();
        $("button#final-order").show();
    }
    });
   event.preventDefault();
    });
});