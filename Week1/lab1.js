var prompt=require("prompt-sync")({sigint:true});

let array_numbers = prompt("Input the numbers: ");
var k = parseInt(prompt("Input how many you what to sum: "), 10);

array_numbers = array_numbers.split(' ').map(Number);
console.log(array_max_sum(array_numbers, k));

function array_max_sum(array_numbers, k)
{
    let sum = 0;
    var max = 0;

    for (var i = 0; i < k; i++)
    {
        sum += array_numbers[i]; 
    }
                
     max = sum;

    for (var i = k; i < array_numbers.length; i++)
    {
        sum += array_numbers[i] - array_numbers[i - k];
        if (sum > max)
        {
            max = sum;
        }
    }
                
    return max;
    
}