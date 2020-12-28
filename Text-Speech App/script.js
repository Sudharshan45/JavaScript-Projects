const url='http://api.voicerss.org/';
const apiKey='483bbd24b1c449e59fa93b1aabca0454';
const maxCharacters=1000;
const tooLongError='Text exceeds 1000 characters';
const whiteSpaceError='Text must Contain text characters others than empty spaces.';
const bulidUrl =(str)=>`${url}?key=${apiKey}&src=${str}&f=48khz_16bit_stereo`;
const tooLong=(str) => str.length  >= maxCharacters;
const playBtn =()=>document.getElementById('play-btn');
const textInput=()=>document.getElementById('text-input');
const appContainer=()=>document.getElementById('app-container');
const errorContainer =()=>document.getElementById('error-message');
const clearErrors =()=>errorContainer().innerHTML='';
const displayErrorMsg=(val)=>
{
    const errs=[];
    if(tooLong(val)) 
      errs.push(tooLongError);
    if(emptyString(val))
      errs.push(whiteSpaceError);
      errs.forEach(_err=>
        {
            const div=document.createElement('div');
            div.innerText=_err;
            errorContainer().appendChild(div);
        });

}

const listenerFn=($event)=>
{
    if($event.target.value || $event.type==='paste')
       playBtn().disabled=false;
    else
    playBtn().disabled=true;
};
const emptyString=(str)=>str.split('').every(_char=>_char===' ' || _char==='\n');
playBtn().addEventListener('click',()=>{
    clearErrors();
    if(!emptyString(textInput().value) && !tooLong(textInput().value))
    {
        new Audio(bulidUrl(textInput().value)).play();
    }
      
      else
        displayErrorMsg(textInput().value);
})
document.addEventListener('DOMContentLoaded',()=>
{
  const containerHeight=appContainer().clientHeight;
  const docHeight=window.innerHeight;
  appContainer().style.marginTop=`${docHeight/2 - containerHeight/2-25}px`;
  textInput().addEventListener('keyup',listenerFn);
  textInput().addEventListener('paste',listenerFn);

});