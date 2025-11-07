#include <stdio.h>

void main(){
    char ch;

    printf("Line 1\n");
    printf("Line 2\n");

    code:
    
    printf("Line 3\n");
    printf("Line 4\n");
    printf("Line 5\n");

    printf("wanna display again ( y/ n ): ");
    scanf("%c", &ch);

    if( ch == 'Y' || ch == 'y' ){
        goto code;
    }

    printf("Line 6\n");
    printf("Line 7\n");
} 