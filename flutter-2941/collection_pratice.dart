void main(){

var data = [1,-2,3,-4,5,6,7,-8,-9,0];

 // var e = data.map((d)=> d<0 ? d*1:-1*d);
 // var e = data.where((e)=> e>0);
 var e = data.where((e)=> e>0).map((e)=> e+0.5);
 
print(e);

}