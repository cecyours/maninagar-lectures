#include<stdio.h>
#define max 100

int main() {

    printf("Value of max = %d\n", max);

    #undef max

    #define max 200

    printf("Value of max = %d\n", max);


    return 0;
}