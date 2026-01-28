#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[10];

    printf("Enter First Name : ");
    scanf("%s", str1);
    
    printf("Enter Last Name : ");
    scanf("%s", str2);
    
    strcat(str1, " "); 
    strcat(str1, str2);
    
    printf("Hello %s\n", str1);
    
}