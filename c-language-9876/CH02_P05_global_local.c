
#include<stdio.h>

int i=721; // global

void display()
{
    printf("i : %d\n",i);
}

int main()
{
    int j; // local due to curly braces

    display();

    printf("the original : %d\n",i);
    printf("the local : %d\n",j);
}