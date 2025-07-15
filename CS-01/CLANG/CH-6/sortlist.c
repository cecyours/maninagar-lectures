#include <stdio.h>
#include <string.h>

int main()
{
    char words[20][100], temp[100];
    int i, j, n;

    printf("Enter The Number : ");

    scanf("%d", &n);

    printf("Enter Those Words :\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a word : ");
        scanf("%s", words[i]);
    }

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {

            printf("%d -  i \n", i);

            if (strcmp(words[i], words[j]) > 0)
            {

                printf("%d - j \n", j);

                printf("%s - temp\n", temp);

                printf("%s - word[i]\n", words[i]);
                strcpy(temp, words[i]);

                printf("%s - word[j]\n", words[j]);
                strcpy(words[i], words[j]);

                printf("%s - temp\n", temp);
                strcpy(words[j], temp);
            }

            printf("not going in \n");
        }
    }

    printf("\n sorted List : \n");
    for (i = 0; i < n; i++)
    {
        printf("%s\n", words[i]);
    }
    return 0;
}
