#include <stdio.h>

void greeting(int count)
{
    if (count==10)
    {
        return;
    }
    printf("Hello  sir, Good morning... %d\n",count);

    count++;
    greeting(count);
    printf("  Hello  sir, Good night... %d\n",count);

}

void main()
{
    greeting(1);
}