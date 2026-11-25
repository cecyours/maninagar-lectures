import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
cols = pd.DataFrame({
 "income": [40, 45, 50, 55, 80, 85, 90, 95],
 "score": [62, 65, 68, 70, 82, 85, 88, 90],
})

print(round(cols["income"].corr(cols["score"]), 3))

scaled = StandardScaler().fit_transform(cols)
print(scaled)
print("--------")
pca = PCA(n_components=2,random_state=0)
pcs = pca.fit_transform(cols)
print(pcs)
print("---------")
print(pca.explained_variance_ratio_.round(3))
print(pcs.round(2))