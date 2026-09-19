import type { Tutorial } from "@/data/tutorials";

// === AI · DATA SCIENCE — NumPy, Pandas, visualization, EDA ===
// ml-pipeline → ds-numpy → ds-numpy-operations → ds-pandas-series → ds-pandas-dataframe
// → ds-data-cleaning → ds-missing-data → ds-outliers → ds-categorical-encoding
// → ds-matplotlib → ds-seaborn → ds-eda → ds-correlation → ds-datasets
// → ds-stats-basics → ds-feature-engineering → ds-data-augmentation
// → ds-time-series-intro → (dl-neuron — ai-deep-learning.ts)

export const aiDataScience: Tutorial[] = [
  {
    slug: "ds-numpy",
    categoryId: "ai",
    title: "NumPy — Arrays",
    marathiTitle: "NumPy — संख्यांचे arrays, गती आणि गणिताचा पाया",
    level: "intermediate",
    minutes: 30,
    summary: "NumPy म्हणजे संख्यांना वेगवान गणित करणाऱ्या library. ndarray, आकार (shape), indexing आणि मूलभूत गणिती operation.",
    sections: [
      {
        title: "NumPy — संख्यांचे arrays म्हणजे काय?",
        content: "Python list गणित आकड्यांसाठी धीमे — NumPy चा ndarray एकच homogeneous array मध्ये एकाच वेळी अनेक मूल्यांवर गणित करतो.\nफरक: vectorized गणित (संपूर्ण array वर एकाच फेरीत function) आणि memory व्यवस्थापन उत्तम.\nML data विशेषतः matrix रूपात असतो — X हा (n_samples, n_features) — त्यामुळे NumPy हाच पाया.",
      },
      {
        title: "का शिकावे? NumPy — arrays चे फायदे आणि महत्त्व",
        content: "Pandas, scikit-learn, PyTorch सर्व आत NumPy arrays वर बांधले आहेत — कुठेही आकडे तेच रूप.\nवेगवान loops आणि broadcasting ने कामाचा वेग अनेक पटींनी वाढतो.\nवाचून न थांबता array वर +,* आणि shape तपासा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ list vs array गोंधळ — array वर सर्व operations element-wise होतात.\n✗ Wrong dtype — string मिळाल्यावर numeric operation चुकते; dtype तपासा.\n✗ Axis गोंधळ — axis=0 म्हणजे rows ची दिशा (प्रत्येक column ची बेरीज).\n✗ Copy vs view — slicing ने view मिळतो; बदल मूळ array वर प्रतिबिंबित होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Array बनवणे",
        content: "np.array([...]) ने list मधून array, np.zeros/np.ones/np.arange ने आकारानुसार सरळ array.\n.shape वरील आकार (rows, cols), .dtype वरील data type, .ndim वरील dimensions.",
        code: `import numpy as np
x = np.array([[1, 2, 3], [4, 5, 6]])
print(x.shape, x.ndim, x.dtype)
print(x[0, 1])       # 2
z = np.zeros((2, 3))
print(z)`,
        codeLanguage: "python",
        output: `(2, 3) 2 int64
2
[[0. 0. 0.]
 [0. 0. 0.]]`,
      },
      {
        title: "Vectorized गणित",
        content: "Element-wise: +, -, *, /, ** एकाच वेळी संपूर्ण array वर चालतात — loops नको. Broadcasting म्हणजे (2,1) आणि (3,) सारखे वेगवेगळे आकार एकत्र मिळणे.",
        code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([10, 20, 30])
print(a + b)       # [11 22 33]
print(a * 2)       # [2 4 6]
print(np.mean(a))  # 2.0`,
        codeLanguage: "python",
        output: `[11 22 33]
[2 4 6]
2.0`,
      },
      {
        title: "सारांश — NumPy",
        content: "ndarray गती + memory. shape/dtype/indexing समज. vectorized operations loops पेक्षा वेगवान. पुढील धडा: बदल करणाऱ्या operations — reshape, flatten, indexing.",
      },
    ],
    practiceQuestions: [
      "shape आणि dtype कसे पाहतात?",
      "list वर * हे array वर * पेक्षा वेगळे का असते?",
      "Broadcasting म्हणजे काय — एक छोटे उदाहरण?",
    ],
    quiz: [
      { question: "NumPy चा मुख्य फायदा?", options: ["vectorized गती", "canvas", "browser", "सौंदर्य"], correct: 0 },
      { question: "array चा आकार कसा पाहतात?", options: [".shape", ".len()", ".size()", ".dims"], correct: 0 },
      { question: "a*2 काय देतो?", options: ["प्रत्येक element दुप्पट", "सूची दुप्पट", "error", "ऋण"], correct: 0 },
      { question: "np.zeros((2,3)) चा shape?", options: ["(2,3)", "(3,2)", "(2,)", "(6)"], correct: 0 },
      { question: "data type कुठे असतो?", options: [".dtype", ".type", ".kind", ".names"], correct: 0 },
    ],
    related: ["ds-pandas-series", "ml-scikit-learn", "ai-python"],
    prev: "ml-pipeline",
    next: "ds-numpy-operations",
  },
  {
    slug: "ds-numpy-operations",
    categoryId: "ai",
    title: "NumPy — Reshape, Indexing, Slicing",
    marathiTitle: "NumPy operations — reshape, booleans, slicing — data हाताळणीच्या चाली",
    level: "intermediate",
    minutes: 30,
    summary: "आकडे योग्य आकारात आणणे — reshape, flatten, boolean masking, slicing आणि axis च्या दिशा.",
    sections: [
      {
        title: "NumPy operations — reshape, indexing, slicing म्हणजे काय?",
        content: "डेटा वेगवेगळ्या आकारांत येतो — model ला X (samples, features) हवे. reshape, flatten, transpose ने आकार साधला जातो.\nSlicing (x[:5], x[:,1]) ने भाग निवडतात आणि boolean masking (x[x>3]) ने condition निवड.\nहे मूलभूत operations आकड्यांच्या हाताळणीचा दैनंदिन पाया आहेत.",
      },
      {
        title: "का शिकावे? NumPy operations — reshape, indexing, slicing चे फायदे आणि महत्त्व",
        content: "ML data नेहमी (samples, features) च्या आकारात बसवावा लागतो — हे operations त्यातला मुख्य भाग.\nBoolean mask ने condition नुसार निवड त्वरित होते — loops व धोका कमी.\nवाचून न थांबता वेगवेगळ्या shape वर reshape प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ reshape मध्ये आकार चुकणे — एकूण elements समान हवे; -1 ने आपोआप.\n✗ View vs copy — slicing हा view; बदल मूळ array बदलतो.\n✗ Axis उलट — axis=0 म्हणजे प्रत्येक column ची बेरीज, axis=1 म्हणजे प्रत्येक row ची.\n✗ Boolean vs integer index — condition चा निकाल boolean array असतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Reshape आणि flatten",
        content: "reshape ने आकार बदलतो (एकूण elements कायम), flatten सपाट 1D बनवतो, transpose axes ची दिशा बदलतो.\nreshape(-1, 1) हे एका column मध्ये बनवते — model ची 2D आवश्यकता पूर्ण होते.",
        code: `import numpy as np
x = np.arange(6)              # [0 1 2 3 4 5]
print(x.reshape(2, 3))
print(x.reshape(-1, 1).shape) # (6,1)
print(x[[True, True, False, False, False, True]])`,
        codeLanguage: "python",
        output: `[[0 1 2]
 [3 4 5]]
(6, 1)
[0 1 5]`,
      },
      {
        title: "Slicing आणि conditions",
        content: "x[2:5] ने भाग, x[:, 0] ने पहिला column, x[x > 3] ने condition निवड. np.where ने condition चे दोन पर्याय मिळतात.",
        code: `import numpy as np
arr = np.array([10, 5, 30, 8, 20])
print(arr[arr > 8])             # [10 30 20]
print(np.where(arr > 8, "B", "S"))`,
        codeLanguage: "python",
        output: `[10 30 20]
['B' 'S' 'B' 'S' 'B']`,
      },
      {
        title: "सारांश — NumPy operations",
        content: "reshape/flatten/transpose आकार साधतात. slicing आणि boolean mask निवड. view मुळे मूळ बदलू नये याची काळजी घ्या. पुढील धडा: Pandas चा पहिला घटक — Series.",
      },
    ],
    practiceQuestions: [
      "reshape(-1,1) काय करतो?",
      "Slicing चा view मूळ array कसा बदलतो?",
      "boolean mask कसा काम करतो?",
    ],
    quiz: [
      { question: "reshape ला काय समान हवे?", options: ["एकूण elements", "rows", "dtype", "नाव"], correct: 0 },
      { question: "flatten काय करतो?", options: ["1D बनवतो", "2D बनवतो", "sort", "delete"], correct: 0 },
      { question: "arr[arr>8] हा काय?", options: ["boolean mask", "slicing", "reshape", "dtype"], correct: 0 },
      { question: "(6,) ला column बनवण्यासाठी?", options: ["reshape(-1,1)", "flatten", "transpose", "copy"], correct: 0 },
      { question: "Slicing चा बदल मूळ array वर प्रतिबिंबित होतो का?", options: ["हो, view असल्याने", "नाही कधीच", "फक्त copy मध्ये", "काही नाही"], correct: 0 },
    ],
    related: ["ds-numpy", "ds-pandas-series", "ml-train-test-split"],
    prev: "ds-numpy",
    next: "ds-pandas-series",
  },
  {
    slug: "ds-pandas-series",
    categoryId: "ai",
    title: "Pandas — Series",
    marathiTitle: "Pandas — Series, एका column ची निर्मिती आणि operations",
    level: "beginner",
    minutes: 30,
    summary: "Pandas चा एक-column डेटा प्रकार — Series. तयार करणे, index, values, size, numerical operations आणि मूलभूत तपासणी.",
    sections: [
      {
        title: "Pandas — Series म्हणजे काय?",
        content: "Series म्हणजे एका dimension ची, index असलेली संख्या/मजकूर सूची — एकच column.\nPandas DataFrame च्या आत प्रत्येक column हा Series असतो — म्हणून हा पाया महत्त्वाचा.\ndict मधून, list मधून, numpy array मधून Series बनवता येते; index स्वतः देता येतो.",
      },
      {
        title: "का शिकावे? Pandas — Series चे फायदे आणि महत्त्व",
        content: "Series वर थेट गणित, filter, missing-value तपासणी, aggregate — हेच दैनंदिन data काम.\nDataFrame समजण्याआधी series ची index/missing युक्ती नीट झाल्यावर पुढे काहीही सोपे.\nवाचून न थांबता मोजके numbers वर aggregate चाचणी करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ index मिसळणे — alignment बरोबर हवे; reindex ने दुरुस्त.\n✗ NaN गणित — सरासरी काढताना NaN काढा (dropna) नाहीतर परिणाम चुकतो.\n✗ Series vs scalar — s + 1 vs s + s.combine टाळा; broadcast समजा.\n✗ dtype बदल — string series वर numeric op चुकते; astype तपासा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Series तयार करणे",
        content: "pd.Series(data, index=[...]) — data list/dict. .values ने numpy array, .index ने labels, .size/.shape आकार.\nहेडर तपासणी: s.head(), s.describe(), s.value_counts().",
        code: `import pandas as pd
s = pd.Series([150, 200, 120, 300], index=["a", "b", "c", "d"])
print(s)
print(s.mean(), s.max())`,
        codeLanguage: "python",
        output: `a    150
b    200
c    120
d    300
dtype: int64
192.5 300`,
      },
      {
        title: "Operations आणि filtering",
        content: "s + s.head() alignment ने होते; s[s > 150] condition निवड. s.isna() ने missing ओळखा; s.dropna() ने काढा.",
        code: `print(s[s > 150])      # b, d
print(s.isna())        # सगळे False
s2 = pd.Series([90, None, 70])
print(s2.isna().sum())`,
        codeLanguage: "python",
        output: `b    200
d    300
dtype: int64
a    False
b    False
c    False
d    False
dtype: bool
1`,
      },
      {
        title: "सारांश — Series",
        content: "एक-column indexed data. index alignment, NaN काळजी, value_counts/describe. DataFrame चा पाया तयार. पुढील धडा: rows×columns — DataFrame.",
      },
    ],
    practiceQuestions: [
      "Series च्या index चा उपयोग काय?",
      "NaN असल्यास s.mean() कसा बदलतो?",
      "s[s>150] मध्ये काय होते?",
    ],
    quiz: [
      { question: "Series म्हणजे?", options: ["एक column", "संपूर्ण table", "matrix", "graph"], correct: 0 },
      { question: "labels कुठे असतात?", options: ["index", "values", "dtype", "shape"], correct: 0 },
      { question: "NaN ची संख्या कशी मोजतात?", options: ["s.isna().sum()", "s.len()", "s.count()", "s.drop()"], correct: 0 },
      { question: "value_counts काय देतो?", options: ["प्रत्येक value ची वारंवारता", "सरासरी", "सोर्ट", "dtype"], correct: 0 },
      { question: "s[s>150] काय करतो?", options: ["filtering", "copy करतो", "sort", "reindex"], correct: 0 },
    ],
    related: ["ds-pandas-dataframe", "ds-numpy", "ds-stats-basics"],
    prev: "ds-numpy-operations",
    next: "ds-pandas-dataframe",
  },
  {
    slug: "ds-pandas-dataframe",
    categoryId: "ai",
    title: "Pandas — DataFrames",
    marathiTitle: "DataFrame — rows×columns मधील मुख्य डेटा टेबल",
    level: "beginner",
    minutes: 35,
    summary: "DataFrame म्हणजे स्प्रेडशीटसारखे टेबल — rows, columns, header. तयार करणे, select rows/columns, filter, groupby चा पाया आणि वाचणे/लेखन.",
    sections: [
      {
        title: "DataFrame — rows×columns टेबल म्हणजे काय?",
        content: "DataFrame हा 2D टेबल आहे — rows (नमुने) आणि columns (features). header नावांसह.\nहेच ML मधील मुख्य स्वरूप — CSV ने अशीच टेबलं लोड होतात.\npd.DataFrame(dict) ने, CSV वरून, list of dicts ने तयार होते.",
      },
      {
        title: "का शिकावे? DataFrame चे फायदे आणि महत्त्व",
        content: "Data जवळजवळ नेहमीच टेबल रूपात असतो — वाचणे, निवडणे, बदलणे, groupby ही मुख्य कौशल्ये.\nModel ला X/y रूपात देण्यापूर्वीची सगळी तयारी DataFrame मध्येच होते.\nवाचून न थांबता छोटा df घेऊन select/filter चाचणी करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ df['col'] vs df.col — spaces असल्यास df.col चालत नाही; [] वापरा.\n✗ .iloc vs .loc — position vs label यांत गोंधळ.\n✗ Inplace बदल — नवे df परत येते; मूळ बदलायचे असेल तर assign/आधी copy.\n✗ 반복 rows करून groupby वापरणे — vectorized पद्धत तपासा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Selecting rows/columns",
        content: "df['col'] एक column, df[['a','b']] अनेक columns, df.iloc[1:3] position ने, df.loc[df['age']>20] label/condition ने.\ndf.shape (rows, cols), df.columns, df.head()/df.describe().",
        code: `import pandas as pd
df = pd.DataFrame({
    "name": ["Raj", "Sim", "Ana", "Joe"],
    "age": [24, 30, 22, 35],
    "city": ["Pune", "Mumbai", "Pune", "Delhi"],
})
print(df[df["city"] == "Pune"])
print(df.iloc[1:3])`,
        codeLanguage: "python",
        output: `  name  age  city
0  Raj   24  Pune
2  Ana   22  Pune
  name  age   city
1  Sim   30  Mumbai
2  Ana   22    Pune`,
      },
      {
        title: "Groupby — गट नुसार aggregate",
        content: "df.groupby('city')['age'].mean() — शहरानुसार average. value_counts, merge, sort_values हे सगळे टेबल शिस्तीचे.\npandas मध्ये सर्वात महत्त्वाचा नियम: नवे results परत येतात; loops टाळा.",
        code: `print(df.groupby("city")["age"].mean())
print(df.sort_values("age", ascending=False))`,
        codeLanguage: "python",
        output: `city
Delhi    35.0
Mumbai   30.0
Pune     23.0
Name: age, dtype: float64
  name  age   city
3  Joe   35  Delhi
1  Sim   30  Mumbai
0  Raj   24    Pune
2  Ana   22    Pune`,
      },
      {
        title: "सारांश — DataFrame",
        content: "rows×columns टेबल, header columns. select/filter/groupby ही मुख्य शिस्त. CSV वाचणे एकाच ओळीत. पुढील धडा: गलिच्छ data स्वच्छ करणे.",
      },
    ],
    practiceQuestions: [
      "df['col'] आणि df.col मध्ये फरक कुठे कळतो?",
      ".iloc आणि .loc मध्ये काय फरक?",
      "groupby केल्यावर परत काय मिळते?",
    ],
    quiz: [
      { question: "DataFrame म्हणजे?", options: ["2D टेबल", "फक्त 1D", "graph", "ग्राफिक"], correct: 0 },
      { question: "position ने rows कसे काढतात?", options: ["iloc", "loc", "query", "get"], correct: 0 },
      { question: "condition ने rows कसे काढतात?", options: ["df[df['age']>20]", "df.first", "df.head", "df.aggr"], correct: 0 },
      { question: "शहरानुसार सरासरी कशी?", options: ["groupby+mean", "for loop", "manual", "browser"], correct: 0 },
      { question: "उतरत्या क्रमाने कसे?", options: ["sort_values", "rev", "order", "flip"], correct: 0 },
    ],
    related: ["ds-pandas-series", "ds-data-cleaning", "ds-eda"],
    prev: "ds-pandas-series",
    next: "ds-data-cleaning",
  },
  {
    slug: "ds-data-cleaning",
    categoryId: "ai",
    title: "Data Cleaning — गलिच्छ डेटा स्वच्छ",
    marathiTitle: "Data cleaning — सुसंगत, स्वच्छ data बनवणे — मॉडेलचा पाया",
    level: "intermediate",
    minutes: 35,
    summary: "गलिच्छ data म्हणजे विसंगत strings, spaces, typo, duplicate rows. str cleaning, drop_duplicates, normalize — अर्धी नकाशा स्वच्छ केल्यावरच.",
    sections: [
      {
        title: "Data cleaning — सुसंगत data म्हणजे काय?",
        content: "गलिच्छ data म्हणजे काही entries विसंगत — 'Pune' व 'pune' व 'PUNE ', dates वेगवेगळ्या format मध्ये.\nModel ला सुसंगत data हवा — Consistency ला किंमत.\ndrop_duplicates, str.strip/upper/lower, replace, date parse — ही cleaning ची मुख्य साधने.",
      },
      {
        title: "का शिकावे? Data cleaning चे फायदे आणि महत्त्व",
        content: "आकडेवारीतील बहुतांश वेळ data cleaning मध्येच जातो — 60-80% वेळ या कामावर.\nएकच duplicate/typo model चा निकाल बदलू शकतो — cleanliness ही परंपरा.\nवाचून न थांबता स्वतः गलिच्छ छोटा CSV बनवून cleaning करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Inconsistent case — आधी normalize (lower/strip) करा.\n✗ Duplicates काढण्यापूर्वी पहा — कधीकधी duplicate खरे दोन डेटा बिंदू असतात.\n✗ String मधील hidden spaces — strip न करता match चुकते.\n✗ Date parsing format — चुकीच्या format ने values NaN होतात.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "String cleaning",
        content: "df['city'] = df['city'].str.strip().str.lower() — spaces व case एकसारखे. .replace ने जुने/नवे शब्द, .str.contains ने शोध.",
        code: `import pandas as pd
df = pd.DataFrame({"city": ["Pune", "pune ", " MUMBAI", "Pune"]})
df["city"] = df["city"].str.strip().str.lower()
df["city"] = df["city"].replace({"mumbai": "mumbai"})
print(df.value_counts())`,
        codeLanguage: "python",
        output: `city
pune      2
mumbai    1
dtype: int64
# case+spaces normalize केले — सुसंगत`,
      },
      {
        title: "Duplicates आणि normalize",
        content: "df.drop_duplicates() दुप्पट rows काढतो, keep='first' ने कोणती ठेवायची निवडता येते.\nDates: pd.to_datetime(df['date'], format='%d/%m/%Y') — format स्पष्ट द्या; errors='coerce' ने चुकीचे NaN होतील.",
        code: `df = df.drop_duplicates()
df["age"] = [24, 30, 35]
print(df)

import pandas as pd
s = pd.to_datetime(["10/01/2024", "15/02/2024"], format="%d/%m/%Y")
print(s)`,
        codeLanguage: "python",
        output: `     city  age
0    pune   24
1  mumbai   30
2    pune   35
0   2024-01-10
1   2024-02-15
dtype: datetime64[ns]`,
      },
      {
        title: "सारांश — data cleaning",
        content: "Strip/case normalize, duplicates काढा, dates parse करा. clean data हा model च्या अर्धा नकाशा. पुढील धडा: missing values (NaN) व्यवस्थापन.",
      },
    ],
    practiceQuestions: [
      "str.strip() काय करतो?",
      "drop_duplicates नंतर काय तपासावे?",
      "Date format चुकल्यावर काय होते?",
    ],
    quiz: [
      { question: "Case normalize करण्यासाठी?", options: [".str.lower()", ".dropna()", ".astype()", ".mean()"], correct: 0 },
      { question: "दुप्पट rows काढण्यासाठी?", options: ["drop_duplicates", "dropna", "dupe", "unique"], correct: 0 },
      { question: "Hidden spaces काढण्यासाठी?", options: ["strip", "trim_all", "space0", "pad"], correct: 0 },
      { question: "Date parse करण्यासाठी?", options: ["pd.to_datetime", "str.date", "date()", "dt()"], correct: 0 },
      { question: "Cleaning मध्ये किती वेळ जातो?", options: ["बहुतांश", "कमी", "शून्य", "कधीच नाही"], correct: 0 },
    ],
    related: ["ds-missing-data", "ds-pandas-dataframe", "ds-eda"],
    prev: "ds-pandas-dataframe",
    next: "ds-missing-data",
  },
  {
    slug: "ds-missing-data",
    categoryId: "ai",
    title: "Missing Values — NaN व्यवस्थापन",
    marathiTitle: "Missing values — NaN कुठे, कसे भरायचे आणि कधी टाकायचे",
    level: "intermediate",
    minutes: 30,
    summary: "NaN/None data मध्ये अपरिहार्य. dropna/fillna/median/imputer या पद्धती आणि train/test मध्ये न भरल्यास leakage.",
    sections: [
      {
        title: "Missing values — NaN म्हणजे काय?",
        content: "Missing म्हणजे काही cells रिकामे — None/NaN. हे खरे data चा स्वाभाविक भाग असतो.\nकशी योग्य पद्धत निवडायची — टाकणे/drop करणे किंवा भरणे (impute) — हे ज्ञान वेगवेगळे.\nimputation म्हणजे सरासरी/मध्य/forward-fill ने रिकाम्या cells भरणे.",
      },
      {
        title: "का शिकावे? Missing values चे फायदे आणि महत्त्व",
        content: "मोठ्या data मध्ये missing सामान्य — व्यवस्था न केल्यास model खराब result देतो.\nकधी mathematics ने भरायचे हे decision data च्या स्वरूपावर — नियम शिकल्याने model वाढतो.\nवाचून न थांबता छोट्या df वर drop vs fill ची तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ आधी न पाहता drop करणे — खूप data गमावतो; आधी isna().sum() पहा.\n✗ Impute नंतर fit/test गोंधळ — imputer train वर fit, test वर फक्त transform.\n✗ सरासरी भरताना outlier न लक्ष — unaffected contexts median घ्या.\n✗ Missing चाची pattern न पाहणे — missing का आहे याचा अर्थ असतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "शोधणे आणि drop करणे",
        content: "df.isna().sum(), missing_percent = df.isna().mean()*100. खूप missing column असेल तर drop करा (उदा. 70%+).\ndf['col'].dropna(inplace?) नव्हे — नवे df परत येते; df.dropna(subset=['col']) विशेष column ने rows काढतो.",
        code: `import pandas as pd
import numpy as np
df = pd.DataFrame({"a": [1, np.nan, 3], "b": [4, 5, np.nan]})
print(df.isna().sum())
print(df.dropna())`,
        codeLanguage: "python",
        output: `a    1
b    1
dtype: int64
     a    b
0  1.0  4.0
# rows 1,2 missing मुळे काढल्या`,
      },
      {
        title: "Fill करणे",
        content: "df['a'].fillna(df['a'].median()) — numerical मध्ये median रोबस्ट असते उदा. salary.\nCategorical साठी mode (सर्वात वारंवार value). method='ffill' ने कालानुक्रमिक fill.\nsimpleImputer हेच pipeline मध्ये करतो — train fit, test transform.",
        code: `from sklearn.impute import SimpleImputer
import numpy as np
X = np.array([[1.0, 2], [np.nan, 3], [7, np.nan]])

imp = SimpleImputer(strategy="median")
imp.fit(X[:2])                 # फक्त train वर fit
X2 = imp.transform(X)
print(X2)`,
        codeLanguage: "python",
        output: `[[1. 2.]
 [4. 3.]
 [7. 4.]]
# train चा median=4 ने भरले; test leakage नाही`,
      },
      {
        title: "सारांश — missing values",
        content: "आधी isna().sum() ने आकडा पहा. खूप missing → drop. सरासरी/median/mode/fill → impute. imputer train fit test transform. पुढील धडा: outliers.",
      },
    ],
    practiceQuestions: [
      "Missing भरताना leakage कसा टाळतात?",
      "median vs mean — कधी कोणते?",
      "अनेक missing असलेला column कधी drop करतात?",
    ],
    quiz: [
      { question: "Missing data मोजण्याची पद्धत?", options: ["isna().sum()", "len()", "count()", "fill()"], correct: 0 },
      { question: "रोबस्ट fill numerical साठी?", options: ["median", "mean", "max", "mode"], correct: 0 },
      { question: "Categorical मध्ये कौन भरतात?", options: ["mode", "median", "mean", "std"], correct: 0 },
      { question: "SimpleImputer train वर काय करतो?", options: ["fit नंतर transform", "फक्त predict", "काही नाही", "scale"], correct: 0 },
      { question: "Imputer test वर काय करतो?", options: ["फक्त transform", "fit पुन्हा", "drop", "काही नाही"], correct: 0 },
    ],
    related: ["ml-pipeline", "ds-data-cleaning", "ml-train-test-split"],
    prev: "ds-data-cleaning",
    next: "ds-outliers",
  },
  {
    slug: "ds-outliers",
    categoryId: "ai",
    title: "Outliers — बाह्य मूल्ये",
    marathiTitle: "Outliers — असाधारण मूल्ये शोधणे, आणि काढणे/सुधारणे",
    level: "intermediate",
    minutes: 30,
    summary: "अत्यंत मोठी/लहान मूल्ये जी data चा नकाशा खराब करतात. IQR, Z-score, boxplot शोध आणि remove/winsorize धोरण.",
    sections: [
      {
        title: "Outliers — असाधारण मूल्ये म्हणजे काय?",
        content: "Outlier म्हणजे उर्वरित data पासून नाटकीय दूर मूल्य — उदा. एक व्यक्ती 500 वर्षांची.\nहे खरी data ची चुक असू शकते किंवा खऱ्या आपत्तीची सूचना (fraud).\nशोध: boxplot, IQR (Q1-1.5*IQR, Q3+1.5*IQR बाहेर), Z-score (3 पेक्षा जास्त).",
      },
      {
        title: "का शिकावे? Outliers चे फायदे आणि महत्त्व",
        content: "मोठे outliers सरासरी आणि regression रेषा ओढतात — model चा अंदाज बिघडतो.\nफक्त scale-sensitive algorithms ला परिणाम होतो — tree ला याची लाज नाही.\nवाचून न थांबता सोबत manual outlier घालून mean बदल पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सगळे outliers खोटे समजणे — कधीकधी तेच महत्त्वाचे निरीक्षण (fraud).\n✗ Boxplot न पाहता blind remove — खरा data कमी करतो.\n✗ Domain संदर्भ न घेणे — एका domain चे extreme दुसऱ्यात सामान्य.\n✗ IQR मध्ये काही values नसल्यास खोटा परिणाम — threshold योग्य.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "शोधणे",
        content: "IQR = Q3 - Q1; boundaries = Q1-1.5IQR व Q3+1.5IQR. बाहेरची मूल्ये outlier. Z-score (x-mean)/std, |z|>3 सीमा.",
        code: `import numpy as np
data = np.array([10, 12, 11, 13, 12, 11, 200])
q1, q3 = np.percentile(data, [25, 75])
iqr = q3 - q1
low, high = q1 - 1.5*iqr, q3 + 1.5*iqr
print(low, high)
print(data[(data < low) | (data > high)])`,
        codeLanguage: "python",
        output: `9.0 14.0
[200]
# 200 हा स्पष्ट outlier — IQR बाहेर`,
      },
      {
        title: "काय करायचे",
        content: "पर्याय: (1) खोटे data असल्यास काढा, (2) winsorize करा (सीमा कॅप: बाहेरची values सीमेवर आणा), (3) robust scale मध्ये ठेवा (median/IQR).\nफक्त needs algorithm वरच लागू करा; गुमान nja मध्ये scaling नंतर ते दुरुस्त होतात.",
        code: `import numpy as np
data = np.array([10, 12, 11, 13, 12, 11, 200])
capped = np.clip(data, 9.0, 14.0)
print(capped)
print(capped.mean(), data.mean())`,
        codeLanguage: "python",
        output: `[10 12 11 13 12 11 14]
11.857142857142858 38.42857142857143
# capping ने mean वास्तविक जवळ`,
      },
      {
        title: "सारांश — outliers",
        content: "IQR/Z-score/boxplot ने शोध, remove/winsorize ने उपाय. खरी मूल्ये data मधून काढू नका. पुढील धडा: categorical labels संख्यांत बदलणे.",
      },
    ],
    practiceQuestions: [
      "IQR मध्ये 1.5 चा पाळा कुठून?",
      "Outlier नेहमी खोटाच असतो का?",
      "Winsorize म्हणजे काय?",
    ],
    quiz: [
      { question: "IQR म्हणजे?", options: ["Q3-Q1", "Q1+Q2", "mean", "max-min"], correct: 0 },
      { question: "IQR बाहेरची सीमा?", options: ["1.5*IQR", "0.5*IQR", "2*mean", "max"], correct: 0 },
      { question: "Z-score सीमा सामान्यतः?", options: ["3", "0.5", "100", "0"], correct: 0 },
      { question: "Outlier चा mean वर?", options: ["परिणाम होतो", "काही नाही", "फक्त मध्य", "sort"], correct: 0 },
      { question: "कॅप करण्याला काय म्हणतात?", options: ["winsorize", "impute", "onehot", "groupby"], correct: 0 },
    ],
    related: ["ml-feature-scaling", "ds-stats-basics", "ds-seaborn"],
    prev: "ds-missing-data",
    next: "ds-categorical-encoding",
  },
  {
    slug: "ds-categorical-encoding",
    categoryId: "ai",
    title: "Categorical Data Encoding",
    marathiTitle: "Categorical encoding — मजकूर labels चे संख्यांत रूपांतर",
    level: "intermediate",
    minutes: 30,
    summary: "शहर, gender, महिने हे मजकूर model ला हवेत संख्या — LabelEncoder, OneHotEncoder कधी आणि का.",
    sections: [
      {
        title: "Categorical encoding — मजकूर ते संख्या म्हणजे काय?",
        content: "Model फक्त संख्यांवर गणित करतो — 'Pune', 'Delhi' हे थेट नाही.\nक्रियापद researchers: शहराला क्रमांक देणे (0,1,2...) किंवा प्रत्येक शहराला दुसरा column.\nLabelEncoder क्रमांक देतो (order matter नाही तर धोका), OneHotEncoder दुसरे columns बनवतो.",
      },
      {
        title: "का शिकावे? Categorical encoding चे फायदे आणि महत्त्व",
        content: "NLP वगळता सर्वात जास्त data categorical असतो — हे रूपांतर नेहमी आवश्यक.\norder महत्त्वाच्या categories (लहान/मोठे नाही) साठी label, अन्यथा one-hot — निवडीची पद्धत.\nवाचून न थांबता दोघांचे output shapes तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ अनियंत्रित categories वर लेबल encoder — शहराला 5>3 understanding खोटी.\n✗ OneHot नंतर जास्त columns — उच्च cardinality (हजारों शहरे) वर hashing/others पहा.\n✗ Train/test साठी वेगळे encoder — एक fit, दुसरा transform, अन्यथा mismatch.\n✗ मोठे sparse matrix गोंधळ — get_dummies/dense समजून घ्या.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Label vs Ordinal",
        content: "LabelEncoder = दिलील क्रमांक — classification target साठी उत्तम. ordinal=True असेल तर order categories ला हवे.\nमहिने, लहान/मोठे — order असले तर Label तेवढेच चांगले. ट्रीवर order problems? काही नाही.",
        code: `from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
labels = le.fit_transform(["spam", "normal", "spam"])
print(labels)
print(le.classes_)`,
        codeLanguage: "python",
        output: `[1 0 1]
['normal' 'spam']
# 0=normal 1=spam — order alphabetical`,
      },
      {
        title: "OneHotEncoder",
        content: "प्रत्येक शहरासाठी स्वतंत्र column व 0/1. Pune=[1,0,0], Delhi=[0,1,0]. महत्त्व: categories rhyme नाही — भिन्न.\nहे classifier साठी चांगले (order कल्पना नाही). स्पष्ट category ची संख्या वाढतच जाते.",
        code: `from sklearn.preprocessing import OneHotEncoder
import numpy as np
ohe = OneHotEncoder(sparse_output=False)
cities = ohe.fit_transform(np.array([["Pune"], ["Delhi"], ["Pune"]]))
print(cities)
print(ohe.categories_)`,
        codeLanguage: "python",
        output: `[[1. 0.]
 [0. 1.]
 [1. 0.]]
[array(['Delhi','Pune'], dtype=object)]
# 2 शहरे → 2 columns`,
      },
      {
        title: "सारांश — encoding",
        content: "order असल्यास label, नाही तर one-hot. train fit test transform, categories एकाच encoder मधून. उच्च cardinality वर काळजी. पुढील धडा: matplotlib — पहिली दृष्टी.",
      },
    ],
    practiceQuestions: [
      "order असलेल्या categories साठी कोणता encoder?",
      "OneHot का unnecessary order देऊ शकतो. Label?",
      "Train/test वर encoder एकच का?",
    ],
    quiz: [
      { question: "शहरासारखे categories साठी?", options: ["OneHotEncoder", "LabelEncoder", "Scaler", "Imputer"], correct: 0 },
      { question: "order असलेल्या categories साठी?", options: ["Ordinal/Label", "OneHot", "None", "काहीही"], correct: 0 },
      { question: "OneHot मध्ये किती columns?", options: ["unique categories", "फक्त 2", "rows संख्या", "1"], correct: 0 },
      { question: "High cardinality साठी?", options: ["hashing/encoding", "OneHot दुसरे", "Label दुसरे", "कोणीही"], correct: 0 },
      { question: "Encoder train/test वर?", options: ["एकच fit+transform", "दोन fit", "transform नाही", "random"], correct: 0 },
    ],
    related: ["ml-pipeline", "ds-pandas-dataframe", "ds-correlation"],
    prev: "ds-outliers",
    next: "ds-matplotlib",
  },
  {
    slug: "ds-matplotlib",
    categoryId: "ai",
    title: "Matplotlib — Plotting Basics",
    marathiTitle: "Matplotlib — line, scatter, bar plots ची सुरुवात",
    level: "beginner",
    minutes: 30,
    summary: "matplotlib.pyplot ने पहिले आलेख — plot, scatter, bar, labels, legend, subplot — data ची पहिली दृष्टी.",
    sections: [
      {
        title: "Matplotlib — plotting म्हणजे काय?",
        content: "Matplotlib ही Python ची मूळ plotting library — plt.plot, plt.scatter, plt.bar ने आलेख.\nData पाहणे म्हणजे अर्धी समज — आलेखातच pattern/outlier दिसतात.\nplt.xlabel/ylabel/title ने आलेख माहितीपूर्ण, plt.legend ने वेगळे series.",
      },
      {
        title: "का शिकावे? Matplotlib चे फायदे आणि महत्त्व",
        content: "EDA चा पाया — distribution, trend, anomaly छान दिसतात; अंकांवरून दिसत नाही.\nमंत्रणा सोबत graphs शेअर करणे व्यवसायाचा सर्वसामान्य भाग.\nवाचून न थांबता स्वतः 3 विविध plot प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Labels/legend न देणे — आलेख माहितीशिवाय.\n✗ plt.show() विसरणे — headless मोड मध्ये graph दिसत नाही.\n✗ x/y उलट — time axis चुकला तर trend खोटा.\n✗ Overplot अनेक शैली — fig/ax pattern चा वापर समजून घ्या.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "पहिले plots",
        content: "single figure मध्ये line (trend), scatter (correlation), bar (aggregates). figsize ने आकार, color/marker ने शैली.",
        code: `import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y = [2, 4, 1, 5, 3]
z = [1, 3, 2, 4, 2]

plt.figure(figsize=(6, 4))
plt.plot(x, y, marker="o", label="sales")
plt.bar(x, z, alpha=0.5, label="cost")
plt.xlabel("month"); plt.ylabel("रुपये")
plt.title("एका वर्षाचे मासिक निकाल")
plt.legend(); plt.show()`,
        codeLanguage: "python",
        output: `Plot window उघडते:
- line "sales" (o marker): (1,2) (2,4) (3,1) (4,5) (5,3)
- bar "cost" (alpha 0.5): 1,3,2,4,2
- x-axis "month", y-axis "रुपये", शीर्षक "एका वर्षाचे मासिक निकाल", legend वर दोन्ही sequence.`,
      },
      {
        title: "Scatter आणि horizontal-bar",
        content: "scatter दोन variables ची संबंध दाखवतो — correlation दिसते. barh ने उलट अक्ष bars,\nsubplots मध्ये एका figure वर अनेक आलेख — subdivision द्वारे दृष्टी विस्तार.",
        code: `fig, ax = plt.subplots(1, 2, figsize=(9, 3))
ax[0].scatter(x, y, color="crimson")
ax[0].set_title("किंमत vs विक्री")
ax[1].barh(["a", "b", "c"], [40, 72, 55])
ax[1].set_title("पदार्थ")
plt.tight_layout(); plt.show()`,
        codeLanguage: "python",
        output: `दोन आलेख एका figure मध्ये:
- डावे: scatter (crimson) — x व y चे संबंध, शीर्षक "किंमत vs विक्री"
- उजवे: horizontal bars — a=40, b=72, c=55, शीर्षक "पदार्थ"`,
      },
      {
        title: "सारांश — Matplotlib",
        content: "plot/scatter/bar हे मूळ आलेख. labels/legend/title अनिवार्य. subplots ने अनेक दृष्टी. पुढील धडा: Seaborn — statistical graphs.",
      },
    ],
    practiceQuestions: [
      "plt.legend आवश्यक का?",
      "scatter काय दर्शवतो?",
      "subplots मध्ये fig, ax कशासाठी?",
    ],
    quiz: [
      { question: "Matplotlib चा मुख्य module?", options: ["pyplot", "pandas", "numpy", "seaborn"], correct: 0 },
      { question: "scatter काय दर्शवतो?", options: ["दोन variables संबंध", "एक trend", "proportion", "table"], correct: 0 },
      { question: "आलेखाच्या series ओळखीसाठी?", options: ["legend", "grid", "axis", "title"], correct: 0 },
      { question: "अनेक graphs एका figure मध्ये?", options: ["subplots", "append", "stack", "merge"], correct: 0 },
      { question: "Trend दर्शवणारा आलेख?", options: ["line", "barh", "pie", "hist"], correct: 0 },
    ],
    related: ["ds-seaborn", "ds-eda", "ds-pandas-dataframe"],
    prev: "ds-categorical-encoding",
    next: "ds-seaborn",
  },
  {
    slug: "ds-seaborn",
    categoryId: "ai",
    title: "Seaborn — Statistical Plots",
    marathiTitle: "Seaborn — distribution, count, heatmap, pairplot — आकड्यांची कथा",
    level: "intermediate",
    minutes: 30,
    summary: "Seaborn हे pandas data वर थेट graphs — hist, countplot, boxplot, heatmap, pairplot. एकाच ओळीत निकाल.",
    sections: [
      {
        title: "Seaborn — statistical plots म्हणजे काय?",
        content: "Seaborn हा matplotlib वर बांधलेला उच्च-स्तरीय library — data frame वर थेट काम करतो.\nsns.histplot, sns.countplot, sns.boxplot, sns.heatmap, sns.pairplot — ही मुख्यave.\nStatistical defaultच published शैली — एका ओळीत बराच निकाल दिसतो.",
      },
      {
        title: "का शिकावे? Seaborn चे फायदे आणि महत्त्व",
        content: "EDA मध्ये seaborn ने कमी code जास्त insight — distribution, groups, correlation.\nmatplotlib शैली सुधारून data scientist चे default tool बनले.\nवाचून न थांबता iris वर pairplot चाचणी करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ kde_vs hist गोंधळ — kde smooth curve, hist bins.\n✗ heatmap वर numeric column selective — नाही तर error.\n✗ Pairplot मोठ्या data वर — 100k rows तर खूप; sample करा.\n✗ Pandas/text dtype ठीक ठेवा — categorical plot चुकतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Histograms आणि boxplots",
        content: "sns.histplot(df['age'], bins=20) distribution. sns.boxplot(x='city', y='age', data=df) — गटांत मध्य/quartile.\nboxplot मध्ये outlier dots दिसतात — आधी दृष्टीने शोध.<",
        code: `import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset("penguins")

sns.histplot(df["body_mass_g"], bins=20)
plt.title("वजन वितरण"); plt.show()

sns.boxplot(x="species", y="body_mass_g", data=df)
plt.show()`,
        codeLanguage: "python",
        output: `दोन आलेख:
1) histogram (bins=20) — penguins च्या body_mass_g चे वितरण, शीर्षक "वजन वितरण"
2) boxplot — प्रत्येक species साठी body_mass_g ची मध्य/quartile + outlier dots`,
      },
      {
        title: "Heatmap आणि pairplot",
        content: "sns.heatmap(df.corr(), annot=True) — correlation ची चटकन ग्रिड. sns.pairplot(df, hue='species') — सर्व pairs चे scatter+hist.\nहे EDA ची सर्वात उपयुक्त क्रिया — features चे रूप/संबंध एकाच ठिकाणी.",
        code: `sns.heatmap(df.corr(numeric_only=True), annot=True, cmap="coolwarm")
plt.show()`,
        codeLanguage: "python",
        output: `Heatmap — numeric columns ची correlation ग्रिड (annot=True मुळे प्रत्येक cell मध्ये संख्या):
लाल/कोष्ण = जास्त positive, निळा/थंड = negative correlation.`,
      },
      {
        title: "सारांश — Seaborn",
        content: "hist/box = distribution, heatmap = correlation, pairplot = सर्व pairs. data frame direct. पुढील धडा: EDA — पूर्ण प्रक्रिया.",
      },
    ],
    practiceQuestions: [
      "histplot vs kde फरक काय?",
      "heatmap कशावर बांधतात?",
      "Pairplot एका ठिकाणी काय दाखवतो?",
    ],
    quiz: [
      { question: "Seaborn कोणावर बांधले आहे?", options: ["matplotlib", "numpy", "django", "pytorch"], correct: 0 },
      { question: "Distribution दर्शवणारा?", options: ["histplot", "line", "barh", "scatter"], correct: 0 },
      { question: "कोणत्या graph मध्ये outliers दिसतात?", options: ["boxplot", "countplot", "pie", "table"], correct: 0 },
      { question: "सर्व pairs चे graphs?", options: ["pairplot", "boxplot", "heatmap", "line"], correct: 0 },
      { question: "correlation grid साठी?", options: ["heatmap", "pie", "count", "hue"], correct: 0 },
    ],
    related: ["ds-matplotlib", "ds-correlation", "ds-eda"],
    prev: "ds-matplotlib",
    next: "ds-eda",
  },
  {
    slug: "ds-eda",
    categoryId: "ai",
    title: "EDA — Exploratory Data Analysis",
    marathiTitle: "EDA — data आधी अनुभवणे — rows, stats, plots, hypotheses",
    level: "intermediate",
    minutes: 35,
    summary: "Model आधी data ओळखा — shape, dtypes, describe, value_counts, missing, plots — ठराविक workflow ने.",
    sections: [
      {
        title: "EDA — exploratory data analysis म्हणजे काय?",
        content: "EDA म्हणजे कोणतेही model बनवण्यापूर्वी data ची त्याच्यावर चाचणी करणे — shape, types, distribution, patterns.\nउद्देश: विश्वसनीयता तपासणे, hypothesis तयार करणे, विचित्रता समजणे.\noutput: data बद्दल प्रश्न; मग model workflow.",
      },
      {
        title: "का शिकावे? EDA चे फायदे आणि महत्त्व",
        content: "EDA वगळता model अंधारात तयार होतो — data चा स्वभाव न माहीत.\nचांगला EDA वेळ वाचवतो आणि डीबग simplification करतो.\nवाचून न थांबता कोणताही dataset घेऊन पूर्ण EDA workflow करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Model ताबडतोब करणे — EDA वगळल्यास समज नंतर नसते.\n✗ फक्त head() पाहणे — statistics/plots पूर्णपणे पहा.\n✗ Missing/duplicates न पाहता पुढे — दोष globh.\n✗ Scale/unit न चेक — गलिच्छ unit बरोबर अंदाज.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Descriptive EDA",
        content: "df.shape, df.dtypes, df.describe(), df.isna().sum(), df['col'].value_counts(), df['col'].unique()[:10] — यांनी bends.\nसहकार्य: groupby + describe हे देखील तपासा.",
        code: `import pandas as pd
df = pd.read_csv("data.csv")
print(df.shape)
print(df.dtypes)
print(df.describe(include="all"))
print(df.isna().sum())`,
        codeLanguage: "python",
        output: `तुमच्या data.csv नुसार बदलते — उदा. (120, 5):
(120, 5)
age          int64
city        object
salary       int64
...
age    0
city   3   ← असे concede missing columns
...`,
      },
      {
        title: "Visual EDA workflow",
        content: "सर्व numerical columns ची histograms (df.hist(figsize=(12,8))), numerical pairs scatter/corr heatmap.\nCategorical columns ची countplots, target vs features group ची तुलना. निष्कर्ष काढा.",
        code: `import matplotlib.pyplot as plt
df.hist(figsize=(10, 6), bins=20)
plt.tight_layout(); plt.show()
# character-view: वेटrझन distribution पाहा, outliers ओळखा`,
        codeLanguage: "python",
        output: `प्रत्येक numerical column साठी एक histogram (bins=20):
distribution कशी आहे (normal/skewed), कोणते outliers दिसतात हे पहा.`,
      },
      {
        title: "सारांश — EDA",
        content: "shape/stats/missing/plots शिस्तबद्ध. hypothesis तयार करा. patterns खाली उतरून model बनवा. पुढील धडा: correlation.",
      },
    ],
    practiceQuestions: [
      "EDA चा मुख्य उद्देश?",
      "describe(include='all') मध्ये काय येते?",
      "EDA मध्ये कोणते plots पाहतात?",
    ],
    quiz: [
      { question: "EDA कोणत्या आधी?", options: ["model बनवण्याच्या", "deploy च्या", "testing च्या", "कधीही"], correct: 0 },
      { question: "describe मध्ये काय येतो?", options: ["stats", "photos", "legend", "links"], correct: 0 },
      { question: "Numerical distribution साठी?", options: ["hist", "bar", "pie", "line"], correct: 0 },
      { question: "Missing कसा दिसतो?", options: ["isna().sum()", "shape", "dtype", "head"], correct: 0 },
      { question: "EDA संपल्यावर काय तयार होते?", options: ["hypotheses", "model", "graph", "deploy"], correct: 0 },
    ],
    related: ["ds-seaborn", "ds-correlation", "ds-data-cleaning"],
    prev: "ds-seaborn",
    next: "ds-correlation",
  },
  {
    slug: "ds-correlation",
    categoryId: "ai",
    title: "Correlation & Heatmap",
    marathiTitle: "Correlation — features एकमेकांशी कसे निगडीत, heatmap ने दृष्टी",
    level: "intermediate",
    minutes: 30,
    summary: "कोणते features गटात बोलतात, कोणते एकाकी. Pearson R, heatmap, multicollinearity आणि निवडण्याचे नियम.",
    sections: [
      {
        title: "Correlation — features चा सहसंबंध म्हणजे काय?",
        content: "Correlation दोन numeric variables एकमेकांशी कसे वाढतात/कमी होतात हे मोजते — Pearson R (-1 ते 1).\nR=1 सरळ आनुपातिक, R=-1 व्यस्त, R=0 संबंध नाही. हा linear association मोजतो.\nHeatmap ने सर्व features चे correlation grid एकदाच पाहता येते.",
      },
      {
        title: "का शिकावे? Correlation चे फायदे आणि महत्त्व",
        content: "Feature selection मध्ये जास्त correlated features दुसरे redundant हे ओळखतात — model सोपा.\nMulticollinearity linear models चे coef अक्षर अस्थिर करते — हे आत रोखणे महत्त्वाचे.\nवाचून न थांबता scatterplot बरोबर R चे उदाहरण जुळवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Correlation = कारण समजणे — दोन्ही तिसऱ्या variable मुळे वाढत असतील.\n✗ R=0 म्हणजे संबंध नाही — nonlinear संबंध असू शकतो.\n✗ Categorical features वर R — तो numeric साठी; categorical वर Cramer's V.\n✗ Small samples वर R अस्थिर — n विचार करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Pearson R मोजणे",
        content: "df.corr() सर्व numeric pairs चे R गणित करतो. abs(R) > 0.8 चे pairs → एक अतिरेकी. Linear regression मध्ये multicollinearity टाळण्यासाठी एक काढतात.",
        code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "area": [100, 150, 200, 250],
    "price": [30, 50, 70, 90],
    "rooms": [2, 3, 4, 5],
})
print(df.corr())`,
        codeLanguage: "python",
        output: `          area  price  rooms
area   1.00  0.99   1.00
price  0.99  1.00   0.99
rooms  1.00  0.99   1.00
# area-rooms जवळजवळ 1 — एक काढणे suffice`,
      },
      {
        title: "Heatmap वाचणे",
        content: "sns.heatmap(df.corr(), annot=True, cmap='coolwarm', vmin=-1, vmax=1) — लाल जवळ 1, निळा -1.\nसर्व features जास्त correlated असतील तर वेगळे निर्णय घेण्यासाठी एकच काढा आणि बाकी भिन्न data.",
        code: `sns.heatmap(df.corr(), annot=True,
            cmap="coolwarm", vmin=-1, vmax=1)
plt.title("Feature correlation")
plt.show()`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — correlation",
        content: "R (-1 ते 1) linear association. heatmap सर्व pairs. multicollinearity कमी करा. correlation ≠ causation. पुढील धडा: data स्रोत कोठून.",
      },
    ],
    practiceQuestions: [
      "R=-0.9 म्हणजे काय?",
      "Correlation कारण का समजू नये?",
      "Multicollinearity मध्ये काय करतात?",
    ],
    quiz: [
      { question: "Pearson R ची श्रेणी?", options: ["-1 ते 1", "0 ते 100", "-inf ते inf", "0 ते 1"], correct: 0 },
      { question: "R=0 म्हणजे?", options: ["linear संबंध नाही", "कारण नाही", "समान", "errors"], correct: 0 },
      { question: "समानांतर जास्त correlated features तर?", options: ["एक काढा", "दोन्ही ठेवा", "दोन्ही काढा", "काही नाही"], correct: 0 },
      { question: "Correlation साठी कोणती दृष्टी?", options: ["heatmap", "pie", "pie chart", "table"], correct: 0 },
      { question: "Categorical साठी correlation पद्धत?", options: ["Cramers V", "Pearson", "Spearman only", "none"], correct: 0 },
    ],
    related: ["ds-eda", "ds-feature-engineering", "ds-seaborn"],
    prev: "ds-eda",
    next: "ds-datasets",
  },
  {
    slug: "ds-datasets",
    categoryId: "ai",
    title: "Datasets — कुठून मिळवायचे",
    marathiTitle: "Datasets — Kaggle, UCI, sklearn, open APIs — मोफत data स्रोत",
    level: "beginner",
    minutes: 25,
    summary: "सरावाचा data कुठून मिळेल — sklearn built-in, Kaggle, UCI, open data portals. License आणि size चे नियम.",
    sections: [
      {
        title: "Datasets — data स्रोत म्हणजे काय?",
        content: "सराव वा प्रोजेक्टसाठी data: उपाय आणि संदर्भFlexible — sklearn मध्ये load_iris() सारखे built-in,\nKaggle वर competition data, UCI वर classic datasets, सरकारी open data portals.\nLicense, size, quality हे तीन criteria आधी पहा.",
      },
      {
        title: "का शिकावे? Datasets चे फायदे आणि महत्त्व",
        content: "चांगला data म्हणजे खात्रीशीर सराव — built-ins च्या तुलनेत वास्तविक data वरील शिक्षण वेगळे.\nKaggle वरील उदाहरणावर competitions ची तयारी होते.\nवाचून न थांबता एक uploaded dataset उतरवून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ License न पाहणे — business वापरासाठी तपासा.\n✗ Huge files आधी download — sample पहा.\n✗ Data leakage — competition test labels पाहणे अयोग्य.\n✗ Unit/done documentation न वाचणे — अर्थ कसा वापरायचा ते गोंधळते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "स्रोत",
        content: "sklearn.datasets: load_iris, load_digits, fetch_openml. Kaggle API (kaggle datasets download -d name). UCI Archive.web पैकी टेबल CSV मिळाले तर pd.read_csv.\nछोटा sample ने orange: df head/describe पहा आणि size लक्षात ठेवा.",
        code: `from sklearn.datasets import load_iris
from sklearn.datasets import fetch_california_housing

iris = load_iris()
print(iris.data.shape, iris.target_names)

house = fetch_california_housing()
print(house.data.shape)`,
        codeLanguage: "python",
        output: `(150, 4) ['setosa' 'versicolor' 'virginica']
(20640, 8)
# 150 rows — practice; 20k housing — realistic`,
      },
      {
        title: "Kaggle निकाल",
        content: "pip install kaggle नंतर API token ~/.kaggle/kaggle.json मध्ये. Skip: kaggle datasets download -d utkarshsaxenadn/ipl-analysis -p ./data --unzip.\nकेखेळ नियमित ट्रॅनिंग साठी championships data आयोजकांकडून configure.",
      },
      {
        title: "सारांश — datasets",
        content: "built-in ने सुरुवात, Kaggle/UCI ने वास्तविक. license/size/docs पहा. नेहमी sample ने आधी. पुढील धडा: statistics basics.",
      },
    ],
    practiceQuestions: [
      "sklearn मध्ये practice dataset कसे मिळतात?",
      "Kaggle API सेट कसा करतात?",
      "कोणते नियम license चे पाळावेत?",
    ],
    quiz: [
      { question: "Iris data कसे मिळेल?", options: ["load_iris()", "read_csv", "api", "हे सगळंच"], correct: 0 },
      { question: "Kaggle मध्ये data आधी काय?", options: ["license पहा", "download", "train", "deploy"], correct: 0 },
      { question: "फार मोठा file आधी काय?", options: ["sample", "सगळा", "शेअर", "env"], correct: 0 },
      { question: "Housing dataset किती rows?", options: ["20k+", "150", "10", "1k"], correct: 0 },
      { question: "Competition नियम कुठे?", options: ["organizer दस्तावेज", "आकडे", "graphs", "hint"], correct: 0 },
    ],
    related: ["ds-eda", "ml-scikit-learn", "ds-stats-basics"],
    prev: "ds-correlation",
    next: "ds-stats-basics",
  },
  {
    slug: "ds-stats-basics",
    categoryId: "ai",
    title: "Statistics Basics — Mean, Median, Std",
    marathiTitle: "Statistics — सरासरी, मध्य, मानक विचलन, quantiles",
    level: "intermediate",
    minutes: 35,
    summary: "एका column चे केंद्र आणि पसारा — mean/median/mode, std/IQR, distribution आणि अर्थ लावणे.",
    sections: [
      {
        title: "Statistics — mean, median, std म्हणजे काय?",
        content: "Statistics data ची संख्यात्मक कथा सांगते. केंद्र: mean (सरासरी), median (मध्य), mode (जास्त वारंवार).\nपसारा: std (कसे विखुरले), IQR (मध्यम 50%). Quantile ने भाग.\nहे संकल्पना समजल्याशिवाय scaling/imputation/EDA गडगडतो.",
      },
      {
        title: "का शिकावे? Statistics चे फायदे आणि महत्त्व",
        content: "Model च्या आधीच्या प्रत्येक निर्णयामागे हा बेस असतो — describe() reading.\nOutlier robustness: median vs mean यातला फरक data प्रकार ठरवतो.\nवाचून न थांबता दोन एकवटी data चे mean/median तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Mean ला एकटेच पाहणे — outliers वर broken; median सोबत.\n✗ Std वर units न मिळणे — युनिट च्या संदर्भात वाचा.\n✗ Skewed data वर mean धक्कादायक — आधी histogram.\n✗ Mode multiple असू शकतो — सर्व modes पहा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "केंद्रीय प्रवृत्ती",
        content: "mean = sum/n, median = मध्यातील value (sorted), mode = जास्त वारंवार.\nSkewed income data मध्ये median हा mean पेक्षा वास्तविक — एका अब्जवरच्या व्यक्तीने mean वाढतो.",
        code: `import numpy as np
s = np.array([20, 22, 24, 26, 30, 100])
print(s.mean())      # 37.0 — outlier ने वाढले
print(np.median(s))  # 25.0 — खरे केंद्र
from collections import Counter
print(Counter([1, 2, 2, 3]).most_common(1))`,
        codeLanguage: "python",
        output: `37.0
25.0
[(2, 2)]`,
      },
      {
        title: "पसारा आणि quantiles",
        content: "std = sqrt(mean((x-mean)^2)) — सरासरी फैलाव. IQR = Q3-Q1. np.percentile(s, [25,50,75]) ने quantiles.\nStd कमी = data वर एकत्र; जास्त = पसरलेले. Robust साठी IQR अधिक सुरक्षित.",
        code: `import numpy as np
s = np.array([20, 22, 24, 26, 30, 100])
print(np.std(s))
print(np.percentile(s, [25, 50, 75]))`,
        codeLanguage: "python",
        output: `28.36
[23.5 25.  30. ]
# Q1=23.5 Q2=25 Q3=30 — पसारा दिसतो`,
      },
      {
        title: "सारांश — statistics",
        content: "केंद्र: mean/median/mode; पसारा: std/IQR. robust निर्णयासाठी median+IQR. outliers ने mean बिघडतो. पुढील धडा: feature engineering.",
      },
    ],
    practiceQuestions: [
      "Outlier data साठी mean ने median का?",
      "Std लहान म्हणजे काय?",
      "IQR कशासाठी उपयोगी?",
    ],
    quiz: [
      { question: "Outlier ने कोणते केंद्र बिघडते?", options: ["mean", "median", "mode", "काही नाही"], correct: 0 },
      { question: "median म्हणजे?", options: ["मध्य value", "सरासरी", "जास्त वारंवार", "अक्षर"], correct: 0 },
      { question: "Std दाखवतो?", options: ["पसारा", "केंद्र", "नावे", "links"], correct: 0 },
      { question: "IQR मध्ये काय असते?", options: ["मध्यम 50%", "सर्व data", "शेवटचे", "काही"], correct: 0 },
      { question: "Skewed data साठी खरे केंद्र?", options: ["median", "mean", "max", "mode only"], correct: 0 },
    ],
    related: ["ds-outliers", "ds-eda", "ml-feature-scaling"],
    prev: "ds-datasets",
    next: "ds-feature-engineering",
  },
  {
    slug: "ds-feature-engineering",
    categoryId: "ai",
    title: "Feature Engineering Basics",
    marathiTitle: "Feature engineering — कच्च्या data पासून उपयुक्त वैशिष्ट्ये",
    level: "advanced",
    minutes: 35,
    summary: "नवे features — date मधून month/day, text length, ratios, binned age — आणि domain knowledge ची भूमिका.",
    sections: [
      {
        title: "Feature engineering — नवे वैशिष्ट्ये म्हणजे काय?",
        content: "Model फक्त दिलेले raw columns वापरतो — पण अर्थ जोडणारे नवे features उपलब्ध असतात.\nउदा. date मधून month (season), दोन columns चे ratio (km/liter), text length.\nहे नवे dimensions म्हणजेच feature engineering — सर्वात उत्पादक जादू.",
      },
      {
        title: "का शिकावे? Feature engineering चे फायदे आणि महत्त्व",
        content: "योग्य features नसल्यास model कितीही जटिल, विजय होऊ शकतो — हीच अधिक विज्ञान.\nTabs/meters domain knowledge ते रूपांतर करणे हे उच्च-स्तरीय AI कौशल्य.\nवाचून न थांबता एका raw column पासून दोन नवे features बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Leakage — अशा features ज्यांची value prediction वेळी माहीत नसते.\n✗ 100 गुण वाढवणे — overfitting; SelectFromModel वापरा.\n✗ domain संदर्भ नाही — निर्णय गडद.\n✗ Transform train/test एकसारखे (bin boundaries train पासून).\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Date आणि text features",
        content: "date मधून: month, weekday, hour (seasonality/traffic). text मधून: length, word count, uppercase बूलियन.\nहे pandas मध्ये एका ओळीत: df['month'] = df['date'].dt.month.",
        code: `import pandas as pd
df = pd.DataFrame({"date": pd.to_datetime(["2024-01-05", "2024-12-25"])})
df["month"] = df["date"].dt.month
df["weekday"] = df["date"].dt.dayofweek
df["text"] = ["order bara", "urgent Return On Investment"]
df["text_len"] = df["text"].str.len()
print(df)`,
        codeLanguage: "python",
        output: `       date  month  weekday            text  text_len
0 2024-01-05      1        4        order bara         10
1 2024-12-25     12        2 urgent Return...         28`,
      },
      {
        title: "Ratios आणि bins",
        content: "Ratio: mileage=km/litre (absolute वाचन पेक्षा उपयोगी). Binning: age → age_group (0-18, 19-30...) leaving order.\nकोणते नवे features प्रत्यक्ष मदत करतात ते model importances ने तपासा.",
        code: `import pandas as pd
df = pd.DataFrame({"km": [100, 240], "lit": [5, 12]})
df["mileage"] = df["km"] / df["lit"]
df["age"] = [10, 45]
df["age_group"] = pd.cut(df["age"], bins=[0, 18, 40, 100],
                          labels=["child", "adult", "senior"])
print(df)`,
        codeLanguage: "python",
        output: `   km  lit  mileage  age age_group
0 100   5     20.0   10     child
1 240  12     20.0   45    senior`,
      },
      {
        title: "सारांश — feature engineering",
        content: "raw → नवे उपयुक्त dimensions. date/text/ratio/bins ही सोपी सुरुवात. leakage टाळा. importances तपासा. पुढील धडा: data augmentation.",
      },
    ],
    practiceQuestions: [
      "Date मधून कोणते features काढतात?",
      "Leakage म्हणजे काय, feature engineering मध्ये?",
      "Ratio feature ने काय फायदा?",
    ],
    quiz: [
      { question: "date मधून season कसा?", options: ["dt.month", "str.len", "astype", "merge"], correct: 0 },
      { question: "km/litre म्हणजे?", options: ["ratio feature", "bin", "label", "noise"], correct: 0 },
      { question: "ना होऊ शकणारे features prediction वेळी?", options: ["leakage", "gain", "lag", "bias"], correct: 0 },
      { question: "Binning म्हणजे?", options: ["श्रेणी बनवणे", "scale", "drop", "merge"], correct: 0 },
      { question: "नव्या features ची खात्री कशी?", options: ["importances", "दिसायला", "नावाने", "guess"], correct: 0 },
    ],
    related: ["ml-random-forest", "ds-correlation", "ml-overfitting"],
    prev: "ds-stats-basics",
    next: "ds-data-augmentation",
  },
  {
    slug: "ds-data-augmentation",
    categoryId: "ai",
    title: "Data Augmentation — अधिक डेटा",
    marathiTitle: "Data augmentation — कमी data मध्ये variants ने प्रशिक्षण वाढवणे",
    level: "advanced",
    minutes: 30,
    summary: "Data कमी असताना image/text चे variants तयार करणे — flip, rotation, noise, synonym replace. रोबस्टनेस आणि leakage धोके.",
    sections: [
      {
        title: "Data augmentation — variants ने वाढ म्हणजे काय?",
        content: "आपल्याकडे 100 फोटो असतील तर augmentation त्यांचे 10 गुण योग्य variants ने बनवतो — rotated, flipped, brightness.\nText मध्ये synonyms बदलणे, back-translation. हे सर्व ट्रेनिंग वाढवते.\nवास्तविक सारख्या differences च्या जोरावर model रोबस्ट बनतो.",
      },
      {
        title: "का शिकावे? Data augmentation चे फायदे आणि महत्त्व",
        content: "जास्त data साठी पैसे/वेळ कमी असताना हे छोटे — मोठा फरक निर्माण करते.\nविशेषतः CNN/AI projects मध्ये हे standard — image classifiers ने काय covered होतात.\nवाचून न थांबता image library ने 2-3 transforms करून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ जास्त aggressive augmentation — अर्थ बदलेल (उलटे टेक्स्ट).\n✗ Test data वर augmentation — फक्त train ला; test असल factorization अस्सल ठेवा.\n✗ Labels गोंधळ — flip केलेला फोटो label बदलता येऊ नये.\n✗ Augmentation नॉट beam एक — train data वर लागू, validation वर नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Image augmentation",
        content: "Transformations: rotation (small angles), flip horizontal, brightness/contrast, zoom, Gaussian noise.\nLibrary: tensorflow.keras.preprocessing.image.ImageDataGenerator किंवा albumentations. Labels अर्थ कायम राहील तेच वापरा.",
        code: `from torchvision import transforms

train_aug = transforms.Compose([
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.RandomRotation(10),
    transforms.ColorJitter(brightness=0.2),
    transforms.ToTensor(),
])
# train ला aug; test ला फक्त ToTensor`,
        codeLanguage: "python",
        output: `train_aug हा transforms.Compose pipeline तयार होतो — प्रत्येक batch वर:
- 50% chance: क्षैतिज flip
- ±10° rotation
- brightness ±20%
- tensor रूपांतरण
तुमच्या Dataset ला या pipeline ने फीड करा; test/validation ला फक्त ToTensor() द्या.`,
      },
      {
        title: "Text augmentation",
        content: "Text मध्ये synonyms (wordnet neighbour), छोट्या misspelling>>> या किंवा back-translation (translate to-जपान, मग परत).\nकमी उपयोगी वाटतं पण sentiment/classification मध्ये ribbons वाढते.",
      },
      {
        title: "सारांश — augmentation",
        content: "variants ने train data वाढवणे — image flip/rotate/noise, text synonyms. test कधीच augment नको. पुढील धडा: time series data.",
      },
    ],
    practiceQuestions: [
      "Augmentation test ला का नको?",
      "कोणते transforms label बदलू शकतात?",
      "Text augmentation साठी कोणत्या पद्धती?",
    ],
    quiz: [
      { question: "Augmentation कशासाठी?", options: ["train data वाढ", "test data वाढ", "model reduce", "speed"], correct: 0 },
      { question: "Image rotation फक्त?", options: ["कमी कोन", "तर 180", "90 only", "कधीच नको"], correct: 0 },
      { question: "Test data वर augmentation?", options: ["नको", "अनिवार्य", "थोडा", "नेहमी"], correct: 0 },
      { question: "Text मध्ये काय वापरतात?", options: ["synonyms", "flip", "crop", "zoom"], correct: 0 },
      { question: "Augmentation कोणता library?", options: ["albumentations/torchvision", "pandas", "seaborn", "requests"], correct: 0 },
    ],
    related: ["dl-cnn", "dl-transfer-learning", "ds-data-cleaning"],
    prev: "ds-feature-engineering",
    next: "ds-time-series-intro",
  },
  {
    slug: "ds-time-series-intro",
    categoryId: "ai",
    title: "Time Series Data — प्रास्ताविक",
    marathiTitle: "Time series — कालानुक्रमिक data, trend, seasonality, lag",
    level: "advanced",
    minutes: 35,
    summary: "विक्री, तापमान, शेअर — कालानुक्रम. Trend/seasonality/noise, lag features, क्रमानुसार train split चे नियम.",
    sections: [
      {
        title: "Time series — कालानुक्रमिक data म्हणजे काय?",
        content: "Time series म्हणजे वेळेनुसार ordered observations — विक्री दररोज, तापमान दर तास.\nइथे एका row चा अर्थ त्याच्या पूर्वीच्या rows ने फिक्स होतो — order महत्त्वाचा.\nTrend (दीर्घ दिशा), seasonality (आवर्त), noise — या तीन घटकांत विभागतात.",
      },
      {
        title: "का शिकावे? Time series चे फायदे आणि महत्त्व",
        content: "विक्री अंदाज, स्टॉक, traffic, weather — ही समस्यांची संपूर्ण कुटुंबे time based असतात.\nRandom train/test split येथे चुकीचे ठरते — कारण future माहिती train मध्ये झिरपते.\nवाचून न थांबता एक calendar-daata मधून lineplot करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Random split — क्रम मोडणे; पहिल्या n train, पुढचा test.\n✗ Lag नाही — मागील दिवसाची value feature म्हणून द्या.\n✗ Lookahead leakage — feature cha value त्या वेळी माहीत असावी.\n✗ Non-stationarity — trend काढून सुधारण्याची जणू शक्यता.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Trend, seasonality, noise",
        content: "Component विभागणी: statsmodels.tsa.seasonal_decompose. Trend दीर्घ वाढ/घट, seasonality आठवडा/वर्ष आवर्त, noise उर्वरित.\nते समजून अंदाजासाठी कोणत्या lag/features हवेत हे ठरते.",
      },
      {
        title: "Lag features व split",
        content: "Lag-1 म्हणजे yesterday ची value — x(t-1). pd.DataFrame ला shift(1) ने बनतात.\nSplit क्रमाने: 80% सुरुवात train, 20% शेवट test — random कधीच नाही.",
        code: `import pandas as pd
s = pd.Series([100, 110, 120, 130, 125, 140])
df = pd.DataFrame({"value": s, "lag1": s.shift(1)})
print(df)

train = df.iloc[:4]
test = df.iloc[4:]   # क्रमाने — time ordered`,
        codeLanguage: "python",
        output: `   value  lag1
0    100   NaN
1    110 100.0
2    120 110.0
3    130 120.0
4    125 130.0
5    140 125.0
# lag1 = मागील दिवसाची value`,
      },
      {
        title: "सारांश — time series",
        content: "order जपा — random split नको. trend/seasonality समजा. lag features बनवा. आधार time-series -> पुढे deep learning ची सुरुवात — neuron.",
      },
    ],
    practiceQuestions: [
      "Time series मध्ये random split का चुकीचे?",
      "Lag-1 feature म्हणजे काय?",
      "Trend आणि seasonality मध्ये फरक?",
    ],
    quiz: [
      { question: "Time series मध्ये split कसा?", options: ["क्रमाने", "random", "सोर्ट", "folds"], correct: 0 },
      { question: "Lag-1 म्हणजे?", options: ["मागील value", "पुढील value", "mean", "drop"], correct: 0 },
      { question: "आवर्त घटकाला काय म्हणतात?", options: ["seasonality", "noise", "trend", "bias"], correct: 0 },
      { question: "दीर्घ दिशा म्हणून काय?", options: ["trend", "lag", "cycle 0", "noise"], correct: 0 },
      { question: "Lag features कशाने बनतात?", options: ["shift()", "merge()", "fill()", "rank()"], correct: 0 },
    ],
    related: ["ds-datasets", "ml-train-test-split", "dl-rnn"],
    prev: "ds-data-augmentation",
    next: "dl-neuron",
  },
];