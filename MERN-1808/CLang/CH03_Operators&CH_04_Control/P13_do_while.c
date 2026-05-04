#include<stdio.h>

void main() {
    int i, num;

    i = 1;
    printf("Enter the number: ");
    scanf("%d",&num);

    do
    {
        /* code */
        printf("%2d * %2d = %d\n",num, i, num*i);
        i++;

    } while (i<=10);
    
    
   
    
}