function greet(name)
{
    alert(`Hello ${name}, Welcome to my dynamic world! 🦍🦍🦍❤️🌍`);
}
 const buttonid = document.getElementById('click')
buttonid.onclick = function(){
       alert('Internal JS is working')
}
buttonid.onmouseover= function(){
   buttonid.style.color = 'yellow';
}

buttonid.onmouseout= function(){
    buttonid.style.color = 'red';
}