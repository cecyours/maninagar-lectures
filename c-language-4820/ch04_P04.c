#include<stdio.h>
void main()
{
    int i=1,num;

    printf("Enter the number:- ");
    scanf("%d",&num);

    while(i<=10)
    {
        printf("%d * %d = %d\n",num,i,num*i);
        i++;
    }
}