#include<stdio.h>
void main()
{
    int i;
    printf("enter a number : ");
    scanf("%d",&i);

    if(i%2==0){
        printf("number is even...");
    }
    else if (i==1)
    {
        printf("1 is special number..");
    }
    
    else{
        printf("number is odd...");
    }
}