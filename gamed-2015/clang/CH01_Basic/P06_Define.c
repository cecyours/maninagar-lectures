#include<stdio.h>

#define A 100

int main() {
    printf("value of A : %d\n",A);
    
    #undef A
    #define A 200
    
    printf("new value of A : %d\n",A);

    return 0;
}