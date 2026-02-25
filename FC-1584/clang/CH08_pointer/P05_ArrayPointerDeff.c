#include<stdio.h>

int main(){
    int arr[5] = { 10, 20, 30, 40, 50 };
    int *p1 = &arr[4]; 
    int *p2 = &arr[0]; 
    
    printf("number of elements between P1 and P2 : %ld\n", p1 - p2);
    return 0;
}