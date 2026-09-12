# -*- coding: utf-8 -*-
# Generator for CSS Level 8 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level8.ts. Base content ~110-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=36):
    lessons.append({
        'slug': slug, 'categoryId': 'web', 'title': title, 'marathiTitle': mt,
        'level': 'advanced', 'minutes': minutes, 'summary': summary,
        'sections': sections, 'practiceQuestions': pq, 'quiz': quiz,
        'challenge': challenge, 'interviewQuestions': iq, 'related': related,
        'prev': prev, 'next': nxt,
    })

def S(title, content, code=None):
    s = {'title': title, 'content': content}
    if code:
        s['code'] = code
    return s

# =====================================================================
# 1. NAV SYSTEMS
# =====================================================================
L('css-nav-systems',
  'Nav Systems',
  'nav — मार्ग रचना',
  'navigation patterns आणि states.',
  [
   S('1. nav कल्पना',
     'nav हे पहिलं.\n\nएकाच जागी मार्ग.\n\nशेवट स्पष्ट.\n\nक्रम स्थिर.\n\nस्क्रीन प्रत्येक.\n\nवापर सोपा.',
     'nav ul {\n  display: flex;\n  gap: 8px;\n}'),
   S('2. sidebar रचना',
     'sidebar अनुलंब.\n\nउंची पूर्ण.\n\nजागा स्थिर.\n\nस्क्रोल आत.\n\nआधार मजबूत.\n\nकोड सुबक.',
     '.sidebar {\n  display: grid;\n  gap: 4px;\n}\n.sidebar a {\n  padding: 10px 14px;\n}'),
   S('3. active स्थिती',
     'active भाग स्पष्ट.\n\nरंग नेमका.\n\naria-current जोड.\n\nया आधार.\n\nवाचक मार्ग.\n\nनियम स्वच्छ.',
     '.nav a[aria-current="page"] {\n  background: #eef2ff;\n  color: #4f46e5;\n}'),
   S('4. indicator थर',
     'indicator खाली.\n\nborder अंतर.\n\nरंग स्थिर.\n\ntransition गुळगुळीत.\n\nhover दृश्य.\n\nकोड सोपा.',
     '.nav a {\n  border-bottom: 2px solid transparent;\n}\n.nav a:hover {\n  border-color: #6366f1;\n}'),
   S('5. mobile मेनू',
     'mobile बटण.\n\nmenu लपवा.\n\nडाव हलवा.\n\nfocus सुरक्षित.\n\nscroll आत.\n\nसवय नेमकी.',
     '@media (width < 640px) {\n  .nav {\n    display: none;\n  }\n}'),
   S('6. आधार तपास',
     'flex आधार मजबूत.\n\ngrid उत्तम.\n\nwidget स्थिर.\n\ndisplay बदल.\n\nकोड वाचता.\n\nआधार घट्ट.',
     '.nav {\n  display: flex;\n  flex-wrap: wrap;\n}'),
   S('Mini Project',
     'nav गॅप द्या.\n\nएक नियम.',
     '.nav {\n  display: flex;\n  gap: 6px;\n}'),
  ],
  ['nav काय?', 'active कुठे?', 'indicator कसे?'],
  [{'q':'nav?','o':['मार्ग','रंग','फॉन्ट'],'c':0},
   {'q':'sidebar?','o':['अनुलंब','सपाट','रंग'],'c':0},
   {'q':'aria-current?','o':['सक्रिय','नवीन','रंग'],'c':0},
   {'q':'indicator?','o':['खाली','वर','शेवट'],'c':0}],
  {'prompt':'app nav मार्ग द्या.','starterCode':'.nav { display: flex; gap: 8px; }','expectedOutput':'Renders a clean app navigation bar'},
  'nav आधार?',
  ['css-breadcrumbs', 'css-tabs-aria', 'css-sticky-nav'],
  'css-marathi-capstone7', 'css-breadcrumbs')

