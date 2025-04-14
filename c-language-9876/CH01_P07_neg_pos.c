#include<stdio.h>
int main()
{
    int i;


    printf("Enter the number : ");
    scanf("%d",&i);

    if(i<0)
    {
        i = i*-1;
    }

    printf("the abs : %d\n",i);
}