# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज विस्तार देतो', 'CSV JSON सर्व', 'चार क्रिये', 'data फाइल्स'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['writer dumper', 'reader loader'],
    ['हेच सार.', 'आज व्यापक.',],
),
1: m2(
    ['टेबल उपमा', 'रसीद उपमा', 'key value', 'program समजतात'],
    ['रंगा-रेघा.', 'दुसरा program.', 'सार्वत्रिक रूप.', 'data शेअरिंग.',],
    ['उपमा स्पष्ट', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['CSV सराव', 'cart फायल', 'पोळी दही', 'output तीन'],
    ['माल किंमत.', 'writerows तीन.', 'reader वाचा.', 'verify करा.',],
    ['csv import', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['JSON सराव', 'dumps सुबक', 'आरोही गुण', 'output थर'],
    ['गुण तीन.', 'indent दोन.', 'मांडणी सुरेख.', 'verify करा.',],
    ['json dumps', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['API सराव', 'loads string', 'वेद वर्ग', 'output नाव'],
    ['json वाचा.', 'key बोली.', 'मूल्य मिळे.', 'verify करा.',],
    ['json loads', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['ensure_ascii', 'with गरज', 'newline हवे', 'चुका टाळा'],
    ['देवनागरी hex.', 'file बंद हवे.', 'csv with ला.', 'लक्षात घ्या.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['reader list', 'keys string', 'dump vs dumps', 'ensure सर्व'],
    ['पंक्ती मिळते.', 'JSON नियम.', 'file vs string.', 'भाषा सर्व.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['config सराव', 'mode vol', 'round trip', 'output dict'],
    ['dark mode.', 'vol सत्तर.', 'loads dumps.', 'verify करा.',],
    ['json खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['स्कोअर सराव', 'आरोही वेद', 'संच dumps', 'output दोन'],
    ['85 92.', 'dumps करा.', 'ensure off.', 'verify करा.',],
    ['Mini प्रोजेक्ट', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}