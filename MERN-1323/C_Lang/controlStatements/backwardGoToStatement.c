#include <stdio.h>

void main()
{
    printf("Line 1\n");
    printf("Line 2\n");
    printf("Line 3\n");
    int flag = 0;
    
rosewin:
    if(flag == 1)
    {
        goto end;
    }
    printf("Line 4\n");
    printf("Line 5\n");
    printf("Line 6\n");
    flag = 1;
    goto rosewin;
    end:
    printf("Line 7\n"); 
    printf("Line 8\n");
}