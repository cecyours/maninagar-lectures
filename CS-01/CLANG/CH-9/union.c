#include <stdio.h>

union Data
{
    int id;
    char str[20];
    float marks;
};

int main()
{

    union Data data;

    data.id = 10;

    printf("After setting int: %d\n", data.id);

    return 0;
}
