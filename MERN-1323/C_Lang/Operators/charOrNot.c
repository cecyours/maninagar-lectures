#include <stdio.h>
#include <conio.h>

void main()
{
    char ch;
    printf("Enter a character : \n");
    scanf("%c", &ch);

    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
    {
        printf("It is a alphabet!");
    }
    else
    {
        printf("It is not a alphabet.");
    }
}