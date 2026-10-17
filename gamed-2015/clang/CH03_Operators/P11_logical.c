#include<stdio.h>

int main() {
    int x = 10, y = 20;

    printf("x > 5 && y > 15: %d\n", x > 5  && y > 15);
    printf("x < 5 || y > 15: %d\n", x < 5  || y > 15);
    printf("!(x == 10): %d\n", !(x == 10));

    return 0 ;
}