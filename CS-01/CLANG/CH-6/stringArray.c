#include <stdio.h>

int main()
{

    // Compile Time
    // char names[5][100] = {"Sia", "Rio", "Heema", "Jiya", "Rohit"};

    // int i, n = 5;

    // for (i = 0; i < n; i++)
    // {
    //     printf("%s\n", names[i]);
    // }

    // Run Time  Time
    char list[20][100]; // max 20 students
    int i, n;

    printf("Enter no of Students [1-20] : ");
    scanf("%d", &n);

    printf("Enter the list  : \n ");

    for (i = 0; i < n; i++)
    {
        printf("Enter name of student %d : ", i + 1); // index+1
        scanf("%s", list[i]);
    }

    printf("\nEntered List : \n");
    for (i = 0; i < n; i++)
        printf("Student %d : %s\n", i + 1, list[i]);

    return 0;
}
