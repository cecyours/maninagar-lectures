#include <stdio.h>

void main()
{
    char str[100];

    printf("Please enter the string : ");
    scanf("%s", str);

    for(int index = 0; str[index]; index++)
    {
        if(str[index]>='A' && str[index]<='Z')
        {
            str[index] += 32;
        }
    }

    printf("The updated string is : %s", str);
}