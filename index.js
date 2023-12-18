const generatejoke=()=>
{

    const setheader={
        //use headers as it is not user name

        headers:
    {
        Accept:"application/json"
    }}
   // use fecth method to call api
   // 1st argument:which api (url )
   // if i get response or result use fat arrow 
    // function and convert in json format
   fetch('https://icanhazdadjoke.com',setheader)
   .then((result)=>result.json())
   .then((data)=>{
    jokes.innerHTML=data.joke;
   }).catch((error)=>
   {
    jokes.innerText="Loading jokes";
   })


   // jokesbtn.style.cssText=`backgroundcolor:grey;color:black;`;
}

const jokes=document.getElementById('jokes');
const jokesbtn=document.getElementById('jokesbtn');
// fire an event using jokesbtn
jokesbtn.addEventListener('click', generatejoke);
generatejoke();


