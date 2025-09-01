#include<stdio.h>
#include<conio.h>

void main()
{
    printf("Please enter a character : \n");
    scanf("%c", &ch);

    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
    {
        printf("Character is alphabet!");
    }
    else
    {
        printf("Character is not alphabet!");
    }
}


