
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# 1 means spam, 0 mean non spam
data = {
    "messages": [
        # Spam
        "you won a car",
        "Click link to achieve 1 Cr",
        "Congratulations! You won a lottery",
        "Claim your free prize now",
        "You have won 50 lakh rupees",
        "Get a free iPhone today",
        "Urgent! Claim your reward",
        "You are selected for a cash prize",

        # Not Spam
        "Can you send me the project report",
        "Let's meet tomorrow at 10 AM",
        "Please call me when you are free",
        "Your meeting is scheduled for Monday",
        "Don't forget to bring your documents",
        "Can you help me with this assignment",
        "I will reach home by 8 PM",
        "Please send me the notes from today's class"
    ],
    "label": [
        1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0
    ]
}

X = data['messages'] # inputs
y = data['label'] # outputs, already in number

vector = CountVectorizer()
X_vectorizer = vector.fit_transform(X)

model = MultinomialNB()
model.fit(X_vectorizer,y)


msg = input("Enter a msg to promt : ")
test_msg = ["congo, you won a laptop","hello, mohit","Please, claim your lottery",msg]

test_vectorizer = vector.transform(test_msg)

pred = model.predict(test_vectorizer)

# print(pred)

for i in range(len(test_msg)):
    print(f"{"spam" if pred[i]==1 else "not spam"} : {test_msg[i]}")
