#include<stdio.h>

void main()
{
    for(int count = 1; count <= 10; count++)
    {
        if(count == 5)
        {
            break;
        }
        printf("%d\n", count);
    }
}