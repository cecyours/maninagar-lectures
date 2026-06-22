#include <stdio.h>

void main (){
    int data ,n , a[100] ,i ;
    int f = 0;

    printf("enter the number:");
    scanf("%d", &n);

    printf("enter the array: \n");
    for ( i = 0; i < n; i++)
    {
        printf("data of a[%d] = ",i);
        scanf("%d", &a[i]);
    }

    printf("enter  the data search :");
    scanf("%d", &data);

    for ( i = 0; i < n; i++)
    {
        if(data == a[i]){
            printf("%d found at %d the index.\n",data, i);
            f = 1;
        }
    }

    if (!f)
    {
        printf("sorry, %d this number is not available in directory", data);
    }
}