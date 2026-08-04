#include<stdio.h>

int main() {
    
    int num[100], n, i;

    printf("Enter the size of array : ");
    scanf("%d", &n);

    printf("Enter the Data: \n");
    for (i = 0; i < n; i++)
    {
        /* code */
        printf("Enter num[%d] = ", i);
        scanf("%d", &num[i]);
    }
    
    printf("\n----------------------------------\n\n");

    for (i = 0; i < n; i++)
    {
        /* code */
        printf("Data num[%d] = %d\n", i, num[i]);
    }
    
   
    
    return 0;
   
}
