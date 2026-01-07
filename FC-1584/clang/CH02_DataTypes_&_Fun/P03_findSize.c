#include<stdio.h>

void main(){
    char ch;
    int size;

    size = sizeof(ch);
    printf("size of character : %d byte \n", size);

    size = sizeof(int);
    printf("size of integer : %d byte\n", size);
    
}