#include <stdio.h>

void swap(int n)
{
    if (n == 0)
        return;
    printf("hello world income\n");
    n--;
    swap(n);
    printf("-- -- hello world outcome\n");
}

int main()
{
    swap(5);
    return 0;
}


int findMax(int a, int b, int c) {
    int max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}
