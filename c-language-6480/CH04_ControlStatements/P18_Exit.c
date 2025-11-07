#include <stdio.h>
#include <stdlib.h>

int main() {
    int num;

    printf("Enter number: \n");
    scanf("%d", &num);
    
    if (num < 0) {
        printf("%d is -ve.. exiting...\n", num);
        exit(1); 
    }

    printf("Entered number is %d\n", num);
    return 0;
}
