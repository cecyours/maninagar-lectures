#include<stdio.h>

void increment(double salary){
    salary += 5000;
    printf("Salary in function %7.lf\n", salary);
}

void main(){
    double sal;

    printf("Enter the salary: ");
    scanf("%lf", &sal);

    printf("Salary before Function %7.lf\n",sal);
    increment(sal);
    printf("Salary after Function %7.lf\n",sal);
}