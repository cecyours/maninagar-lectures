#include <stdio.h>

int main()
{

    char str[100], temp;
    int i, j;

    printf("Enter a String : ");
    gets(str);

    for (j = 0; str[j]; j++)
        ;
    j = j - 1;

    for (i = 0; i < j; i++, j--)
    {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    printf("Reverse : %s\n", str);

    return 0;
}
