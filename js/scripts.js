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
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
     $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
     });
     console.log(ptopping.join(", "));

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

     switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1400;
           console.log(price);
         break;
         case "medium":
           price = 1000;
           console.log("The price is " + price);
         break;
         case "small":
           price = 700;
           console.log(price);
         default:
           console.log("Error, please enter a pizza size!"); 
       }
  
    let topping_value = ptopping.length * 50;
        console.log("Topping value " + topping_value);

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    // Alert to select pizza size
    if((psize == "0") && (pcrust == "0")){
        console.log("nothing selected");
        $("button.proceed").show();
        $("#info").show();
        $("div.tabulation").hide();
        alert("Please select your pizza size and crust");
      }
      else{
        $("button.proceed").hide();
        $("#info").hide();
        $("div.tabulation").toggle();
      }

    // Query HTML for selections and add to IDs in order details
      $("#pizzaname").html($(".name option:selected").val());
      $("#pizzasize").html( $("#size option:selected").val());
      $("#pizzacrust").html($("#crust option:selected").val());
      $("#pizzatopping").html(ptopping.join(", "));
      $("#totals").html(total);
      console.log(ptopping.join(", "));
  
    //   "Add another pizza" button functionality, including constructor function
      $("button.addPizza").click(function(){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        $("button.addPizza").click(function(){
            let pname = $(".name option:selected").val();
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
              case "large":
                 price = 1400;
                 console.log(price);
               break;
               case "medium":
                 price = 1000;
                 console.log("The price is " + price);
               break;
               case "small":
                 price = 700;
                 console.log(price);
               default:
                 console.log("error"); 
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
              total = price + crust_price + topping_value;
              console.log(total);

              checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
     
      var newOrder = new Pizzabuilder(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);
           
});

//Front-End

    

    
    