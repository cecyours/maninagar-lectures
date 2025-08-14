from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,classification_report

mails = [
    "Congratulations! You've won a free iPhone",              # 1
    "Act now to claim your $500 voucher",                     # 1
    "You've been selected for a luxury cruise trip",          # 1
    "Team lunch confirmed for Friday",                        # 0
    "Win a brand new Tesla today!",                           # 1
    "Monthly performance report attached",                    # 0
    "Get rich quick with this secret trick",                  # 1
    "Budget review meeting on Wednesday",                     # 0
    "Click here to unlock your prize",                        # 1
    "Reminder: Doctor's appointment tomorrow",                # 0
    "Limited-time offer: Flat 90% off on all items",          # 1
    "Your password was changed successfully",                 # 0
    "Don't miss this once-in-a-lifetime opportunity!",        # 1
    "Project deadline extended to next week",                 # 0
    "Earn money from home without any investment",            # 1
    "Class schedule for the upcoming semester",               # 0
    "You have an unclaimed reward waiting",                   # 1
    "Invitation to join the alumni networking event",         # 0
]

labels = [
    1,1, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0
]


vectorizer = CountVectorizer()

X = vectorizer.fit_transform(mails)


X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3, random_state=42)


model = MultinomialNB()

model.fit(X_train, y_train) # train the model

y_pred = model.predict(X_test) # predict the model on test data




print(accuracy_score(y_test,y_pred))

print(classification_report(y_test,y_pred))


m = ["win the car today","You have an unclaimed reward waiting for you"]

mt = vectorizer.transform(m)

print(model.predict(mt))







