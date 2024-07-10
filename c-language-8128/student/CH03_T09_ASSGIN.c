#include<stdio.h>
void main()
{
    int a=10;

    printf("during post increment : %d\n",a++);
    printf("after post increment : %d\n",a);
    
    printf("during pre increment : %d\n",++a);
    printf("after pre increment : %d\n", a);



    printf("during post decrement : %d\n",a--);
    printf("after post decrement : %d\n",a);

    printf("during pre decrement : %d\n",--a);
    printf("after pre decrement : %d\n",a);


}