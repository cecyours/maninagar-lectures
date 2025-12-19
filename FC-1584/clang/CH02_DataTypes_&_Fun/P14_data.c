#include <stdio.h>

void main() {
    char name[50];      
    int rollNo;
    float marks;

    printf("Enter name of Student : ");
    scanf("%s", name);  

    printf("Enter rollno : ");
    scanf("%d", &rollNo);

    printf("Enter marks : ");
    scanf("%f", &marks);

    printf("\n\n");

    printf("%10s | %6s | %s\n", "NAME", "ROLLNO", "MARKS");
    printf("%10s + %6s + %s\n", "--------", "------", "-------");

    printf("%10s | %6d | %.2f\n", name, rollNo, marks);

}
