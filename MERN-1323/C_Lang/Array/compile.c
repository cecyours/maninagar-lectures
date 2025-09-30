#include<stdio.h>

void main(){
    int a[5] = {23, 56, 67, 34, 88};
    int i;

    printf("First Index %d\n", a[0]);
    printf("Last Index %d\n", a[4]);

    for(i=0; i<5; i++){
        printf("Data of a[%d] = %d\n" ,i,a[i]);
    }
}