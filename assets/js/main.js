var burger_icon = document.getElementById("burger-icon");
var aside = document.querySelector("aside");

if (burger_icon) 
{
    burger_icon.addEventListener("click", () =>
    {
        if (!aside.classList.contains("none")) 
        {       
            aside.classList.toggle("close");    
            setTimeout(() => 
            {
                aside.classList.toggle("close");    
                aside.classList.toggle("none");    
            }, 3000);
        } 
        else 
        {
            aside.classList.toggle("none");    
        }
    })    
}