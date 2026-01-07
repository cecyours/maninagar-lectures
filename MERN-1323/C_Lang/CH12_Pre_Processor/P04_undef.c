#include<stdio.h>

#define PI 3.14
#define MESSAGE "Hello Rosewin"

int main(){
    printf("%s\n", MESSAGE);
    printf("PI = %.2f\n", PI);

    #undef PI

    #define PI 3.14159

    printf("New PI = %.5f\n", PI);

    return 0;
}