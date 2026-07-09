#include <stdio.h>
#include <string.h>

union Data {
    int rollno;
    float marks;
    char name[50];
};

int main(){

    union Data d;

    d.rollno = 10;
    printf("Roll Number : %d \n", d.rollno);

    d.marks = 90;
    printf("Marks : %.2f \n", d.marks);

    strcpy(d.name, "Rosewin");
    printf("Name = %s\n", d.name);

    printf("After string assignment: rollno = %d, marks = %.2f\n", d.rollno, d.marks);

    return 0;
}