#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[100];
    char *pos;
    
    printf("Enter main String : ");
    scanf("%s", str1);
    printf("Enter sub string : ");
    scanf("%s", str2);  
    pos = strstr(str1, str2);
    if (pos)
        printf("%s is found.\n", str2);
    else
        printf("%s is not found.\n", str2);
    
}