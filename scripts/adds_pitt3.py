# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज पुढे जा', 'itertools साधने', 'combinations संच', 'permutations क्रम'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['chain product', 'count islice'],
    ['हेच सार.', 'आज शिकतो.',],
),
1: m2(
    ['जोड्या उजळ', 'combinations', 'permutations', 'तयार मसाला'],
    ['कोणते जोडतात.', 'कोणत्या ठिकाणी.', 'स्वतः लिहू नका.', 'itertools उपयोगी.',],
    ['उपमा घट्ट', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['combinations नवा', 'permutations नवा', 'output दोन ओळी', 'verify करा'],
    ['तीन पैकी दोन.', 'दोन पैकी दोन.', 'तुकडे मिळतात.', 'output अचूक.',],
    ['import itertools', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['chain नवा', 'product नवा', 'output दोन ओळी', 'verify करा'],
    ['एक दोन तीन चार.', 'a b गुणन.', 'तुकडे क्रमाने.', 'output अचूक.',],
    ['import itertools', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['count नवा', 'islice मर्यादा', 'output चार', 'verify करा'],
    ['पाच पासून.', 'पहिले चार.', 'सहा सात आठ.', 'output अचूक.',],
    ['import itertools', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['list() विसरले', 'मोठा data', 'product क्रम', 'चुका टाळा'],
    ['iterator दिसते.', 'वाढ मोठी.', 'क्रम लक्षात.', 'verify करा.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['iterator सर्व', 'cycles लहान', 'count अमर्याद', 'combinations महत्त्व'],
    ['प्रत्येक वेळी.', 'data काळजी.', 'islice ने.', 'क्रम बघा.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['combinations खेळ', 'चार पैकी दोन', 'गणती सहा', 'Interactive'],
    ['जोड्या कितीतरी.', 'सहा मिळतात.', 'verify करा.', 'practice करा.',],
    ['import itertools', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['संघ जोड्या नवा', 'चार खेळाडू', 'सगळ्या जोड्या', 'output सहा ओळी'],
    ['आरोही मीरा.', 'वेद सोहम.', 'प्रत्येक जोडी.', 'verify करा.',],
    ['import itertools', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}