/*Make a function that gathers user's input and stores them in an object temporarily
;  */
//Make an object containing functions for each 5 local variables calculations
//make an additional runOperations function to run all the neccesary function get the results variable and return it
//Make a function to populate the results paragraph with a results message....acces result variable via the runOperations functions
//Make a function to run when the user clicks and call all the functions necessary




/*
function storeInputValues(){				return input values object
		input object 
		{
			key:data
			key:data
			key:data
			key:data

		}
}

function storeMathOperations(){						return math operations object
		math operations object						use the inputValuesObject 
		{
			operationname: function
			operationname: function
			operationname: function
			operationname: function
			operationname: function ......-> last function has the result..
									......-> could store that result in a variable outside the scope of the operations object


		}
}


function runOperations (){  ...->access the operations object and run operations in order...make sure to return the right values;
	
}


function populateResults(){} ...-> access the results variable inside the math operations object
							 ...-> var message= "your estimated monthly payment is $resultsVariable"


jquery on ("click event handler ", function(){
													should it be inside a function scope or in the upper scope by itself?
													ask Sean if a JQuery expression should be standing by itself? best practice/standards?
})
*/



//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/*
------------------------------CODE STARTS BELOW   -----------------------------------------
*/
//-----------------------------------------------------------------------------------------

"use strict";


//==========

//===========


function run() {
    var loanBalance = document.getElementById("loanBalanceInput").value;
    var interestRate = document.getElementById("interestRateInput").value;
    var loanTerm = document.getElementById("loanTermsInput").value;
    var period = document.getElementById("periodSelectOption").value;


    if (loanBalance === "" || interestRate === "" || loanTerm === "" || period === "") {
        alert("You need to enter a number in order for the calculator to work");

    }



    // monthly interest rate       
    var monthlyInterestRate = (interestRate / 100) / period

    // number of payments
    var numberOfPayments = loanTerm * period

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)

    // interest quotient
    var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1)

    // final calculation
    var monthlyPayment = loanBalance * interestQuotient;




    var resultsMessage = "Your estimated mortgage payment is $" + Math.round(monthlyPayment) + ".";

    document.getElementById("resultsParagraph").innerHTML = resultsMessage;


}



//--------------------------------
//--------------------------------
//--------------------------------

function onClick() {
    run();

}


//Comments from peers
/*VS = originaly the onClick function was seperated from the math function.
Combining the code makes it easier to read. I like the format but i think the beginning comments could be deleted. 

 
// KF = very indepth comments in trying to figure out which method to use in JavaScript
*/

//........
//---------------------------------------