# =====================================================================
# 2. BREADCRUMBS
# =====================================================================
L('css-breadcrumbs',
  'Breadcrumb Nav',
  'breadcrumb — मार्ग दाखला',
  'breadcrumb separation आणि semantics.',
  [
   S('1. breadcrumb',
     'breadcrumb मार्ग.\n\nघर सुरुवात.\n\nभाग क्रम.\n\nशेवट सध्या.\n\nवापर सोपा.\n\nआधार मजबूत.',
     '.crumbs {\n  display: flex;\n  flex-wrap: wrap;\n}'),
   S('2. विभाजक',
     'separator स्थिर.\n\n::before शैली.\n\nस्लॅश स्वतः.\n\nरंग कमी.\n\nवाचक मार्ग.\n\nकोड थोडा.',
     '.crumbs li + li::before {\n  content: "/";\n  margin-inline: 8px;\n  color: #94a3b8;\n}'),
   S('3. aria-label',
     'aria-label खास.\n\nscreen reader मार्ग.\n\nnav semantic.\n\nप्रवेश्यता वाढ.\n\nवाचक नियम.\n\nसवय योग्य.',
     'nav[aria-label="Breadcrumb"] ol {\n  list-style: none;\n  display: flex;\n}'),
   S('4. एलिप्सिस',
     'लांब मार्ग कापा.\n\ntext-overflow.\n\nआधीचा भाग लपा.\n\nअंतिम स्पष्ट.\n\nरचना नीट.\n\nकोड छोटा.',
     '.crumbs li:first-child ~ li {\n  display: none;\n}'),
   S('5. घर शॉर्ट',
     'घर शॉर्ट.\n\nआयकॉन छोटा.\n\nकर्ण्य जपा.\n\nस्लॅश उजवी.\n\nमराठी मार्ग.\n\nदृश्य स्वच्छ.',
     '.crumb-home {\n  font-weight: 700;\n}'),
   S('6. आधार',
     'flex आधार सर्वत्र.\n\nseparator जुने.\n\nlist-style reset.\n\nसवय चांगली.\n\nकोड स्वच्छ.\n\nआधार घट्ट.',
     '.crumbs ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}'),
   S('Mini Project',
     'breadcrumb विभाजक.\n\nएक नियम.',
     '.crumbs {\n  display: flex;\n}'),
  ],
  ['breadcrumb काय?', 'separator कसे?', 'aria कुठे?'],
  [{'q':'breadcrumb?','o':['मार्ग','रंग','फॉन्ट'],'c':0},
   {'q':'::before?','o':['विभाजक','गती','नाव'],'c':0},
   {'q':'aria-label?','o':['वर्णन','रंग','आकार'],'c':0},
   {'q':'ol?','o':['क्रम','गोंधळ','रंग'],'c':0}],
  {'prompt':'breadcrumb मार्ग द्या.','starterCode':'.crumbs { display: flex; }','expectedOutput':'Renders a breadcrumb trail with separators'},
  'breadcrumb आधार?',
  ['css-nav-systems', 'css-tabs-aria', 'css-forms-pro'],
  'css-nav-systems', 'css-tabs-aria')

