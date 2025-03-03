#include <stdio.h>
struct Book
{
    char book_name[100];
    int book_pages;
    char book_author[100];
    float book_edition;
};

void main()
{
    struct Book b;  // declaration

    printf("Enter Book Name : "); // initialization
    scanf("%s", &b.book_name);

    printf("Enter Book Pages : ");
    scanf("%d", &b.book_pages);

    printf("Enter Book Author : ");
    scanf("%s", &b.book_author);

    printf("Enter Book Edition : ");
    scanf("%f", &b.book_edition);

    printf("Book Name : %s, Book Pages : %d, Book Author : %s, Book Edition : %f\n", b.book_name, b.book_pages, b.book_author, b.book_edition);
}