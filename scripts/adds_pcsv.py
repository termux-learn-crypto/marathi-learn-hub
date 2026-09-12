# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['CSV म्हणजे काय', 'JSON काय', 'data फाइल्स', 'import दोन'],
    ['प्रत्येक शब्द.', 'पुन्हा वाचा.', 'practice करा.', 'मनात ठेवा.',],
    ['writer dumper', 'reader loader'],
    ['हेच सार.', 'आज शिकतो.',],
),
1: m2(
    ['टेबल CSV', 'रसीद JSON', 'key value', 'programs समजतात'],
    ['रंगा-रेघा.', 'दुसरा program.', 'सार्वत्रिक रूप.', 'data शेअरिंग.',],
    ['उपमा सोपी', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['CSV लिहा', 'cart फायल', 'writerows तीन', 'output रांगा'],
    ['माल किंमत.', 'पोळी दही.', 'वाचले rows.', 'verify करा.',],
    ['csv import', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['JSON pretty', 'dumps indent', 'नाव गुण', 'output सुबक'],
    ['नाव आरोही.', 'गुण तीन.', 'indent दोन.', 'verify करा.',],
    ['json dumps', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['API वाचा', 'loads string', 'नाव वेद', 'output वेद'],
    ['वर्ग नऊ.', 'key वापरा.', 'वाचले मूल्य.', 'verify करा.',],
    ['json loads', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['ensure_ascii दोष', 'with विसरणे', 'newline दोष', 'चुका टाळा'],
    ['देवनागरी hex.', 'file बंद नाही.', 'csv साठी हवे.', 'लक्षात घ्या.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['reader पंक्ती', 'keys string', 'dumps loads', 'ensure_ascii'],
    ['list मिळते.', 'JSON नियम.', 'file व string.', 'भाषा सर्व.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['config खेळ', 'mode vol', 'round trip', 'output config'],
    ['dark mode.', 'vol सत्तर.', 'loads dumps.', 'verify करा.',],
    ['json खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['स्कोअर जतन', 'आरोही वेद', 'संच dumps', 'output दोन'],
    ['गुण 85 92.', 'dumps करा.', 'ensure off.', 'verify करा.',],
    ['Mini प्रोजेक्ट', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}