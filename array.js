var arr = [[0,1,1,2,5,9,2],
           [4,7,1,1,1,5,8],
		   [4,9,4,6,1,1,5],
		   [0,7,8,1,1,6,1],
		   [3,8,2,1,1,6,5],
		   [2,5,2,8,8,1,3],
		   [9,4,9,0,0,3,4]]; // define the target matrix;
		   
var tbl = document.getElementById("tbl");

function build_table() // builds the grid from [arr] array
{
 var len = arr.length-1;
 var html = "";
   
 for (var i = 0; i<=len; i++)
      {	   
      html = html + "<tr>";
      for (var j=0; j<=len; j++)
	     {
		  html= html + "<td id='"+i+"x"+j+"'>" + arr[i][j] + "</td>";
		 }
       html = html + "</tr>";		 
	  }
  html = html + "</table>";	  
  tbl.innerHTML =html; 
};	

function add_handler () // returns matrix coordinates, searches for neighbours;
{
 var cell = ""; 
 var target_cell = [];
 tbl.onclick = function(event, target) 
   {              
    cell= event.target.id; target_cell = cell.split('x'); 		
	var x = parseInt(target_cell[0]); var y = parseInt(target_cell[1]);  
	find_neib(x,y,arr[x][y]);
   }  
};

function find_neib(x,y,value) // find neighbours for cell (x,y) and its neighbours recursively;
{  

 function check (x,y,value)
  { 
   if (typeof arr[x] == 'undefined') {return false;};
   if (typeof arr[x][y] == 'undefined') {return false};
   return arr[x][y] == value;
  };  
    
  if (check(x-1,y,value)) {var val = (x-1).toString() + 'x' + y.toString();                           
                           if (document.getElementById(val).className != 'neib') {document.getElementById(val).classList.add("neib"); find_neib(x-1,y,value); }};
						   			// recursion;
						   
  if (check(x+1,y,value)) {var val = (x+1).toString() + 'x' + y.toString();                            						   
                           if (document.getElementById(val).className != 'neib') {document.getElementById(val).classList.add("neib");find_neib(x+1,y,value);}};
						   
  if (check(x,y-1,value)) {var val = (x).toString() + 'x' + (y-1).toString(); 
                         						   
                           if (document.getElementById(val).className != 'neib') {document.getElementById(val).classList.add("neib"); find_neib(x,y-1,value);}};
						   
  if (check(x,y+1,value)) {var val = (x).toString() + 'x' + (y+1).toString(); 
							if (document.getElementById(val).className != 'neib') { document.getElementById(val).classList.add("neib"); find_neib(x,y+1,value); }};
};

build_table();	
add_handler();
