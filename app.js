// login button area
const loginBtn=document.querySelector('#login-btn');
const mainSection=document.querySelector('#main-section');
mainSection.style.display='none'
loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const AuthCard=document.querySelector('#Auth-Card');
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    if( email == ''){
        alert('Enter your email:');
    }else if(password == ''){
        alert('Enter your password:');
    }else{
        AuthCard.style.display='none';
        mainSection.style.display='block'
    }
});
// Deposit button area
const DepositBtn=document.querySelector('#Deposit-Btn');
DepositBtn.addEventListener('click',()=>{
    const DepositAmount=document.querySelector('#Deposit-Amount').value;
    const DepositNumber=parseFloat(DepositAmount);
    const CardDeposit=document.querySelector('#Card-Deposit').innerText;
    const CurrentDeposit=parseFloat(CardDeposit);
    const totallDeposit=DepositNumber+CurrentDeposit;
    document.querySelector('#Card-Deposit').innerHTML=totallDeposit.toFixed(2);
// card blance
const cardBlance=document.querySelector('#card-blance').innerText;
const cardNumber=parseFloat(cardBlance);
const totallBlance=DepositNumber+cardNumber;
document.querySelector('#card-blance').innerHTML=totallBlance.toFixed(2)
document.querySelector('#Deposit-Amount').value='';
});
// withdraw button
const withdrawBtn=document.getElementById('withdraw-Btn');
withdrawBtn.addEventListener('click',()=>{
    const withdrawAmount=document.getElementById('withdraw-Amount').value;
    const withdrawNumber=parseFloat(withdrawAmount);
    document.getElementById('withdraw-Amount').value=''

    const cardWithdral=document.getElementById('card-withdral').innerText;
    const cardwithadrawNumber=parseFloat(cardWithdral);
    const caedWithdralAmount=cardwithadrawNumber+withdrawNumber;
    document.getElementById('card-withdral').innerHTML=caedWithdralAmount.toFixed(2);
    
    const cardBlance=document.querySelector('#card-blance').innerText;
    const cardNumber=parseFloat(cardBlance);

   const withdral=cardNumber-withdrawNumber
   document.querySelector('#card-blance').innerHTML=withdral
});
