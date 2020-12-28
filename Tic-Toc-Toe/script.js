 const winnerCombos=[
     [0,1,2],
     [0,3,6],
     [3,4,5],
     [6,7,8],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
 ];
 const grid=()=>Array.from(document.getElementsByClassName('q'));

 const qNumId=(qE1)=> Number.parseInt(qE1.id.replace('q',''));
 const emptyQs=()=> grid().filter(_qE1 =>_qE1.innerText==='');
 const allSame=(arr)=> 
     {return arr.every(_qE1 => _qE1.innerText===arr[0].innerText && _qE1.innerText!=='');}

 const takeTurn =(index,letter)=>{ grid()[index].innerText=letter;}
 const opponentChoice=()=>qNumId(emptyQs()[Math.floor(Math.random()*emptyQs().length)]);
 const endGame=(winningSequence)=>{
    winningSequence.forEach(_qE1=>_qE1.classList.add('winner'));
     disableListeners();}
const checkForVictory=()=>
{
   let victory=false;
   winnerCombos.forEach(
      _c=>{
          const _grid=grid();
          const sequence =[_grid[_c[0]],_grid[_c[1]],_grid[_c[2]]]
          if(allSame(sequence))
          {
              victory=true;
              endGame(sequence);
          }

      }

   )
   return victory;
}
const opponentTurn=()=>
{
   disableListeners();
    setTimeout(()=>
    {
       let t=opponentChoice()
        takeTurn(t,'O');
        console.log(checkForVictory);
     if(!checkForVictory())
         enableListeners();
    },1000);
}
 const clickFn=(event)=>
 {
     takeTurn(qNumId(event.target),'X');
    if(!checkForVictory())
         opponentTurn();
 }
 const enableListeners= () =>grid().forEach(_qE1 =>_qE1.addEventListener('click',clickFn));
 const disableListeners= () =>grid().forEach(_qE1 =>_qE1.removeEventListener('click',clickFn));
 enableListeners();
