# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज शेवट जवळ', 'dataclass सर्व', 'init repr eq', 'field वापर'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['asdict साधनी', '@dataclass सार'],
    ['हेच सार.', 'आज पूर्ण.',],
),
1: m2(
    ['फॉर्म शेवट', 'machinery कागद', 'गुणधर्म माहिती', 'रटाळ नाही'],
    ['फक्त माहिती.', 'सोपा वर्ग.', 'कागद तयार.', 'verify करा.',],
    ['उपमा शेवट', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['Point शेवट', 'x 3 y 4', 'print repr', 'output तीन'],
    ['बेरीज सात.', 'समानता True.', 'repr सुरेख.', 'verify करा.',],
    ['dataclass import', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['Product शेवट', 'दूध 56', 'total दोन', 'output 112'],
    ['default शून्य.', 'method गुणा.', 'verify करा.', 'practice करा.',],
    ['method वापरा', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['Team शेवट', 'field factory', 'players appended', 'output संघ'],
    ['मावळे नाव.', 'आरोही वेद.', 'सूची वाढवा.', 'verify करा.',],
    ['mutable टाळा', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['mutable दोष', 'list थेट', 'types गरज', '@dataclass हवा'],
    ['default धोका.', 'field योग्य.', 'लिहा नेहमी.', 'विसरू नका.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['init repr eq', 'कमी कोड', 'factory कधी', 'asdict वापर'],
    ['आपोआप सर्व.', 'मोठा वर्ग.', 'mutable हवे.', 'साधन उपयोगी.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['Book शेवट', 'श्रीमान योगी', 'पाने 320', 'output एकत्र'],
    ['दोन गुणधर्म.', 'print दोन.', 'verify करा.', 'practice करा.',],
    ['dataclass खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['Card शेवट', 'आरोही मावळे', 'व्यक्तिगत कार्ड', 'output सरळ'],
    ['नाव संघ.', 'एकत्र सांगा.', 'verify करा.', 'practice करा.',],
    ['Mini प्रोजेक्ट', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}