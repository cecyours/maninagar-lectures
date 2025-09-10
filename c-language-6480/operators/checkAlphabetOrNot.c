#include <stdio.h>

void main()
{
    char ch;
    
    printf("Please enter the character :");
    scanf("%c", &ch);

    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
    {
        printf("Ch is alphabet.");
    }
    else
    {
        printf("Entered character is not alphabet.");
    }
}