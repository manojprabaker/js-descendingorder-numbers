var a=parseInt(prompt("enter a value"));
var b=parseInt(prompt("enter b value"));
var c=parseInt(prompt("enter c value"));


if((a<c)&&(a<b))
{
	if(b<c)
	{
		console.log("descending order is " + c + "," + b + "," + a);
	}
	else
	{
		console.log("descending order is " + b + "," + c+ "," +a );
	}
}

if((b<a)&&(b<c))
{
	if(a<c)
	{
		console.log("descending order is " + c + "," + a + "," + b);
	}
	else
	{
		console.log("descending order is " + a + "," + c + "," + b );
	}
}

if((c<a)&&(c<b))
{
	if(b<a)
	{
		console.log("descending order is " + a + "," + b + "," + c);
	}
	else
	{
		console.log("descending order is " + b + "," + a + "," + c );
	}
}