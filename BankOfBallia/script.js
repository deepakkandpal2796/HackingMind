'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Data
const account1 = {
  owner: 'Deepak Kandpal',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ram Singh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Prem Shankar Sharma',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Preeti Chawla',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const modalContainer = document.querySelector('.modal_wrapper');
const overlay = document.querySelector('.overlay');
const modalWrapperHeading = document.querySelector('.modal_content_heading');
const modalWrapperParagraph = document.querySelector('.modal_content_paragraph');
const btnModal = document.querySelector('.modal_btn');
const userInfo = document.querySelector('.user_info_btn_login');
const transferInfo = document.querySelector('.info_transfer_btn')
const loanInfo = document.querySelector('.info_loan_btn')
const closeInfo = document.querySelector('.info_close_btn')


const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//we are taking movement and looping it and make html dynamic
//declaring the type if movent is negative then the money removed and vice versa
//clear the component before looping the value.

//*-----Looping and Displaying the entries-----
const displayMovments = function(movements){
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i){
      const type = mov > 0 ? 'deposit' : 'withdrawal'
      let html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type} </div>
      <div class="movements__value">${mov}₹</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovments(account1.movements);

//*-----Calculating and Displaying the Balance-----

const calcDisplayBalance = function(acc){
   acc.balance = acc.movements.reduce(function (sum, mov) {  //!new key value pair
    return sum + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance}₹`;
}
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {

  //Total deposite
  const incomes = acc.movements.filter(mov => mov > 0).reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = `${incomes}₹`;

  //Total withdrawal 
  const out = acc.movements.filter(mov => mov < 0).reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  //Interest given on deposite amount
  //if the intrest on that ammount is greater than one onlt then it should be added
  const interestRate = acc.interestRate;
  // const interestRate = 1.2;
  const interest = acc.movements.filter(mov => mov > 0).map( deposite => interestRate/100 * deposite).filter(int => int > 1).reduce((sum, mov) => sum + mov ,0);
  labelSumInterest.textContent = `${interest}₹`;

};
// calcDisplaySummary(account1.movements);

//*-----Generating username and stored to the account objects-----
const createUsernames = function(accs){
  accs.forEach(function(acc){

    //* How it works
    // const lowerCase = acc.owner.toLowerCase() //deepak kandpal, ram singh, prem shankar sharma, preeti chawla
    // const nameSplit = lowerCase.split(" "); //['deepak', 'kandpal'], ['ram', 'singh'], ['prem', 'shankar', 'sharma'], ['preeti', 'chawla']
    // const firstLetter = nameSplit.map(function(name){
    //   return name[0];
    // })//['d', 'k'], ['r', 's'], ['p', 's', 's'], ['p', 'c']
    // acc.username = firstLetter.join(""); //dk, rs, pss, pc

    //* Writing in a single line
     acc.username = acc.owner.toLowerCase().split(" ").map(function(name){   //!new key value pair
      return name[0]
    }).join('');
  })
}

createUsernames(accounts)

const updateUI = function(acc){
  //display movements
  displayMovments(acc.movements);
  //display balance 
  calcDisplayBalance(acc);
  // display summery
  calcDisplaySummary(acc);
}
//*-----Event Listners-----

//-----Login btn-----

let currentAccount;
 

btnLogin.addEventListener("click", function(e){
  e.preventDefault(); // to stop the page refresh after submiting the form

  currentAccount = accounts.find(arr => arr.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //clear input feilds
    inputLoginPin.value="";
    inputLoginUsername.value="";
    inputLoginPin.blur(); //make the feild unslect after enter the pin.
    
    //display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(/\s+/)[0]}!`;
    containerApp.style.opacity = 1;

    updateUI(currentAccount);
    
  }else{
    openModal('Login Failed', 'Enter the correct username and password.','39b385', '9be15d');
  }

});

