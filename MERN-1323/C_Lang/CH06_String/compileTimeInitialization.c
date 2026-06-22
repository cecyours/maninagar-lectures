#include <stdio.h>

void main()
{
    char str1[] = "Hi";
    char str2[5] = {'l','i','f','e'};
    char str3[4] = {'H','o','m','e'};
    char str4[10] = {'w','o','r','\0', 'h', 'i'};
    
    printf("%s\n", str1);
    printf("%s\n", str2);
    printf("%s\n", str3);
    printf("%s\n", str4);
}