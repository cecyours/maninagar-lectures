#include <stdio.h>

void main()
{
    char* pos, str[100], ch = 'a';

    printf("Please enter the string : ");
    scanf("%s", str);

    for(int index = 0; str[index]; index++)
    {
        if(str[index] == ch)
        {
            pos = &str[index];
            break;
        }
    }

    if(!pos)
    {
        printf("Char not found in string");
    }
    else
    {
        printf("Char found at address %p", pos);
    }
}