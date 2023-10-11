
let stocks={
	
	Fruits:["grapes","banana","apple","strawbery"],
	liquid:["water","ice"],
	holder:["cone","cup","stick"],
	toppings:["chocolate","nuts"]
	
}

let time=new Promise((resolve,reject)=>{
	
	let isShopOpen=true;
		
		if(isShopOpen){
			
			resolve()
			
		}
		
		else{
			
			reject(document.write("shop is closed"))
			
		}
		
		
	})
	

Promise.all([time]).then(()=>{
		
		setTimeout(()=>{
			
			document.write(`${stocks.Fruits[2]} was Selected`);
			
			document.write("<br>")
			
		},2000)
		
		setTimeout(()=>{
			
			document.write("Production startted");
			
				document.write("<br>")
			
		},2000)
		
		setTimeout(()=>{
			
			document.write("Fruits has been chopped");
			
				document.write("<br>")
			
		},3000)
		
		setTimeout(()=>{
			
			document.write(`${stocks.liquid[1]} added`);
			
				document.write("<br>")
			
		},4000)
		
		setTimeout(()=>{
			
			document.write("Machine started");
			
				document.write("<br>")
			
		},5000)
		
		setTimeout(()=>{
			
			document.write(`Icecream placed on ${stocks.holder[0]}`);
			
				document.write("<br>")
			
		},6000)
			
		setTimeout(()=>{
			
			document.write(`${stocks.toppings[0]} as toppings`);
			
				document.write("<br>")
			
		},7000)
			
		setTimeout(()=>{
			
			document.write("serve ice cream");
			
			
			
		},9000)
		
})	


	
	.catch(()=>{
		
		setTimeout(()=>{
			
			document.write("Customer left");
		
			
		},2000)
	})
	
	

