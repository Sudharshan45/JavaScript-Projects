function animatedForm(){
    const arrows=document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow =>{
        arrow.addEventListener("click",()=>{
            const input=arrow.previousElementSibling;
            const parent =arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            console.log(nextForm);
            //check for validation 
            if(input.type==="text" &&  validateUser(input)  )
            {
                console.log("everything is ok!");
                nextSlide(parent,nextForm);
            }
            else if(input.type==='email' &&emailValidate(input))
            {
                  nextSlide(parent,nextForm);
            }
            else if(input.type==='password' &&validateUser(input))
            {
                   nextSlide(parent,nextForm);
            }
            else
            {
                parent.style.animation='shake 0.5s ease';
            }
            parent.addEventListener("animationend",()=>{
                parent.style.animation="";
            })
        });
    });
}
function emailValidate(email)
{
    const valid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(valid.test(email.value))
  {
    error('rgb(87,189,130)');
   return true;
  }
  else
  {
      email.value="";
    error('rgb(189,87,87)');
  }
}
function validateUser(user)
{
    if(user.value.length< 6)
    {
        console.log("Not enough characters");
        error('rgb(189,87,87)');
    }else
    {
        error('rgb(87,189,130)');
        return true;
    }
}
function nextSlide(parent,nextForm)
{
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}
function error(color)
{
    document.body.style.backgroundColor=color;
}
animatedForm();