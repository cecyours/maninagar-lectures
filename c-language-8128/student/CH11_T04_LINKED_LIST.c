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
void main()
{
    int data;

    printf("Enter the number to diplay : ");
    scanf("%d", &data);

    insert(data);
    display();
}