

//  c = a+b => 3 + 4
// operator defines the operation which will be performed. + 
// operands are those, on which the opertion performed. (a,b)=> (3,4)

#include<stdio.h>
void main()
{

    int a,b,c;

    printf("Enter the number : ");
    scanf("%d+%d",&a,&b);


    c = a+b;


    printf("%d + %d = %d\n",a,b,c);

}
