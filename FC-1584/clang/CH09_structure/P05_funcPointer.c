#include <stdio.h>
#include <string.h>

struct Student {
    int rollNo;
    char name[50];
    float marks;
};

void updateMarks(struct Student *s, float newMarks) {
    s->marks = newMarks; 
}

int main() {

    struct Student s1 = {11, "Rosewin", 85.0};

    printf("Before update: %.2f\n", s1.marks);
    updateMarks(&s1, 95.0); 
    printf("After update: %.2f\n", s1.marks);

    return 0;
}