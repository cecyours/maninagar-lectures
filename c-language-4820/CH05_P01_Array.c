#include<stdio.h>
void main()
{
    int a[] = {10,20,30,40,55,61,70,85,90,100};

    int i =0;


    for(i=0;i<10;i++)
    {
        printf("a[%d] : %d\n",i,a[i]);
    }

    printf("have u : %d\n",a[7]);
}