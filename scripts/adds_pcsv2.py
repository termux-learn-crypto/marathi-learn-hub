# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज विषय CSV JSON', 'writer reader', 'dumps loads', 'खूप वापर'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['file data', 'दोन्ही रूप'],
    ['हेच सार.', 'आज शिकतो.',],
),
1: m2(
    ['टेबल गोळा', 'रसीद key', 'program समजतो', 'data शेअरिंग'],
    ['रंगा-रेघा.', 'दुसरा program.', 'सार्वत्रिक रूप.', 'verify करा.',],
    ['उपमा पुन्हा', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['CSV सराव', 'cart फायल', 'माल किंमत', 'output तीन'],
    ['पोळी दही.', 'writerows लिही.', 'reader वाचा.', 'verify करा.',],
    ['csv import', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['JSON सराव', 'dumps pretty', 'indent दोन', 'output सुबक'],
    ['नाव गुण.', 'आरोही तीन.', 'सुबक मांडणी.', 'verify करा.',],
    ['json dumps', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['API सराव', 'loads वापर', 'वेद वर्ग', 'output वेद'],
    ['string मध्ये.', 'key वाचा.', 'मूल्य मिळे.', 'verify करा.',],
    ['json loads', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['ensure_ascii', 'with विसरणे', 'newline हवे', 'चुका जपा'],
    ['हेक्स नको.', 'file बंद हवे.', 'csv with ला.', 'लक्षात घ्या.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['reader पंक्ती', 'keys string', 'dumps vs dump', 'ensure सर्व'],
    ['list मिळते.', 'JSON नियम.', 'string व file.', 'भाषा सर्व.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['config सराव', 'mode vol', 'round trip', 'output config'],
    ['dark mode.', 'vol सत्तर.', 'loads dumps.', 'verify करा.',],
    ['json खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['स्कोअर सराव', 'आरोही वेद', 'संच dumps', 'output दोन'],
    ['गुण 85 92.', 'dumps करा.', 'ensure off.', 'verify करा.',],
    ['Mini प्रोजेक्ट', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}