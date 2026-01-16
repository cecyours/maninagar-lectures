#include <stdio.h>

int main() {
    int attendance, medical;

    printf("Enter attendance percentage: ");
    scanf("%d", &attendance);

    printf("Medical leave (1/0): ");
    scanf("%d", &medical);

    if (attendance < 60 && !medical) {
        printf("Attendance Warning Issued");
    } else {
        printf("No Warning");
    }

    return 0;
}
