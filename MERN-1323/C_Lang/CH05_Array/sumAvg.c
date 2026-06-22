#include<stdio.h>

void main(){
    float a[100], avg, sum=0;
    int i,n;

    printf("Enter the size: ");
    scanf("%d", &n);

    printf("Enter The Data: \n");

    for(i=0; i<n; i++){
        printf("Enter a[%d] = " , i);
        scanf("%f", &a[i]);

        sum = sum + a[i];
    }

    avg = sum/n;

    printf("\n The Array \n");

    for(i=0; i<n; i++){
        printf("Enter a[%d] = %.2f \n" , i,a[i]);
    }
    
    printf("\n sum = %2.f \t", sum);
    printf("\n avg = %2.f ", avg);
}