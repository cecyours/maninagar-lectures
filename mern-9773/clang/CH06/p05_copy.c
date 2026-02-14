#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[100];
 
    printf("Enter a string : ");
    scanf("%s",str1);
    strcpy(str2, str1); // str2 ← str1
    
    printf("str1 : %s\n", str1);
    printf("str2 : %s\n", str2);
 
}