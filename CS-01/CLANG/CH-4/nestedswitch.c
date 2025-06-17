#include <stdio.h>
#include <conio.h>

int main()
{
    char div;
    int rollNo;
    printf("Enter the div-rollno like [ A-42 ]: ");
    scanf("%c-%d", &div, &rollNo);

    if (rollNo < 0 || rollNo > 60)
    { 
        printf("invalid rollno..");
    }
    switch (div)
    {
    case 'A':
        switch (rollNo % 5) // remider
        {
        case 0:
            printf("Your group is (A-1) Marvel sp.\n");
            break;
        case 1:
            printf("Your group is (A-2) Wolverines.\n");
            break;
        case 2:
            printf("Your group is (A-3) spy men.\n");
            break;
        case 3:
            printf("Your group is (A-4) schemes.\n");
            break;
        case 4:
            printf("Your group is (A-5) pogies.\n");
            break;
        }
        break;

    case 'B':
        switch (rollNo % 4)
        {
        case 0:
            printf("Your group is (B-1) Dories.\n");
            break;
        case 1:
            printf("Your group is (B-2) rings of hell.\n");
            break;
        case 2:
            printf("Your group is (B-3) Sypher.\n");
            break;
        case 3:
            printf("Your group is (B-4) gamers.\n");
            break;
        case 4:
            printf("Your group is (B-5) paapi.\n");
            break;
        }
        break;

    case 'C':
        switch (rollNo % 3)
        {
        case 0:
            printf("Your group is (C-1) Lokians.\n");
            break;
        case 1:
            printf("Your group is (C-2) Poly-sons.\n");
            break;
        case 2:
            printf("Your group is (C-3) mentors.\n");
            break;
        }
        break;

    case 'D':
        switch (rollNo % 2)
        {
        case 0:
            printf("Your group is (D-1) The watchers.\n");
            break;
        case 1:
            printf("Your group is (D-2) Winners.\n");
            break;
        }
        break;

    default: // if a wrong div entered.
        printf("Invalid division....");
    }

    return 0;
}
