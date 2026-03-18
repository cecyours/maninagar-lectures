#include <stdio.h>

int main() {
    char str[100];
    int i, count = 0;

    printf("Enter a string: ");
    gets(str);

    for(i=0; str[i] != '\0'; i++) {
        if(str[i] >= '0' && str[i] <= '9') {
            count++;
        }
    }

    printf("Total digits = %d", count);

    return 0;
}   