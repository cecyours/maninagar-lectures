#include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    printf("Please enter a ASCII value :");
    scanf("%d", &num);
    //textattr(13);
    cprintf("%d --> %c", num, num);
}