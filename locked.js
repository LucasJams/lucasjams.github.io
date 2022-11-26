var button1, button2, button3;
var code = [4, 7, 2];
var elems = [];
var nums = [0, 0, 0];
var lock;
window.onload = function()
{
elems[0] = document.getElementById("button1");
elems[1] = document.getElementById("button2");
elems[2] = document.getElementById("button3");
lock = document.getElementById("lock");
elems[0].onclick = function()
{
    buttonFunc(0);
    check();
}
elems[1].onclick = function()
{
    buttonFunc(1);
    check();
}
elems[2].onclick = function()
{
    buttonFunc(2);
    check();
}
function buttonFunc(num)
{
    if (nums[num] == 9)
    {
        nums[num] = 0;
    }
    else
    {
        nums[num]++;
    }
    elems[num].innerHTML = nums[num];
}
function check()
{
    if (nums[0] == code[0] && nums[1] == code[1] && nums[2] == code[2])
    {
        lock.style.color = "green";
        lock.innerHTML = "Unlocked";
    }
    else
    {
        lock.style.color = "red";
        lock.innerHTML = "Locked";
    }
}
}
