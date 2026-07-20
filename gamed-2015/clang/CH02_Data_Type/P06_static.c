#include<stdio.h>

void pal() {
    static int count = 0;

    count++;
    printf("Count = %d\n", count);
}

int main() {
    
    pal();
    pal();
    pal();

    pal();


    return 0;
}