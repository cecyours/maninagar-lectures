#include <stdio.h>

int main()
{
    char div;
    int rollno;

    printf("Enter the div-rollno like [ A-42 ]: ");
    scanf(" %c-%d", &div, &rollno);   

    if (rollno <= 0 || rollno > 60)
    {
        printf("Invalid roll number...");
        return 0;  
    }

    switch (div)
    {
        case 'A':
            switch (rollno % 5)
            {
                case 0: printf("Your group is (A-1) Marvel sp.\n"); break;
                case 1: printf("Your group is (A-2) Wolverines.\n"); break;
                case 2: printf("Your group is (A-3) Spy Men.\n"); break;
                case 3: printf("Your group is (A-4) Schemes.\n"); break;
                case 4: printf("Your group is (A-5) Pogies.\n"); break;
            }
            break;

        case 'B':
            switch (rollno % 5)
            {
                case 0: printf("Your group is (B-1) Dories.\n"); break;
                case 1: printf("Your group is (B-2) Rings of Hell.\n"); break;
                case 2: printf("Your group is (B-3) Sypher.\n"); break;
                case 3: printf("Your group is (B-4) Gamers.\n"); break;
                case 4: printf("Your group is (B-5) Paapi.\n"); break;
            }
            break;

        case 'C':
            switch (rollno % 3)
            {
                case 0: printf("Your group is (C-1) Lokians.\n"); break;
                case 1: printf("Your group is (C-2) Poly-sons.\n"); break;
                case 2: printf("Your group is (C-3) Mentors.\n"); break;
            }
            break;

        case 'D':
            switch (rollno % 2)
            {
                case 0: printf("Your group is (D-1) The Watchers.\n"); break;
                case 1: printf("Your group is (D-2) Winners.\n"); break;
            }
            break;

        default:
            printf("Invalid division...");
    }

    return 0;
}
