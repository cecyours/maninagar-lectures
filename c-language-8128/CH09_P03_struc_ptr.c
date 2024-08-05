#include <stdio.h>
struct Node
{
    int id;
    int data;
};

void main()
{
    struct Node *n;

    printf("Enter id : ");
    scanf("%d", &n->id);

    printf("Enter data : ");
    scanf("%d", &n->data);

    printf("your id : %d\n data => %d\n", n->id, n->data);
}