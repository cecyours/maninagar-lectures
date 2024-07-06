#include <stdio.h>
#include <stdlib.h>
struct Node
{

    int data;
    struct Node *next;

} *head = NULL;

void insert(int new_data)
{
    struct Node *newNode, *temp;

    newNode = (struct Node *)malloc(sizeof(struct Node));

    newNode->data = new_data;
    newNode->next = NULL;

    if (head == NULL)
    {
        head = newNode;
        printf("%d is inserted -- succefully\n", newNode->data);
        return;
    }

    temp = head;

    while (temp->next)
    {
        temp = temp->next;
    }

    temp->next = newNode;
    printf("%d is inserted succefully\n", newNode->data);
}

void display()
{
    struct Node *temp;

    if (head == NULL)
    {
        printf("There no data to display...\n");
        return;
    }

    temp = head;

    while (temp)
    {
        printf("[ %2d ]", temp->data);
        temp = temp->next;
    }
}
void main()
{

    int choice;
    int data;
    printf("Info : \n");
    printf("Enter 1 for display ; \n");
    printf("Enter 2 for insert ; \n");
    printf("Enter 3 for exit ; \n");

    do
    {
        printf("\n\nEnter the choice : ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            display();
            break;

        case 2:
            printf("Enter new Number : ");
            scanf("%d", &data);
            insert(data);
            break;

        case 3:
            exit(0);
            break;
        default:
            break;
        }

    } while (choice != 3);
}