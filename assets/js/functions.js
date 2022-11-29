var aside = document.querySelector("aside");
var asideLi = document.querySelectorAll(".aside-content ul li");

var listenerFunctions =
{
    openAndCloseAside: function()
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

    }
    
    
}


var setUpListener = () =>
{
    var burger_icon = document.getElementById("burger-icon");
    burger_icon.addEventListener("click", listenerFunctions.openAndCloseAside);
    
    if (asideLi) 
    {
        for (let index = 0; index < asideLi.length; index++) 
        {
            var element = asideLi[index];
            element.addEventListener("click", listenerFunctions.openAndCloseAside);
        }
    }
}