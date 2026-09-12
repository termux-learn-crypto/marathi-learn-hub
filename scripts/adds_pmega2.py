# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज विषय प्रोजेक्ट', 'लायब्ररी व्यवस्थापन', 'चार concept', 'एकत्र सराव'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['dataclass JSON', 'generator getattr'],
    ['हेच सार.', 'आज शिकतो.',],
),
1: m2(
    ['नोंदवही उपमा', 'शोध जतन', 'लेखक विचारा', 'व्यवस्था सर्व'],
    ['पुस्तक माहिती.', 'library शोधते.', 'प्रत्येक जागा.', 'जतन महत्त्व.',],
    ['उपमा पुन्हा', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['पुस्तक Step 1', 'Book dataclass', 'पानिपत विश्वास', 'output सुबक'],
    ['title author.', 'repr खुबी.', 'verify करा.', 'practice करा.',],
    ['dataclass वापर', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['Library Step 2', 'add find दोन्ही', 'author शोध', 'output दोन'],
    ['दोन पुस्तके.', 'विश्वास मिळे.', 'असलेली None.', 'verify करा.',],
    ['getattr वापर', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['JSON Step 3', 'shelf जतन', 'asdict गुंडाळा', 'output दोन'],
    ['जतन मृत्युंजय.', 'वाचले परत.', 'दोन पुस्तके.', 'verify करा.',],
    ['json dump load', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['directory दोष', 'getattr गैरवापर', 'asdict विसरणे', 'with सोडणे'],
    ['file दूर असली.', 'सोपेच वापरा.', 'dump तुटतो.', 'file बंद हवे.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['asdict जोड', 'getattr गतिशील', 'JSON जतन', 'छोटे modules'],
    ['dataclass सोबत.', 'attributes खुले.', 'bag navigation.', 'मोठी व्यवस्था.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['Interactive खेळ', 'Python आरोही', 'मराठी वेद', 'output दोन'],
    ['दोन पुस्तके.', 'पहिला author.', 'len दोन.', 'verify करा.',],
    ['dataclass खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['Mini प्रोजेक्ट', 'book_ids', 'generator क्रम', 'output तीन'],
    ['एकशे एक.', 'पुढे पुढे.', 'yield चालू.', 'verify करा.',],
    ['generator वापर', 'धडा संपला'],
    ['अभिनंदन.', 'शेवट आला.',],
),
}