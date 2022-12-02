var aside = document.querySelector("aside");
var asideLi = document.querySelectorAll(".aside-content ul li");
var body = document.getElementsByTagName("body")[0];

//console.log(body);
var section = document.getElementsByTagName("section");

var listenerFunctions =
{
    getSection: function()
    {
        for (let index = 0; index < section.length; index++) 
        {
            const element =  section[index];
            //console.log(element);
            if (aside.classList.contains("none")) 
            {
                body.style.overflow= "hidden";
                element.style.overflow = "hidden";    
            } 
            else 
            {
                body.style.overflow= "auto";
                element.style.overflow = "auto";    
            }
        }

    },

    openAndCloseAside: function()
    {
        listenerFunctions.getSection();

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
            listenerFunctions.getSection();
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