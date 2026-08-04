#include<stdio.h>

int main() {
    
    int num[5] = {12, 67, 10, 76, 69};

    printf("First Data : %d\n", num[0]);
    printf("Second last Data : %d\n", num[3]);
    printf("Last Data : %d\n", num[4]);

    printf("\n----------------------------------\n\n");

    for (int i = 0; i < 5; i++)
    {
        /* code */
        printf("Data num[%d] = %d\n", i, num[i]);
    }
    
   
    
    return 0;
   
}
