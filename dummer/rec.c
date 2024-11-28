#include<stdio.h>

void display(int n)
{
    if(n==0)
        return;
    printf("Hello World %d \n",n);
    display(n-1); // 9
    printf("Bye World %d \n",n);

}

void main()
{
    display(10);
}