#include<stdio.h>

int main(){

    float marks;

    printf("Enter Marks: ");
    scanf("%f", &marks);

    if( marks >= 33 && marks <= 100) {
        printf("Pass");
    } else {
        printf("Better luck Next TIME !! ");
    }


   return 0;
}