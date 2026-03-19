#include<stdio.h>
#include<stdlib.h>

struct Box
{
    /* data */
    int data;
    struct Box *next;
} *head = NULL;

void insert(int data){
    struct Box *tempBox, *newBox;

    newBox = (struct Box*) malloc(sizeof(struct Box *));

    newBox->data = data;
    newBox->next = NULL;

    if(head == NULL){
        head = newBox;
        printf("%d inserted as head node\n", data);
        return;
    }

    tempBox = head;

    while (tempBox->next)
    {
        /* code */
        tempBox = tempBox->next;
    }
    tempBox->next = newBox;

    printf("%d inserted!! \n", data);     
    
}

void search(int data){
    int f = 0;
    struct Box *tempBox;

    if(head == NULL){
        printf("there is no data to search !!");
        return;
    }

    tempBox = head;

    while (tempBox){
        if(tempBox->data == data){
            f = 1;
            printf("Element {%d} found!\n", data);
        }
        tempBox = tempBox->next;
    }
    if(!f){
        printf("there is no record with {%d} data !!\n", data);
    }
    
}

void deleteBox(int data){
    struct Box *tempBox;

    if(head == NULL){
        printf("there is no data to delete !!");
        return;
    }

    tempBox = head;

    while (tempBox)
    {
        /* code */
        if (tempBox->next){
            if(tempBox->next->data == data){
                tempBox->next = tempBox->next->next;
            }
        }
        tempBox = tempBox->next;
    }
    
}

void display(){
    struct Box *tempBox;

    if (head == NULL)
    {
        printf("no data to display !!");
        return;
    }
    tempBox = head;

    printf("\n");
    while(tempBox){
        printf("%d => ", tempBox->data);

        if (tempBox->next)
        {
            printf("%d ", tempBox->next->data);
        }
        else
        {
            printf("NULL");
        }
        tempBox =tempBox->next;
    }
    printf("\n"); 

}

void main(){
    int choice;
    int data;

    do {
        printf("\n\n == == === Options == == === \n");
        printf("\n Enter 1 for insert : ");
        printf("\n Enter 2 for search : ");
        printf("\n Enter 3 for delete : ");
        printf("\nEnter 4 for display : ");
        printf("\n   Enter 5 for exit : ");
        printf("\n\n Enter choice : ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            /* code */
            printf("Enter data to insert: ");
            scanf("%d", &data);
            insert(data);
            break;
        
        case 2:
            /* code */
            printf("Enter data to search: ");
            scanf("%d", &data);
            search(data);
            break;

        case 3:
            /* code */
            printf("Enter data to Delete: ");
            scanf("%d", &data);
            deleteBox(data);
            break;

        case 4:
            /* code */
            display();
            break;

        default:
        exit(0);
            break;
        }
    } while(1);
}