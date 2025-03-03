#include<stdio.h>

struct Student{
    int id;
    char name[100];
};
void main()
{
    struct Student s={10,"Master"}, *ptr;

    ptr = &s;

    printf("Data using s : %d, %s\n",s.id, s.name);
    printf("Data using ptr : %d, %s\n",ptr->id, ptr->name);
} 