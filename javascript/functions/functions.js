//-------------------Excercise 1 ----------------------------


var billAmount = 40;

function grandtotal(){
	//------Function that calculats the gratuity based on it being 20% --------
	function gratuity(x){
		return x * 0.2;
		// var percent = (x * 0.2);
		// return percent;
	}

	// ----Function that calculates the total with a gratuity of 20% -------------
	function totalWithGrat(x){
		// var total = (x + (x * 0.2));
		// return total;
	}
	// var newtotal = totalWithGrat(billAmount);
	console.log("Total gratuity is: $"+ gratuity(billAmount)+" Total with gratuity is: $" + totalWithGrat(billAmount));
}

grandtotal(billAmount);