#include <stdio.h>
#include <string.h>

struct Student {
    int rollNo;
    char name[50];
    float marks;
};

void display(struct Student s) {

    printf("Roll No: %d\n", s.rollNo);
    printf("Name: %s\n", s.name);
    printf("Marks: %.2f\n", s.marks);

}
int main() {

    struct Student s1 = {101, "Alice", 90.5};
    display(s1); 

    return 0;
}