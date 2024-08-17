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
        printf("there is no data to search !!");
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
        printf("there is no record with {%d} data !!\n", data);
    }
}
void deleteBox(int data)
{
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("there is no data to search !!");
        return;
    }

    tempBox = head;

    while (tempBox)
    {
        
        if(tempBox->next)
        {
            if(tempBox->next->data==data)
            {
                tempBox->next = tempBox->next->next;
            }
        }
        tempBox= tempBox->next;
        
    }
    

}
void display()
{
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("no data to display !!");
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
    insert(19);
    insert(29);
    insert(38);
    insert(48);
    display();

    search(48);
    deleteBox(38);
    display();
}