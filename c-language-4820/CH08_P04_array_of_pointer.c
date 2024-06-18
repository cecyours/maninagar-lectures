#include<stdio.h>
void main()
{
    int a=10,b=20,c=30;

    int *ptr[10];
    int i;
    ptr[0]= &b;
    ptr[1]= &c;
    ptr[2]= &a;


    for(i=0;i<3;i++)
    {
        printf("%d at %u\n",*ptr[i],ptr[i]);
    }

}