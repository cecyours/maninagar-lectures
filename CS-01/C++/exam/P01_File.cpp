#include <iostream>
#include <string>
using namespace std;

int main() {
    string sentence, word;

    cout << "Enter a sentence: ";
    getline(cin, sentence);

    cout << "Enter the word to remove: ";
    cin >> word;

    // Find the position of the word
    size_t pos = sentence.find(word);

    if (pos != string::npos) {
        // Remove the word
        sentence.erase(pos, word.length());

        // If there is an extra space, remove it
        if (sentence[pos] == ' ')
            sentence.erase(pos, 1);

        cout << "\nUpdated Sentence: " << sentence << endl;
    }
    else {
        cout << "\nWord not found!" << endl;
    }

    return 0;
}
