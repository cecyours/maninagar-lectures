#include <stdio.h>

// int main()
// {

//     char *names[] = {"Alice", "Bob", "Charlie"};

//     printf("%d\n", names);

//     for (int i = 0; i < 3; i++)
//     {
//         printf("%s\n", names[i]);
//     }

//     return 0;
// }

void update(int *x) 
{
    *x = *x + 10;
}

void main()
{
    int num = 5;
    update(&num);
    printf("Updated number: %d", num); // prints 15
}
