#include<stdio.h>

void main(){
    int a[100];
    int i,n;

    printf("Enter the number: ");
    scanf("%d", &n);

    printf("Enter the data: ");
    for(i=0; i<n; i++){
        printf("Enter a[%d] = ", i);
        scanf("%d",&a[i]);
    }

    for(i=0; i<n; i++){
        printf("Data of a[%d] = %d\n" ,i,a[i]);
    }
}