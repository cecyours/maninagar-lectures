#include<stdio.h>
struct student
{
    int id;
    char name[100];
};
void main()
{
    struct student s ={1,"harshita"},*ptr;

    ptr = &s;

    printf("Data using s : %d,%s\n",s.id,s.name);
    printf("Dats using ptr : %d,%s\n",ptr->id,ptr->name);
}