//-----Transfer btn-----
// conditions : check whether the user has that much account balance or not.
//check the transfer user exist in the account array.
// if yes then enter negative amout to its movement and add postive amount to the other users movement
// run displayMovments, calcDisplayBalance, calcDisplaySummary again as the movement queue updated.

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  // console.log('Tansfer');
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  
  // if(receiverAcc && receiverAcc.username !== currentAccount.username && amount <= currentAccount.balance  && amount > 0 ){

  //   //transfer money
  //   currentAccount.movements.push(-amount);
  //   receiverAcc.movements.push(amount);

  //   // update UI 
  //   updateUI(currentAccount);
  // }
  if(receiverAcc){
    if(amount > 0){
      if(amount <= currentAccount.balance){
        if(receiverAcc.username !== currentAccount.username){
          //transfer money
          currentAccount.movements.push(-amount);
          receiverAcc.movements.push(amount);

          // update UI 
          updateUI(currentAccount);
        }else{
          openModal('Transfer Failed', 'You can not send money to yourself!','ffb003', 'ffcb03');
        }
      }else{
        openModal('Transfer Failed', 'Insufficent balance!','ffb003', 'ffcb03');
      }
    }else{
      openModal('Transfer Failed', 'Incorrect amount.','ffb003', 'ffcb03');
    }
  }else{
    openModal('Transfer Failed', 'Please enter the correct account username.','ffb003', 'ffcb03');
  }

  //blank the input feild and remove the cursor
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();

});
//-----Loan btn-----
// condition for loan is, anyone can get the loan if he has deposite 10% of the loan amount ever to his account.
// if he deposite max of 200 then he can get the loan of 2000.

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if( amount > 0 && currentAccount.movements.some(mov => mov >= amount*0.1 )){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

    inputLoanAmount.value= "";
    inputLoanAmount.blur();
  }else{
    openModal('Loan Request Failed', 'The requested amount cant be provided as loan','39b385', '9be15d');
  }
  
});

//-----Close account btn-----
// check : the current account is the account enterd, check password 

btnClose.addEventListener("click", function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username &&  Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    openModal('Acount Closed', `${currentAccount.owner} account's is deleted`,'e52a5a', 'ff585f');
    //remove object from account array
    accounts.splice(index,1);

    //Display message
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;
  }else{
    openModal('Acount Close Request Failed', 'Enter the correct username or password','e52a5a', 'ff585f');
  }
});


//-----sort btn-----
let isSorted = false; 
btnSort.addEventListener('click', function(){
 
  //isSorted changes 
  isSorted = !isSorted;

  //sorting logic
  const sortedMov = currentAccount.movements.slice().sort((a, b) => a - b);
  console.log(sortedMov, currentAccount.movements);
  //condition to show sorted
  if(isSorted){
    displayMovments(sortedMov);
  }else{
    displayMovments(currentAccount.movements);
  }
});



//Modal messages
const intoHeading = 'Welcome to the UNION Bank Of Ballia';
const introPara = 'Now managing your finances become simple and convenient. With our user-friendly interface, you can effortlessly transfer money to other bank accounts, request loans, and even close your account if needed, all at your fingertips. <b> Click on the i button near user input feild for user info.';

const userHeading = 'User Login details';
const userPara = `Owner1 : ${account1.owner}, User: ${account1.username}, Pin: ${account1.pin} <br/> Owner2 : ${account2.owner}, User: ${account2.username}, Pin: ${account2.pin} <br/> Owner3 : ${account3.owner}, User: ${account3.username}, Pin: ${account3.pin}  <br/> Owner4 : ${account4.owner}, User: ${account4.username},  Pin: ${account4.pin} <br/> <b> Please continue Login with any user`;

const transMonHeading = 'Transfer Money';
const transMonPara = 'Enter the username of the owner you want the money to be transfered. <b>Enter the amount, then click on the submit button to proceed.</b>';

const getLoanHeading = 'Request Loan';
const getLoanPara = 'You can get the loan if you have deposited 10% of that amount in your bank account.';

const closeAccHeading = 'Request Loan';
const closeAccPara = 'You can close your account by entering your USERNAME and PIN.';

const openModal = function (head, para, color1, color2){
  modalContainer.classList.add("active");
  overlay.classList.add("active");
  modalWrapperHeading.innerHTML = head;
  modalWrapperParagraph.innerHTML = para;
  modalContainer.style.background=`linear-gradient(to top left, #${color1}, #${color2})`;
}

const closeModal = function (){
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
}

//welcome modal
openModal(intoHeading, introPara, '39b385', '9be15d'); 


//-----modal btn's-----
btnModal.addEventListener("click", closeModal);
overlay.addEventListener( "click" ,closeModal);

//userinfo
userInfo.addEventListener( "click", function(){
  openModal(userHeading, userPara,'39b385', '9be15d');
});

//transferInfo
transferInfo.addEventListener('click', function(){
  openModal(transMonHeading, transMonPara,'ffb003', 'ffcb03');
});

//LoanInfo
loanInfo.addEventListener('click', function(){
  openModal(getLoanHeading, getLoanPara,'39b385', '9be15d');
});

//CloseInfo
closeInfo.addEventListener('click', function(){
  openModal(closeAccHeading, closeAccPara,'e52a5a', 'ff585f');
});


