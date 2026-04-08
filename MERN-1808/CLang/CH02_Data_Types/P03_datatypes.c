#include<stdio.h>
int main(){
    int age;
    int age2;
    printf("Enter age: ");
    scanf("%d",&age);
    printf("Enter age 2: ");
    scanf("%d",&age2);

    printf("your age is : %d",age);
    printf("\nyour age 2 is : %d",age2);
    printf("\naddition : %d",age + age2);
    printf("\nsubtraction : %d",age - age2);
    printf("\nmultiplication : %d",age * age2);
    printf("\ndivision : %d",age / age2);

    return 0;
}