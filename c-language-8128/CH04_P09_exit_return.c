#include<stdio.h>
#include<stdlib.h>
int sum(int a,int b)
{
    printf("Hello world.. 1\n");
    // exit(0);
    return a+b;
    printf("Hello world.. 2\n");
}
void main()
{
    
    printf("the sum is %d\n",sum(3,2));
}