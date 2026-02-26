#include<stdio.h>
#include <string.h>

void swapStrings(char **str1, char **str2){
    char *temp = *str1;
    *str1 = *str2 ;
    *str2 = *temp;
}

int main(){
    char *string1 = "Hello";
    char *string2 = "World";

    printf("Before swap:\n");
    printf("String1: %s\n", string1);
    printf("String 2: %s\n", string2);
    
    swapStrings(&string1, &string2); 

    printf("\nAfter swap:\n");
    printf("String 1: %s\n", string1);
    printf("String 2: %s\n", string2);

    return 0;
}