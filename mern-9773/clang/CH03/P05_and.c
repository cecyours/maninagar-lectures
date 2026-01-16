#include<stdio.h>

void main(){
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks >= 33 && marks <= 100)
    {
        /* code */
        printf("Pass");
    }else{
        printf("fail");
    }
    
}