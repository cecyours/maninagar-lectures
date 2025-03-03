#include<stdio.h>

void count(int c)
{
    if (c == 0)
    {
        return;
    }
    printf("The count: %d\n",c--);
    count(c);
}
void main()
{
    int n;

    printf("Enter the number:- ");
    scanf("%d",&n);

    count(n);
}