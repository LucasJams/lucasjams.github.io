window.onload = function()
{
    var buys = [];
    var upgrade = addBuy("Upgrade", 1.00);
    var autoClicker = addBuy("Auto Clicker", 5.00);
    var clickButton = document.getElementById("clickButton");
    var moneyText = document.getElementById("money");
    var earnRateText = document.getElementById("earnrate");
    var money = 0;
    var earnRate = 0.01;
    var autoRate = 2000;
    autoClicker.onclick = function()
    {
        if (autoClicker.innerHTML.slice(1) <= money && autoRate > 30)
        {
            money -= autoClicker.innerHTML.slice(1);
            moneyText.innerHTML = "Money: $" + money.toFixed(2);
            addEffect(false, autoClicker);
            autoClicker.innerHTML = "$" + (autoClicker.innerHTML.slice(1)*1.4).toFixed(2);
            var autoInterval = setInterval(earn, autoRate);
            autoRate -= 20;
            if (autoRate <= 20)
            {
              autoClicker.style.background = "lightgrey";
              autoClicker.parentNode.innerHTML = "Sold Out!";
              autoClicker.parentNode.color = "red";
            }
            
        }
        if (autoClicker.innerHTML.slice(1) > money)
        {
            autoClicker.style.background = "lightgrey";
        }
    }
    
    upgrade.onclick = function()
    {
        if (upgrade.innerHTML.slice(1) <= money)
        
            {
                money -= upgrade.innerHTML.slice(1);
                moneyText.innerHTML = "Money: $" + money.toFixed(2);
                earnRate *= 2;
                updateRate();
                addEffect(false, upgrade);
                upgrade.innerHTML = "$" + (upgrade.innerHTML.slice(1)*2.2).toFixed(2);
            }
            if (upgrade.innerHTML.slice(1) > money)   
            {
                upgrade.style.background = "lightgrey";
                
            }
    }
    clickButton.ontouchstart = function()
    {
        clickButton.style.top = 85 + "px";
    }
    clickButton.ontouchend = function()
    {
        clickButton.style.top = 80 + "px";
        earn();
    }
    
    clickButton.onmousedown = function()
    {
        clickButton.style.top = 85 + "px";
    }
    
    clickButton.onmouseup = function()
    {
        clickButton.style.top = 80 + "px";
        earn();
    }
    
    function updateRate()
    {
        earnRateText.innerHTML = "Earn Rate: $" + earnRate;
    }
    
    function earn()
    {
        money += earnRate;
        moneyText.innerHTML = "Money: $" + money.toFixed(2);
        addEffect(true);
        for (var i = 0; i < buys.length; i++)
        {
            if (buys[i].innerHTML.slice(1) <= money)
            {
                buys[i].style.background = "lawngreen";
            }
            else
            {
                buys[i].style.background = "lightgrey";
                
            }
        }
    }
    
    function addEffect(add, button)
    {
        var s = document.createElement("h2");
        if (add)
        {
            s.innerHTML = "+$" + earnRate.toFixed(2);
            s.style.color = "green";
            
            s.style.left = Math.floor(Math.random() * 270) + "px";
        s.style.top = Math.floor(Math.random() * 400) + "px";
        }
        else
        {
            s.innerHTML = "-" + button.innerHTML;
            s.style.color = "red";
            s.style.left = 200 + "px";
        }
         s.style.position = "absolute";
        document.body.appendChild(s);
        
        floatUp(s);
    }
    
    function floatUp(elem)
    {
        var count = 0;
        var op = 1.00;
        var interval = setInterval(moveUp, 5);
        var top = elem.getBoundingClientRect().top;
    
    
    function moveUp()
    {
        count += 3;
        elem.style.top = top - count + "px";
        
       
        
        
            op -= 0.02;
            elem.style.opacity = op;
        if (op <= 0)
        {
            if (elem.parentNode != null)
            {
                elem.parentNode.removeChild(elem);
                clearInterval(interval);
            }
            
            
        }
        
        
    }
    }

    function addBuy(name, price)
    {
        var division = document.getElementById("store");
        var newElem = document.createElement("div");
        newElem.innerHTML = name;
        newElem.className = "buyBox";
        division.appendChild(newElem);
        var newButton = document.createElement("div");
        newButton.innerHTML = "$"+price.toFixed(2);
        buys.push(newButton);
        if (buys.length != 1)
        {
        newElem.style.top = 20*buys.length + "px";
        } 
        newButton.className = "buyButton";
        newElem.appendChild(newButton);
        return newButton;
    }
    
    
    
    
    
    
}