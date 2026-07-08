#include <stdio.h>
#include <string.h>   // for strcmp(), strcpy()

int main()
{
    char words[20][100], temp[100];
    int i, j, n;

    printf("Enter no of words : ");
    scanf("%d", &n);

    printf("Enter those words ... \n");

    for(i = 0; i < n; i++)
    {
        printf("Enter a word : ");
        scanf("%s", words[i]);
    }

    // Sorting logic (Alphabetical order)
    for(i = 0; i < n; i++)
    {
        for(j = i + 1; j < n; j++)
        {
            if(strcmp(words[i], words[j]) > 0)
            {
                strcpy(temp, words[i]);
                strcpy(words[i], words[j]);
                strcpy(words[j], temp);
            }
        }
    }

    printf("\nSorted list : \n");
    for(i = 0; i < n; i++)
    {
        printf("%s\n", words[i]);
    }

    return 0;
}