# =====================================================================
# 3. TABS ARIA
# =====================================================================
L('css-tabs-aria',
  'Tabs ARIA',
  'tabs — भाग निवड',
  'tabs roles आणि state नियम.',
  [
   S('1. tabs कल्पना',
     'tabs भाग.\n\ntablist role.\n\nea च निवड.\n\npanel दिसे.\n\nकीबोर्ड मार्ग.\n\nनियम स्पष्ट.',
     '[role="tablist"] {\n  display: flex;\n  gap: 4px;\n}'),
   S('2. state नियम',
     'aria-selected true.\n\nसक्रिय रंग.\n\nचालू panel.\n\nhidden लपवा.\n\nरचना स्थिर.\n\nकोड थोडा.',
     '[role="tab"][aria-selected="true"] {\n  background: #eef2ff;\n  color: #4f46e5;\n}'),
   S('3. focus रिंग',
     'focus दाखवा.\n\noutline जोड.\n\nकीबोर्ड सुरक्षित.\n\nrole सुरक्षित.\n\nआधार भक्कम.\n\nवापर नेमका.',
     '[role="tab"]:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}'),
   S('4. panel शैली',
     'panel सुबक.\n\nधार मजबूत.\n\ntabindex नेमका.\n\nवाचक भाषा.\n\nविभाग स्पष्ट.\n\nकोड स्वच्छ.',
     '[role="tabpanel"] {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}'),
   S('5. संकेत नियम',
     'उजवी डावी बाण.\n\nHome End.\n\nकीबोर्ड वळण.\n\njavaScript लागू.\n\nनियम CSS.\n\nसवय योग्य.',
     '[role="tablist"] {\n  overflow-x: auto;\n}'),
   S('6. आधार',
     'tabs आधार मजबूत.\n\nrole स्थिर.\n\nfallback भाग.\n\nअनभिप्रेत खुला.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     '[role="tabpanel"] {\n  display: block;\n}'),
   S('Mini Project',
     'tabs सक्रिय दाखवा.\n\nborder नियम.',
     '[role="tab"][aria-selected="true"] {\n  border-bottom: 3px solid #6366f1;\n}'),
  ],
  ['tabs काय?', 'selected कुठे?', 'panel कसे?'],
  [{'q':'tablist?','o':['गट','रंग','फॉन्ट'],'c':0},
   {'q':'aria-selected?','o':['सक्रिय','नवीन','जड'],'c':0},
   {'q':'focus-visible?','o':['रिंग','रंग','गती'],'c':0},
   {'q':'tabpanel?','o':['भाग','शीर्षक','लिंक'],'c':0}],
  {'prompt':'tabs panel शैली द्या.','starterCode':'[role="tab"][aria-selected="true"] { border-bottom: 3px solid #6366f1; }','expectedOutput':'Renders accessible active tab state'},
  'tabs उपयोग?',
  ['css-nav-systems', 'css-forms-pro', 'css-breadcrumbs'],
  'css-breadcrumbs', 'css-forms-pro')

# =====================================================================
# 4. FORMS PRO
# =====================================================================
L('css-forms-pro',
  'Form Pro States',
  'form — प्रश्न व्यवस्था',
  'form states, focus आणि helper.',
  [
   S('1. form रचना',
     'form नियम स्पष्ट.\n\nlabel जोडले.\n\nerror जागा.\n\nमराठी मजकूर.\n\nसखोल प्रश्न.\n\nरचना सुबक.',
     '.field {\n  display: grid;\n  gap: 6px;\n}'),
   S('2. required star',
     'required तारका.\n\n::after जोड.\n\nरंग स्थिर.\n\nवाचक नाव.\n\nस्वतःचा संकेत.\n\nकोड थोडा.',
     '.required label::after {\n  content: " *";\n  color: #ef4444;\n}'),
   S('3. state शैली',
     'valid invalid.\n\nबॉर्डर रंग.\n\nआधार वाढ.\n\nमर्यादा स्पष्ट.\n\nवाचनीय जपा.\n\nसवय आराम.',
     'input:invalid {\n  border-color: #f87171;\n}\ninput:valid {\n  border-color: #22c55e;\n}'),
   S('4. focus शैली',
     'focus ring छान.\n\noutline offset.\n\nकीबोर्ड स्पष्ट.\n\nआधार मजबूत.\n\nसंवाद सुखद.\n\nकोड स्वच्छ.',
     'input:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}'),
   S('5. सहायता मजकूर',
     'helper छोटा.\n\nरंग नेमका.\n\nगहिरा आधार.\n\nplaceholder नको.\n\nमजकूर स्पष्ट.\n\nवाचक सुख.',
     '.hint {\n  font-size: 0.875rem;\n  color: #64748b;\n}'),
   S('6. आधार तपास',
     'form आधार सर्वत्र.\n\n:user-invalid नवे.\n\nstate पारखणे.\n\nप्रवेश्यता जपा.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     'input:user-invalid {\n  border-color: #ef4444;\n}'),
   S('Mini Project',
     'field ग्याप द्या.\n\nएक नियम.',
     '.field {\n  display: grid;\n  gap: 6px;\n}'),
  ],
  ['label काय?', 'valid कुठे?', 'helper कसे?'],
  [{'q':'label?','o':['नाव','रंग','गती'],'c':0},
   {'q':'::after?','o':['तारका','आभा','नाव'],'c':0},
   {'q':'focus-visible?','o':['कीबोर्ड','उंच','जड'],'c':0},
   {'q':'user-invalid?','o':['नवे','जुने','रंग'],'c':0}],
  {'prompt':'field प्रश्न रचना द्या.','starterCode':'.field { display: grid; gap: 6px; }','expectedOutput':'Renders a clear labeled form field'},
  'form आधार?',
  ['css-tabs-aria', 'css-switch-toggle', 'css-forms-pro'],
  'css-tabs-aria', 'css-switch-toggle')

# =====================================================================
# 5. SWITCH TOGGLE
# =====================================================================
L('css-switch-toggle',
  'Switch Toggle',
  'switch — पर्याय नियंत्रण',
  'custom switch आणि states.',
  [
   S('1. switch कल्पना',
     'switch पर्याय.\n\ncheckbox लपवा.\n\nनवा दृश्य.\n\nडाव उजवी.\n\nनियम CSS.\n\nआधार मजबूत.',
     '.switch {\n  position: relative;\n  width: 52px;\n  height: 28px;\n}'),
   S('2. thumb रचना',
     'thumb वर्तुळ.\n\ntransition गती.\n\nchecked सरकते.\n\ntransform हलवा.\n\nरंग बदल.\n\nकोड सुबक.',
     '.switch::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  border-radius: 9999px;\n  background: white;\n  transition: transform 0.2s;\n}'),
   S('3. checked नियम',
     'checked सक्रिय.\n\nरंग नवा.\n\nthumb हलकी.\n\nसरकता गती.\n\nनियम स्पष्ट.\n\nवापर नेमका.',
     '.switch input:checked + .track {\n  background: #22c55e;\n}\n.switch input:checked + .track::after {\n  transform: translateX(24px);\n}'),
   S('4. focus सुरक्षा',
     'focus ring.\n\nkeyboard सुख.\n\noutline जोड.\n\nskip नको.\n\nआधार भक्कम.\n\nकोड थोडा.',
     '.switch input:focus-visible + .track {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}'),
   S('5. disabled स्थिती',
     'disabled फिके.\n\nरंग नियम.\n\nवाचक आदर.\n\nसंकेत स्पष्ट.\n\nरचना स्थिर.\n\nसवय योग्य.',
     '.switch input:disabled + .track {\n  opacity: 0.5;\n}'),
   S('6. आधार',
     'switch आधार नवा.\n\ncheckbox जुना.\n\nappearance नियम.\n\nकाटेकोर वापर.\n\nआधार घट्ट.\n\nकोड स्वच्छ.',
     '.track {\n  appearance: none;\n  border-radius: 9999px;\n  background: #e2e8f0;\n}'),
   S('Mini Project',
     'track रंग द्या.\n\nएक नियम.',
     '.track {\n  background: #e2e8f0;\n}'),
  ],
  ['switch काय?', 'thumb कुठे?', 'checked कसे?'],
  [{'q':'thumb?','o':['वर्तुळ','आयत','रंग'],'c':0},
   {'q':'checked?','o':['सक्रिय','नवीन','रिक्त'],'c':0},
   {'q':':checked?','o':['निवड','रंग','आकार'],'c':0},
   {'q':'disabled?','o':['फिके','हलका','मोठा'],'c':0}],
  {'prompt':'switch toggle द्या.','starterCode':'.track { background: #e2e8f0; border-radius: 9999px; }','expectedOutput':'Renders a custom accessible switch toggle'},
  'switch आधार?',
  ['css-forms-pro', 'css-tabs-aria', 'css-prefers-reduced'],
  'css-forms-pro', 'css-skeleton-load')

# =====================================================================
# 6. SKELETON LOAD
# =====================================================================
L('css-skeleton-load',
  'Skeleton Loader',
  'skeleton — भार दृश्य',
  'skeleton आणि shimmer नियम.',
  [
   S('1. skeleton',
     'skeleton रिकामा.\n\nलोड आधी.\n\nआकार थर.\n\nरंग हलका.\n\nवाचक धीर.\n\nनियम स्पष्ट.',
     '.skeleton {\n  background: #e2e8f0;\n  border-radius: 8px;\n}'),
   S('2. shimmer नियम',
     'shimmer ढंग.\n\n::after सुरळीत.\n\ngradient हलणे.\n\nanimation चालू.\n\nस्पार्क दृश्य.\n\nकोड थोडा.',
     '.skeleton::after {\n  content: "";\n  display: block;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);\n  animation: shimmer 1.5s infinite;\n}'),
   S('3. width तोल',
     'आकार वेगळा.\n\nरुंदी प्रमाण.\n\navatar वर्तुळ.\n\nपंक्ती सुबक.\n\nरचना स्थिर.\n\nवापर योग्य.',
     '.s-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 9999px;\n}'),
   S('4. reduced सह',
     'reduced थांबा.\n\nanimation नको.\n\nस्थिर आधार.\n\nसवलत द्या.\n\nप्रवेश्यता जपा.\n\nकोड स्वच्छ.',
     '@media (prefers-reduced-motion: reduce) {\n  .skeleton::after {\n    animation: none;\n  }\n}'),
   S('5. state बदल',
     'लोड संपला.\n\nskeleton लुप्त.\n\nसामग्री दिसे.\n\nरचना जुळता.\n\nआधार स्थिर.\n\nनियम कडक.',
     '.loaded .skeleton {\n  display: none;\n}'),
   S('6. आधार',
     'skeleton आधार सर्व.\n\nkeyframes इच्छा.\n\nसर्वांसाठी खुला.\n\nकोड सुरक्षित.\n\nआधार घट्ट.\n\nसराव वाढ.',
     '@keyframes shimmer {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(100%); }\n}'),
   S('Mini Project',
     'skeleton आधार द्या.\n\nएक नियम.',
     '.skeleton {\n  background: #e2e8f0;\n}'),
  ],
  ['skeleton काय?', 'shimmer कुठे?', 'reduced कसे?'],
  [{'q':'skeleton?','o':['रिकामा','रंग','नाव'],'c':0},
   {'q':':after?','o':['ස්පார்க್','भाग','रंग'],'c':0},
   {'q':'reduced?','o':['थांबा','चालू','जड'],'c':0},
   {'q':'loaded?','o':['लुप्त','वाढे','रंग'],'c':0}],
  {'prompt':'skeleton थर द्या.','starterCode':'.skeleton { background: #e2e8f0; border-radius: 8px; }','expectedOutput':'Renders a calm skeleton loader'},
  'skeleton आधार?',
  ['css-switch-toggle', 'css-responsive-table', 'css-perf-hints'],
  'css-switch-toggle', 'css-responsive-table')

# =====================================================================
# 7. RESPONSIVE TABLE
# =====================================================================
L('css-responsive-table',
  'Responsive Table',
  'table — डेटा व्यवस्था',
  'data table स्क्रोल आणि cards.',
  [
   S('1. table रचना',
     'table data.\n\nव्यवस्था स्पष्ट.\n\nसीमा स्पष्ट.\n\nस्क्रोल सुरक्षा.\n\nखोली स्वतः.\n\nनियम स्पष्ट.',
     '.table-wrap {\n  overflow-x: auto;\n}'),
   S('2. header स्थिर',
     'th sticky.\n\nscroll आत.\n\nपार्श्वभूमी स्थिर.\n\nरंग जपा.\n\nरचना ठेवा.\n\nकोड थोडा.',
     'th {\n  position: sticky;\n  top: 0;\n  background: #f1f5f9;\n}'),
   S('3. zebra नियम',
     'zebra वाचन.\n\nपर्याय रंग.\n\nआधार मध्यम.\n\nवर हायलाइट.\n\nदृश्य शांत.\n\nसवय छान.',
     'tbody tr:nth-child(even) {\n  background: #f8fafc;\n}'),
   S('4. card मोड',
     'लहान screen.\n\ntable लुप्त.\n\ncard रचना.\n\ndata लेबल.\n\nदृश्य बदल.\n\nकोड वाचता.',
     '@media (width < 640px) {\n  td::before {\n    content: attr(data-label);\n  }\n}'),
   S('5. अंतिम स्तंभ',
     'अंतिम क्रम.\n\ndefault स्थिर.\n\nभाग गुळगुळीत.\n\nmargin आधार.\n\nव्यवस्था नीट.\n\nवापर नेमका.',
     '.total {\n  font-weight: 700;\n}'),
   S('6. आधार',
     'table आधार मजबूत.\n\nsticky जुने.\n\noverflow सर्वत्र.\n\ncard नवा.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     'table {\n  width: 100%;\n  border-collapse: collapse;\n}'),
   S('Mini Project',
     'table wrap द्या.\n\nएक नियम.',
     '.table-wrap {\n  overflow-x: auto;\n}'),
  ],
  ['table काय?', 'sticky कुठे?', 'card मोड कसे?'],
  [{'q':'table?','o':['डेटा','रंग','गती'],'c':0},
   {'q':'sticky th?','o':['स्थिर','उडते','जड'],'c':0},
   {'q':'zebra?','o':['रंग पर्याय','गती','नाव'],'c':0},
   {'q':':before?','o':['लेबल','रंग','आकार'],'c':0}],
  {'prompt':'table data व्यवस्था द्या.','starterCode':'.table-wrap { overflow-x: auto; }','expectedOutput':'Renders a scrollable responsive data table'},
  'table आधार?',
  ['css-skeleton-load', 'css-grid-patterns', 'css-notifications'],
  'css-skeleton-load', 'css-notifications')

# =====================================================================
# 8. NOTIFICATIONS
# =====================================================================
L('css-notifications',
  'Toast Stacks',
  'toast — सूचना ढिग',
  'toast स्टॅक आणि animation.',
  [
   S('1. toast',
     'toast वर्ल्ड.\n\nकोपरा उजवी.\n\nरचना स्थिर.\n\nगती सुरळीत.\n\nदृश्य स्पष्ट.\n\nआधार मजबूत.',
     '.toast {\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n}'),
   S('2. स्टॅक रचना',
     'अनेक toast.\n\nक्रम खाली.\n\nभाग सुबक.\n\nजागा तोल.\n\nकोड सहज.\n\nव्यवस्था नीट.',
     '.toast-stack {\n  display: grid;\n  gap: 8px;\n}'),
   S('3. रंग स्तर',
     'error warning.\n\nsuccess info.\n\nरंग नेमका.\n\nवाचक फरक.\n\nआयकॉन जोड.\n\nकोड थोडा.',
     '.toast-error {\n  border-inline-start: 4px solid #ef4444;\n}'),
   S('4. auto दृश्य',
     'auto गायब.\n\nसजीव गती.\n\nslide बाहेर.\n\nसमय नियंत्रण.\n\njavaScript गरज.\n\nCSS गती.',
     '.toast {\n  animation: slide-in 0.3s ease;\n}'),
   S('5. animation',
     'slide इन.\n\nfade हळू.\n\nwithdrawn नको.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय योग्य.',
     '@keyframes slide-in {\n  from { transform: translateX(100%); }\n  to { transform: translateX(0); }\n}'),
   S('6. आधार',
     'fixed आधार मजबूत.\n\ninset नवा.\n\nसर्व screen.\n\nz-index उच्च.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     '.toast-stack {\n  position: fixed;\n  inset-inline-end: 16px;\n  inset-block-end: 16px;\n}'),
   S('Mini Project',
     'toast गती द्या.\n\nएक नियम.',
     '.toast {\n  animation: slide-in 0.3s ease;\n}'),
  ],
  ['toast काय?', 'स्टॅक कुठे?', 'slide कसे?'],
  [{'q':'toast?','o':['सूचना','रंग','फॉन्ट'],'c':0},
   {'q':'fixed?','o':['स्थिर','उडते','जड'],'c':0},
   {'q':'error?','o':['लेबल रंग','गती','नाव'],'c':0},
   {'q':'slide-in?','o':['बाहेरून','रंग','आकार'],'c':0}],
  {'prompt':'toast stack द्या.','starterCode':'.toast-stack { position: fixed; inset-inline-end: 16px; inset-block-end: 16px; }','expectedOutput':'Renders a stacked toast notification area'},
  'toast आधार?',
  ['css-responsive-table', 'css-print-styles', 'css-grid-patterns'],
  'css-responsive-table', 'css-print-styles')

# =====================================================================
# 9. PRINT STYLES
# =====================================================================
L('css-print-styles',
  'Print Styles',
  'print — छपाई नियम',
  'print media आणि page नियम.',
  [
   S('1. print कल्पना',
     'print @media.\n\nकागद थर.\n\nरचना साधी.\n\nरंग कमी.\n\nमजकूर ठोस.\n\nनियम स्पष्ट.',
     '@media print {\n  body {\n    background: white;\n  }\n}'),
   S('2. hidden भाग',
     'nav भाग लपा.\n\ntoast नको.\n\nस्क्रीनचे कड.\n\nमुद्रण स्वच्छ.\n\nसवय योग्य.\n\nकोड थोडा.',
     '@media print {\n  nav,\n  .toast {\n    display: none !important;\n  }\n}'),
   S('3. page नियम',
     '@page मार्जिन.\n\nsize नेमका.\n\nआधार जुना.\n\nकागद तोल.\n\nमुद्रण सुबक.\n\nवापर नेमका.',
     '@page {\n  margin: 2cm;\n}'),
   S('4. break नियम',
     'break-inside avoid.\n\nभाग संपूर्ण.\n\nविभाग नवा.\n\nवाचन संयोजन.\n\nरचना शांत.\n\nकोड स्वच्छ.',
     '.card {\n  break-inside: avoid;\n}'),
   S('5. links वाचता',
     'link url दाखवा.\n\n::after जोड.\n\nprint केवळ.\n\nवाचक मार्ग.\n\nसवय छान.\n\nकोड थोडा.',
     'a[href]::after {\n  content: " (" attr(href) ")";\n}'),
   S('6. आधार',
     'print आधार जुना.\n\n@page खुला.\n\nA4 सामान्य.\n\ncolor-adjust नवा.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     '@media print {\n  a[href] {\n    color: inherit;\n  }\n}'),
   S('Mini Project',
     'page margin द्या.\n\nएक नियम.',
     '@page {\n  margin: 2cm;\n}'),
  ],
  ['print काय?', '@page कुठे?', 'break कसे?'],
  [{'q':'print?','o':['कागद','रंग','गती'],'c':0},
   {'q':'@page?','o':['मार्जिन','नाव','आकार'],'c':0},
   {'q':'break-inside?','o':['avoid','रंग','गती'],'c':0},
   {'q':':after?','o':['url','नाव','रंग'],'c':0}],
  {'prompt':'print page द्या.','starterCode':'@page { margin: 2cm; }','expectedOutput':'Renders clean print page layout'},
  'print आधार?',
  ['css-notifications', 'css-grid-patterns', 'css-dark-mode'],
  'css-notifications', 'css-grid-patterns')

# =====================================================================
# 10. GRID PATTERNS
# =====================================================================
L('css-grid-patterns',
  'Grid Patterns',
  'grid — नमुने रचना',
  'holy grail subgrid आणि flows.',
  [
   S('1. holy grail',
     'holy grail रचना.\n\nheader sidebar.\n\nmain भाग.\n\nfooter तळ.\n\nनवीन grid.\n\nनियम स्पष्ट.',
     '.layout {\n  display: grid;\n  grid-template-areas: "header header" "side main" "footer footer";\n}'),
   S('2. 12-column',
     '12 column व्यवस्था.\n\nspan नियम.\n\nभाग मोजा.\n\nरचना लवचिक.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.col-4 {\n  grid-column: span 4;\n}'),
   S('3. auto-flow',
     'auto-flow दिशा.\n\ndense भरणे.\n\nभाग जुळता.\n\nरचना सुबक.\n\nस्क्रीन प्रत्येक.\n\nनियम स्पष्ट.',
     '.mosaic {\n  grid-auto-flow: dense;\n}'),
   S('4. subgrid',
     'subgrid खोल.\n\nभाग एकरेषा.\n\nकार्ड थर.\n\ncolumn समान.\n\nआधार नवीन.\n\nकोड स्वच्छ.',
     '.card {\n  display: grid;\n  grid-template-rows: subgrid;\n}'),
   S('5. stagger नियम',
     'stagger सजावट.\n\nदिशा पाळा.\n\noffset थर.\n\nजागा वाचा.\n\nरचना सजीव.\n\nसवय छान.',
     '.item:nth-child(even) {\n  margin-top: 24px;\n}'),
   S('6. आधार',
     'grid आधार मजबूत.\n\nsubgrid नवीन.\n\nflex साधा.\n\nदोन्ही जोडा.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     '@supports (grid-template-rows: subgrid) {\n  .card {\n    grid-template-rows: subgrid;\n  }\n}'),
   S('Mini Project',
     'layout grid द्या.\n\nएक नियम.',
     '.layout {\n  display: grid;\n}'),
  ],
  ['grid काय?', 'span कुठे?', 'subgrid कसे?'],
  [{'q':'holy grail?','o':['रचना','रंग','फॉन्ट'],'c':0},
   {'q':'span?','o':['विस्तार','गती','नाव'],'c':0},
   {'q':'dense?','o':['भरणे','रंग','गती'],'c':0},
   {'q':'subgrid?','o':['एकरेषा','जड','नाव'],'c':0}],
  {'prompt':'12 column grid द्या.','starterCode':'.col-4 { grid-column: span 4; }','expectedOutput':'Renders a flexible column grid system'},
  'grid आधार?',
  ['css-print-styles', 'css-masonry-grid', 'css-container-queries'],
  'css-print-styles', 'css-dark-mode')

# =====================================================================
# 11. DARK MODE
# =====================================================================
L('css-dark-mode',
  'Dark Mode',
  'dark — रात्री थीम',
  'color-scheme आणि टोकन योजना.',
  [
   S('1. dark कल्पना',
     'dark थीम.\n\ncolor-scheme हलका.\n\nटोकन फिरवा.\n\nरात्री शांत.\n\nआधार नवीन.\n\nउपयोग साधा.',
     'html {\n  color-scheme: dark;\n}'),
   S('2. रंग टोकन',
     'surface रात्री.\n\nink उजळा.\n\nएकच स्रोत.\n\nबदल स्थिर.\n\nव्यवस्था शुद्ध.\n\nकोड थोडा.',
     ':root[data-theme="dark"] {\n  --surface: #0f172a;\n  --ink: #e2e8f0;\n}'),
   S('3. auto नियम',
     'prefers स्वतः.\n\nवापरकर्ता सेटिंग.\n\nआज्ञा माना.\n\nटोकन बदल.\n\nदृश्य स्पष्ट.\n\nनियम योग्य.',
     '@media (prefers-color-scheme: dark) {\n  :root {\n    --surface: #0f172a;\n    --ink: #e2e8f0;\n  }\n}'),
   S('4. हायलाइट',
     'योग्य रंग.\n\ncontrast जपा.\n\nहाय भाग.\n\nभाग वेगळा.\n\nवाचक सुख.\n\nकोड स्वच्छ.',
     '.highlight {\n  background: #1e293b;\n  color: #f8fafc;\n}'),
   S('5. transition',
     'थीम बदल.\n\ntransition रंग.\n\nरीळ गुळगुळीत.\n\nसजीव दृश्य.\n\nकोड लहान.\n\nसवय नेमकी.',
     'body {\n  transition: background-color 0.3s, color 0.3s;\n}'),
   S('6. आधार',
     'dark आधार नवीन.\n\nजुने media.\n\nदुहेरी टोकन.\n\nसर्व ब्राउझर.\n\nकोड सुरक्षित.\n\nआधार घट्ट.',
     '@media (prefers-color-scheme: dark) {\n  * {\n    color-scheme: dark;\n  }\n}'),
   S('Mini Project',
     'dark color द्या.\n\nएक नियम.',
     'html {\n  color-scheme: dark;\n}'),
  ],
  ['dark काय?', 'color-scheme कुठे?', 'टोकन कसे?'],
  [{'q':'dark?','o':['रात्री','दिवस','रंग'],'c':0},
   {'q':'color-scheme?','o':['मार्गदर्शक','गती','नाव'],'c':0},
   {'q':'prefers-color?','o':['auto','जड','रंग'],'c':0},
   {'q':'transition?','o':['गुळगुळीत','कठोर','मंद'],'c':0}],
  {'prompt':'dark स्वतः थीम द्या.','starterCode':'html { color-scheme: dark; }','expectedOutput':'Renders respect for system dark mode'},
  'dark आधार?',
  ['css-grid-patterns', 'css-design-tokens', 'css-prefers-reduced'],
  'css-grid-patterns', 'css-marathi-capstone8')

# =====================================================================
# 12. MARATHI CAPSTONE 8
# =====================================================================
L('css-marathi-capstone8',
  'Marathi Capstone 8',
  'Component Bahar — भाग संग्रह',
  'सर्व Level 8 तंत्रांचा संग्रह.',
  [
   S('1. ध्येय',
     'component portal.\n\nnav मार्ग.\n\nटॅब व्यवस्था.\n\nform रचना.\n\ntable स्क्रोल.\n\nथीम दोन्ही.',
     ':root {\n  --surface: #ffffff;\n  --ink: #0f172a;\n}'),
   S('2. nav भाग',
     'nav एकत्र.\n\nsidebar स्थिर.\n\nbreadcrumb खाली.\n\nमार्ग स्पष्ट.\n\nरचना सुबक.\n\nकोड थोडा.',
     '.app-nav {\n  display: flex;\n  gap: 8px;\n  border-bottom: 1px solid #e2e8f0;\n}'),
   S('3. tabs भाग',
     'tabs निवड.\n\npanel जोड.\n\naria नियम.\n\nशैली स्थिर.\n\nवाचक मार्ग.\n\nवापर योग्य.',
     '[role="tab"][aria-selected="true"] {\n  border-bottom: 3px solid #6366f1;\n}'),
   S('4. form भाग',
     'form प्रश्न.\n\nlabel जोड.\n\nerror कमी.\n\nरचना स्पष्ट.\n\nआधार घट्ट.\n\nवाचनीय वाढ.',
     '.field {\n  display: grid;\n  gap: 6px;\n}'),
   S('5. table गती',
     'table लपवा.\n\ncard मोड.\n\ndata लेबल.\n\nरचना बदल.\n\nदृश्य स्पष्ट.\n\nकोड स्वच्छ.',
     '@media (width < 640px) {\n  td::before {\n    content: attr(data-label);\n  }\n}'),
   S('6. थीम स्थिर',
     'dark टोकन.\n\nprint भाग.\n\nरात्री शांत.\n\nLevel 8 पूर्ण.\n\nवारसा मजबूत.\n\nसंग्रह सजीव.',
     '@media (prefers-color-scheme: dark) {\n  :root {\n    --surface: #0f172a;\n    --ink: #e2e8f0;\n  }\n}'),
   S('Mini Project',
     'brand टोकन.\n\nसर्व भाग.',
     ':root {\n  --brand: #4f46e5;\n}'),
  ],
  ['nav कसे?', 'tabs कुठे?', 'form काय?'],
  [{'q':'bahar?','o':['संग्रह','रंग','गती'],'c':0},
   {'q':'nav?','o':['मार्ग','रंग','नाव'],'c':0},
   {'q':'tab panel?','o':['भाग','शीर्षक','रंग'],'c':0},
   {'q':'dark?','o':['टोकन','जड','नाव'],'c':0}],
  {'prompt':'component portal पूर्ण.','starterCode':':root { --brand: #4f46e5; }','expectedOutput':'Renders polished Marathi component portal using Level 8 techniques'},
  'Level 8 नवीन काय?',
  ['css-dark-mode', 'css-grid-patterns'],
  'css-dark-mode', 'css-nav-systems')

# ============ RENDER ============
def js_str(s):
    return json.dumps(s, ensure_ascii=False)

def code_block(code):
    ec = code.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '`' + ec + '`'

def render_lesson(i, lesson):
    parts = ["  {"]
    for k, v in lesson.items():
        if k == 'sections':
            parts.append("    sections: [")
            for s in v:
                line = "      { title: " + js_str(s["title"]) + ", content: " + js_str(s["content"])
                if s.get('code'):
                    line += ", code: " + code_block(s['code'])
                    line += ", codeLanguage: \"%s\"" % CODE_LANG
                line += " },"
                parts.append(line)
            parts.append("    ],")
        elif k == 'quiz':
            parts.append("    quiz: [")
            for q in v:
                opts = ", ".join(js_str(o) for o in q['o'])
                parts.append("      { question: " + js_str(q['q']) + ", options: [" + opts + "], correct: " + str(q['c']) + " },")
            parts.append("    ],")
        elif k == 'practiceQuestions':
            parts.append("    practiceQuestions: [" + ", ".join(js_str(s) for s in v) + "],")
        elif k == 'interviewQuestions':
            parts.append("    interviewQuestions: [" + ", ".join(js_str(s) for s in v) + "],")
        elif k == 'related':
            parts.append("    related: [" + ", ".join(js_str(r) for r in v) + "],")
        elif k == 'challenge':
            c = v
            if isinstance(c, str):
                c = {'prompt': c, 'starterCode': '', 'expectedOutput': 'Renders Marathi lesson preview'}
            parts.append("    challenge: {")
            parts.append("      prompt: " + js_str(c["prompt"]) + ",")
            parts.append("      starterCode: " + code_block(c["starterCode"]) + ",")
            parts.append("      expectedOutput: " + js_str(c["expectedOutput"]) + ",")
            parts.append("    },")
        else:
            if k in ('slug', 'categoryId', 'title', 'marathiTitle', 'level', 'minutes', 'summary', 'prev', 'next'):
                parts.append("    " + k + ": " + js_str(v) + ",")
    parts.append("    levelLabel: CSS8_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 8 — Component Systems ===\n'
    header += 'export const CSS8_LABEL = "CSS · Level 8 — Component Systems";\n'
    header += '\nexport const cssLevel8: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css8_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css8_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css8_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level8.ts')
print("WROTE css-level8.ts, lines:", len(out.split(chr(10))))