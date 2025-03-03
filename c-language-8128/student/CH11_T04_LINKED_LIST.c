#include <stdio.h>
#include <stdlib.h>
struct Box
{
    int data;
    struct Box *next;
} *head = NULL;

void insert(int data)
{
    struct Box *tempBox, *newBox;

    newBox = (struct Box *)malloc(sizeof(struct Box *));

    newBox->data = data;
    newBox->next = NULL;

    if (head == NULL)
    {
        head = newBox;
        printf("%d inserted !!\n", data);
        return;
    }

    tempBox = head;

    while (tempBox->next)
    {
        tempBox = tempBox->next;
    }
    tempBox->next = newBox;

    printf("%d inserted !!\n", data);
}

void search(int data)
{
    int f = 0;
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("There is no data!!");
        return;
    }
    tempBox = head;

    while (tempBox)
    {
        if (tempBox->data == data)
        {
            f = 1;
            printf("element {%d} found !!!\n", data);
        }
        tempBox = tempBox->next;
    }

    if (!f)
    {
        printf("There is no such data{%d}!!\nTry with another data !!\n", data);
    }
}

void display()
{
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("No data to display!!");
        return;
    }

    tempBox = head;

    printf("\n");

    while (tempBox)
    {
        printf("\n%d => ", tempBox->data);

        if (tempBox->next)
            printf("%d ", tempBox->next->data);
        else
        {
            printf("NULL");
        }

        tempBox = tempBox->next;
    }
    printf("\n");
}

void deleteBox(int data)
{
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("There is no data to delete!!");
    }

    tempBox = head;

    while (tempBox)
    {
        if (tempBox->next)
        {
            if (tempBox->next->data == data)
            {
                tempBox->next = tempBox->next->next;
            }
        }
        tempBox = tempBox->next;
    }
}
void main()
{

    int choice;
    int data;

    do
    {
        printf("\n-------------Options-----------------\n");
        printf(" Enter 1 for insert : \n");
        printf(" Enter 2 for search : \n");
        printf(" Enter 3 for delete : \n");
        printf("Enter 4 for display : \n");
        printf("   Enter 5 for exit : \n");
        printf("\n\n   Enter choice : ");
        scanf("%d", &choice);
        printf("\n");

        switch (choice)
        {
        case 1:
            printf("Enter data to insert : ");
            scanf("%d", &data);
            insert(data);
            break;

        case 2:
            printf("Enter data to search : ");
            scanf("%d", &data);
            search(data);
            break;

        case 3:
            printf("Enter data to delete : ");
            scanf("%d", &data);
            deleteBox(data);
            break;

        case 4:
            display();
            break;

        default:
            exit(0);
            break;
        }
    } while (1);
}