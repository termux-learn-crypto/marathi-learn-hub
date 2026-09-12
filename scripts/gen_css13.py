# -*- coding: utf-8 -*-
# Generator for CSS Level 13 (Marathi): 12 lessons x 7 sections.
# Theme: Precision & Control (grid-template-areas, auto-fit/fill, currentColor,
# cascade keywords, typographic units, easing functions, focus-within, env(),
# overflow deep, table-layout, page-break, capstone).
# Emits src/data/tutorials/css-level13.ts.
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=40):
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
# 1. GRID TEMPLATE AREAS
# =====================================================================
L('css-grid-template',
  'Grid Template',
  'grid-template — रचना नकाशा',
  'grid-template-areas सह जागा नकाशा.',
  [
   S('1. areas कल्पना',
     'grid-template-areas नियम.\n\nnamed सेल.\n\nरचना वाचता.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.layout {\n  grid-template-areas:\n    "header header"\n    "main side"\n    "footer footer";\n}'),
   S('2. area नाव',
     'नाव नेमके.\n\ngrid-area नियम.\n\nमुल जुळतात.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.header { grid-area: header; }\n.main { grid-area: main; }'),
   S('3. मध्य जागा',
     'काळजी ओळ.\n\nempty सेल.\n\nवाचता रचना.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.layout {\n  grid-template-areas:\n    "header header"\n    ". main"\n    "footer footer";\n}'),
   S('4. दोन मध्य',
     'जागा तोल.\n\nतिघे विभाग.\n\nनियंत्रण स्पष्ट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.layout {\n  grid-template-areas:\n    "h h h"\n    "m s a"\n    "f f f";\n}'),
   S('5. responsive नियम',
     'एक स्तंभ.\n\nareas बदल.\n\nमोबाईल नीट.\n\nवापर सोपा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '@media (max-width: 600px) {\n  .layout {\n    grid-template-areas:\n      "h"\n      "m"\n      "s"\n      "f";\n  }\n}'),
   S('6. एकत्र नियम',
     'ओळ उंची.\n\nस्तंभ रुंदी.\n\nएकत्र योजना.\n\nरचना पूर्ण.\n\nकोड स्वच्छ.\n\nवापर योग्य.',
     '.layout {\n  grid-template-areas: "h h" "m s" "f f";\n  grid-template-rows: auto 1fr auto;\n}'),
   S('Mini Project',
     'layout नकाशा.\n\nareas एक.',
     '.page {\n  grid-template-areas: "header header" "main sidebar" "footer footer";\n  grid-template-rows: auto 1fr auto;\n}'),
  ],
  ['areas काय?', 'grid-area कुठे?', 'empty सेल कसा?', 'responsive कसा?'],
  [{'q':'grid-template-areas?','o':['नकाशा','रंग','ध्वनी'],'c':0},
   {'q':'grid-area?','o':['नाव द्या','जोडा रंग','रेखा'],'c':0},
   {'q':'. सेल?','o':['रिकामा','मुख्य','थर'],'c':0},
   {'q':'responsive?','o':['areas बदल','ध्वनी','क्रम'],'c':0}],
  {'prompt':'पृष्ठ नकाशा तयार करा.','starterCode':'.page {\n  grid-template-areas: "header header" "main sidebar" "footer footer";\n  grid-template-rows: auto 1fr auto;\n}','expectedOutput':'Marathi page layout by named areas'},
  ['areas फायदा?', 'सेल रिकामा कधी?'],
  ['css-auto-fit-fill', 'css-grid-system', 'css-grid-auto-flow'],
  'css-marathi-capstone12', 'css-auto-fit-fill')

# =====================================================================
# 2. AUTO FIT / FILL
# =====================================================================
L('css-auto-fit-fill',
  'Auto Fit Fill',
  'auto-fit — कार्ड नियम',
  'repeat auto-fit auto-fill responsive कार्ड.',
  [
   S('1. auto-fit कल्पना',
     'repeat auto-fit.\n\nminmax नियम.\n\nकार्ड जुळतात.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}'),
   S('2. auto-fill नियम',
     'auto-fill जागा.\n\nरिकामा राहो.\n\nगणना स्पष्ट.\n\nदृश्य नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.grid {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}'),
   S('3. एकfr तोल',
     'minmax मध्ये.\n\nफ्रेक्शन जुळतो.\n\nरुंदी वाढे.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.cards {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}'),
   S('4. अंतर नियम',
     'gap थर.\n\nकार्ड जागा.\n\nवळण नेमके.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.grid {\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}'),
   S('5. fit vs fill',
     'fit रुंदी.\n\nfill रिकामा.\n\nनिवड नेमकी.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.fill {\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n.fit {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}'),
   S('6. आधार नियम',
     'repeat आधार.\n\nminmax आधार.\n\nजुने साधे.\n\nतपासा थर.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}'),
   S('Mini Project',
     'product कार्ड.\n\nauto-fit एक.',
     '.products {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}'),
  ],
  ['auto-fit काय?', 'auto-fill कुठे?', 'minmax का?', 'gap कशी?'],
  [{'q':'auto-fit?','o':['रिकामा नको','थांबे','रंग'],'c':0},
   {'q':'auto-fill?','o':['रिकामा ठेवते','नवीन','ध्वनी'],'c':0},
   {'q':'minmax?','o':['किमान जास्त','रेखा','क्रम'],'c':0},
   {'q':'1fr?','o':['समान भाग','मोठा','थर'],'c':0}],
  {'prompt':'कार्ड ग्रिड बनवा.','starterCode':'.products {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}','expectedOutput':'Marathi products grid adapts to columns'},
  ['fit vs fill?', 'minmax वापर?'],
  ['css-grid-template', 'css-gap-mastery', 'css-masonry-grid'],
  'css-grid-template', 'css-current-color')

# =====================================================================
# 3. CURRENT COLOR
# =====================================================================
L('css-current-color',
  'Current Color',
  'currentColor — रंग एक',
  'currentColor सह रंग जुळणी.',
  [
   S('1. currentColor कल्पना',
     'currentColor नियम.\n\nमजकूर रंग.\n\nकड जुळतो.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.btn {\n  border: 2px solid currentColor;\n}'),
   S('2. shadow थर',
     'box-shadow मध्ये.\n\nरंग सारखा.\n\nhover वजन.\n\nदृश्य नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  box-shadow: 0 4px 12px currentColor;\n}'),
   S('3. svg नियम',
     'fill currentColor.\n\nstroke सारखा.\n\nicon रंगे.\n\nरचना स्पष्ट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.icon {\n  fill: currentColor;\n}'),
   S('4. किनार थर',
     'border color.\n\nbackground नाही.\n\nरंग एक मिळे.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.chip {\n  background: transparent;\n  color: #0d9488;\n  border: 1px solid currentColor;\n}'),
   S('5. hover नियम',
     'रंग बदल.\n\nएक निकष.\n\nसर्व थर जुळतात.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.btn:hover {\n  color: #155e75;\n}'),
   S('6. मर्यादा',
     'currentColor साधा.\n\ngradient नाही.\n\nनियम नेमका.\n\nवापर योग्य.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.only-color {\n  outline: 2px solid currentColor;\n}'),
   S('Mini Project',
     'icon रंग.\n\ncurrent एक.',
     '.brand-icon {\n  fill: currentColor;\n}'),
  ],
  ['currentColor काय?', 'shadow कुठे?', 'svg का?', 'hover कसा?'],
  [{'q':'currentColor?','o':['मजकूर रंग','ध्वनी','रेखा'],'c':0},
   {'q':'border मध्ये?','o':['कड रंगे','थर','क्रम'],'c':0},
   {'q':'svg fill?','o':['आकृती रंगे','रेषा','ओळ'],'c':0},
   {'q':'hover?','o':['रंग बदल','नवीन','थांबे'],'c':0}],
  {'prompt':'icon रंग द्या.','starterCode':'.brand-icon {\n  fill: currentColor;\n}','expectedOutput':'Marathi brand icon follows text color'},
  ['currentColor फायदा?', 'gradient का नाही?'],
  ['css-cascade-keywords', 'css-colors-background', 'css-svg-styles'],
  'css-auto-fit-fill', 'css-cascade-keywords')

# =====================================================================
# 4. CASCADE KEYWORDS
# =====================================================================
L('css-cascade-keywords',
  'Cascade Keywords',
  'cascade keywords — मूल्य नियम',
  'unset inherit revert initial नियम.',
  [
   S('1. unset कल्पना',
     'unset value.\n\nस्वयं निकष.\n\nपूर्व नियम.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'button {\n  all: unset;\n}'),
   S('2. inherit थर',
     'inherit स्पष्ट.\n\nमुल नियम.\n\nरंग खाली.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.child {\n  color: inherit;\n}'),
   S('3. revert नियम',
     'revert value.\n\nbrowser आधार.\n\nआपले नियम रोख.\n\nउपयोग स्पष्ट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.reset {\n  all: revert;\n}'),
   S('4. initial थर',
     'initial मूल्य.\n\nअर्थ नेमका.\n\nलेख घट्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.zero {\n  margin: initial;\n}'),
   S('5. layer बंद',
     'layer revert.\n\nपूर्व थर.\n\nक्रम स्थिर.\n\nरचना नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@layer {\n  button {\n    background: unset;\n  }\n}'),
   S('6. all शॉर्टकट',
     'all नियम.\n\nप्रत्येक गुणधर्म.\n\nमोठा रीसेट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.bare {\n  all: unset;\n  font: inherit;\n}'),
   S('Mini Project',
     'बटण reset.\n\nall unset.',
     'button.reset {\n  all: unset;\n}'),
  ],
  ['unset काय?', 'inherit कुठे?', 'revert कधी?', 'all कसा?'],
  [{'q':'unset?','o':['आपोआप','जड','रंग'],'c':0},
   {'q':'inherit?','o':['वारसा','नवीन','ध्वनी'],'c':0},
   {'q':'revert?','o':['browser आधार','थर','रेखा'],'c':0},
   {'q':'initial?','o':['मूळ मूल्य','क्रम','शोर'],'c':0}],
  {'prompt':'बटण रीसेट करा.','starterCode':'button.reset {\n  all: unset;\n}','expectedOutput':'Marathi button resets to defaults'},
  ['unset vs inherit?', 'revert-layer कधी?'],
  ['css-typography', 'css-cascade-layers', 'css-forms-styling'],
  'css-current-color', 'css-typographic-units')

# =====================================================================
# 5. TYPOGRAPHIC UNITS
# =====================================================================
L('css-typographic-units',
  'Typographic Units',
  'typographic units — अक्षर एकक',
  'ch ex cap lh एकक वापर.',
  [
   S('1. ch कल्पना',
     'ch unit.\n\nअक्षर रुंदी.\n\nशून्य आकार.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.code {\n  max-width: 60ch;\n}'),
   S('2. ex नियम',
     'ex unit.\n\nछोटा अक्षर उंची.\n\nओळ नीट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.small {\n  line-height: 3ex;\n}'),
   S('3. rem ठोस',
     'rem नियम.\n\nroot आधार.\n\nजागा मिळे.\n\nवापर सोपा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.section {\n  padding: 1.5rem;\n}'),
   S('4. lh नियम',
     'lh unit.\n\nline-height प्रमाण.\n\nबटण उंची.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn {\n  min-height: calc(1lh + 1rem);\n}'),
   S('5. cap थर',
     'cap unit.\n\nमोठी अक्षर उंची.\n\nमथळा नीट.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.title {\n  margin-block: 1cap;\n}'),
   S('6. एकत्र नियम',
     'एकत्र units.\n\nअंतर तोल.\n\nरचना पूर्ण.\n\nवापर योग्य.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.article {\n  max-width: 70ch;\n  line-height: 1.6;\n}'),
   S('Mini Project',
     'ओळ रुंदी.\n\nch नियम.',
     '.prose {\n  max-width: 66ch;\n}'),
  ],
  ['ch काय?', 'ex कुठे?', 'cap कधी?', 'lh का?'],
  [{'q':'ch unit?','o':['अक्षर रुंदी','रंग','ध्वनी'],'c':0},
   {'q':'ex?','o':['छोटा उंची','थर','रेखा'],'c':0},
   {'q':'cap?','o':['मोठी अक्षर','क्रम','शोर'],'c':0},
   {'q':'lh?','o':['ओळ उंची','रुंदी','जाडी'],'c':0}],
  {'prompt':'ओळ रुंदी द्या.','starterCode':'.prose {\n  max-width: 66ch;\n}','expectedOutput':'Marathi prose capped at 66ch'},
  ['ch फायदा?', 'lh कुठे उपयोगी?'],
  ['css-typography', 'css-text-spacing', 'css-typography'],
  'css-cascade-keywords', 'css-animation-easing')

# =====================================================================
# 6. ANIMATION EASING
# =====================================================================
L('css-animation-easing',
  'Animation Easing',
  'animation easing — गती वक्र',
  'timing function easing गती नियम.',
  [
   S('1. easing कल्पना',
     'timing function.\n\nवेग बदल.\n\nगती मऊ.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.box {\n  transition: transform 0.3s ease;\n}'),
   S('2. cubic-bezier',
     'cubic-bezier वक्र.\n\nआकार नेमका.\n\nhover सजीव.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn {\n  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}'),
   S('3. steps थर',
     'steps function.\n\nचरण नेमके.\n\nगती कडक.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.icon {\n  animation: spin 1s steps(8) infinite;\n}'),
   S('4. ease-in-out',
     'ease-in-out थर.\n\nप्रारंभ मऊ.\n\nशेवट मऊ.\n\nदृश्य सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  transition: all 0.4s ease-in-out;\n}'),
   S('5. वक्र तपास',
     'वक्र नेमके.\n\nअतिरेक नको.\n\nनियम घट्ट.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.pop {\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}'),
   S('6. दिशा नियम',
     'दिशा नेमकी.\n\nउलट गती.\n\nसजीव क्रम.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card {\n  animation: slide 0.5s ease-out;\n}'),
   S('Mini Project',
     'बटण वक्र.\n\ncubic एक.',
     '.btn {\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}'),
  ],
  ['easing काय?', 'cubic कुठे?', 'steps कधी?', 'cubic points कसे?'],
  [{'q':'timing function?','o':['गती वक्र','रंग','ध्वनी'],'c':0},
   {'q':'cubic-bezier?','o':['वक्र नियम','थर','रेखा'],'c':0},
   {'q':'steps?','o':['चरण गती','मऊ','जड'],'c':0},
   {'q':'ease-in-out?','o':['मऊ सुरुवात','तेज','क्रम'],'c':0}],
  {'prompt':'बटण वक्र द्या.','starterCode':'.btn {\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}','expectedOutput':'Marathi button bounces with cubic curve'},
  ['cubic समज कसे?', 'steps केव्हा?'],
  ['css-transitions-animations', 'css-animation-advanced', 'css-keyframes-tip'],
  'css-typographic-units', 'css-focus-within')

# =====================================================================
# 7. FOCUS WITHIN
# =====================================================================
L('css-focus-within',
  'Focus Within',
  'focus-within — गट focus',
  ':focus-within keyboard मदत.',
  [
   S('1. focus-within कल्पना',
     ':focus-within नियम.\n\nआत focus.\n\nगट उजळ.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.card:focus-within {\n  outline: 2px solid #0d9488;\n}'),
   S('2. कार्ड थर',
     'कार्ड focus.\n\nकिनार रंग.\n\nkeyboard सुख.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.field:focus-within {\n  border-color: #0d9488;\n}'),
   S('3. सर्च नियम',
     'search गट.\n\nआत icon.\n\nरंग नेमका.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.search:focus-within {\n  box-shadow: 0 0 0 3px #99f6e4;\n}'),
   S('4. details थर',
     'details focus.\n\nsummary स्पष्ट.\n\nkeyboard नियम.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'details:focus-within summary {\n  color: #0d9488;\n}'),
   S('5. ओळ नियम',
     'ओळ focus.\n\nपार्श्वभूमी हलकी.\n\nक्रम स्पष्ट.\n\nवापर सोपा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.row:focus-within {\n  background: #f8fafc;\n}'),
   S('6. प्रवेश थर',
     'keyboard मदत.\n\nदृश्य स्पष्ट.\n\ncontrast राखा.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nवापर योग्य.',
     '.group:focus-within {\n  border: 2px solid #0d9488;\n}'),
   S('Mini Project',
     'फॉर्म गट.\n\nfocus एक.',
     '.field-group:focus-within {\n  border: 2px solid #0d9488;\n}'),
  ],
  ['focus-within काय?', 'कार्ड कुठे?', 'details कसा?', 'प्रवेश का?'],
  [{'q':':focus-within?','o':['आत focus','बाहेर','ध्वनी'],'c':0},
   {'q':'कार्ड?','o':['किनार रंग','थर','रेखा'],'c':0},
   {'q':'details?','o':['summary रंग','नवीन','क्रम'],'c':0},
   {'q':'प्रवेश?','o':['keyboard मदत','रंग','शोर'],'c':0}],
  {'prompt':'फॉर्म गट उजळ करा.','starterCode':'.field-group:focus-within {\n  border: 2px solid #0d9488;\n}','expectedOutput':'Marathi form group highlights on focus'},
  ['focus-within vs focus?', 'दृश्य contrast?'],
  ['css-focus-visible', 'css-tabs-aria', 'css-forms-styling'],
  'css-animation-easing', 'css-env-function')

# =====================================================================
# 8. ENV FUNCTION
# =====================================================================
L('css-env-function',
  'Env Function',
  'env() — सुरक्षित जागा',
  'env() safe-area-inset वापर.',
  [
   S('1. env कल्पना',
     'env() नियम.\n\nsafe-area घ्या.\n\nnotch जागा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.bottom {\n  padding-bottom: env(safe-area-inset-bottom);\n}'),
   S('2. safe-area थर',
     'सुरक्षित क्षेत्र.\n\nवरची जागा.\n\nviewport योग्य.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.topbar {\n  padding-top: env(safe-area-inset-top);\n}'),
   S('3. कस्टम नियम',
     'कस्टम variable.\n\nenv read.\n\nमूल्य नेमके.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     ':root {\n  --inset: env(safe-area-inset-left, 0px);\n}'),
   S('4. जुना आधार',
     'env नाही.\n\nfallback शून्य.\n\nतपासा साधा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.safe {\n  padding-left: 16px;\n  padding-left: env(safe-area-inset-left);\n}'),
   S('5. calc नियम',
     'calc env.\n\nमूल्य तोल.\n\nजागा योग्य.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.btn {\n  margin-bottom: calc(env(safe-area-inset-bottom) + 8px);\n}'),
   S('6. दिशा थर',
     'दिशा नेमकी.\n\nदोन्ही बाजू.\n\nजागा समान.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.app {\n  padding-inline: env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px);\n}'),
   S('Mini Project',
     'तळ पट्टी.\n\nsafe जागा.',
     '.tabbar {\n  padding-bottom: env(safe-area-inset-bottom);\n}'),
  ],
  ['env काय?', 'safe-area कुठे?', 'fallback कसा?', 'calc कधी?'],
  [{'q':'env()?','o':['सुरक्षित मूल्य','रंग','ध्वनी'],'c':0},
   {'q':'safe-area?','o':['notch जागा','थर','रेखा'],'c':0},
   {'q':'fallback?','o':['जुने साधे','नवीन','क्रम'],'c':0},
   {'q':'calc env?','o':['जागा तोल','रंग','शोर'],'c':0}],
  {'prompt':'तळ जागा द्या.','starterCode':'.tabbar {\n  padding-bottom: env(safe-area-inset-bottom);\n}','expectedOutput':'Marathi tab bar respects safe area'},
  ['env आधार?', 'safe-area केव्हा?'],
  ['css-viewport-units', 'css-forms-styling', 'css-perf-hints'],
  'css-focus-within', 'css-overflow-deep')

# =====================================================================
# 9. OVERFLOW DEEP
# =====================================================================
L('css-overflow-deep',
  'Overflow Deep',
  'overflow — ओघ नियम',
  'overflow clip scroll scrollbar-gutter.',
  [
   S('1. overflow कल्पना',
     'overflow नियम.\n\nबाहेर ओघ.\n\nhidden अर्थ.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.box {\n  overflow: hidden;\n}'),
   S('2. scroll थर',
     'overflow auto.\n\nस्क्रोल बार.\n\nउंची नेमकी.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.list {\n  overflow-y: auto;\n  max-height: 300px;\n}'),
   S('3. clip नियम',
     'overflow clip.\n\nचेन नाही.\n\nपार्श्वभूमी घट्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.pane {\n  overflow: clip;\n}'),
   S('4. gutter थर',
     'scrollbar-gutter.\n\nजागा राखा.\n\nshift टाळा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.page {\n  overflow-y: scroll;\n  scrollbar-gutter: stable;\n}'),
   S('5. अक्ष नियम',
     'x y वेगळे.\n\nछोटा शेवट.\n\nक्रम नेमका.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.table-wrap {\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n}'),
   S('6. जुना तुलना',
     'hidden साधा.\n\nclip नेमका.\n\nदोन्ही योग्य.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.hidden {\n  overflow: hidden;\n}\n.clipped {\n  overflow: clip;\n}'),
   S('Mini Project',
     'सूची scroll.\n\nauto नियम.',
     '.feed {\n  overflow-y: auto;\n  max-height: 60vh;\n}'),
  ],
  ['overflow काय?', 'clip कुठे?', 'gutter कधी?', 'x y कसे?'],
  [{'q':'overflow hidden?','o':['लपवणे','रंग','ध्वनी'],'c':0},
   {'q':'clip?','o':['चेन नाही','नवीन','रेखा'],'c':0},
   {'q':'scrollbar-gutter?','o':['जागा राखा','थर','क्रम'],'c':0},
   {'q':'overflow-x?','o':['क्षैतिज','उभा','रंग'],'c':0}],
  {'prompt':'सूची scroll करा.','starterCode':'.feed {\n  overflow-y: auto;\n  max-height: 60vh;\n}','expectedOutput':'Marathi feed scrolls within bounds'},
  ['clip vs hidden?', 'gutter फायदा?'],
  ['css-overscroll', 'css-scrollbar-style', 'css-responsive-table'],
  'css-env-function', 'css-table-layout')

# =====================================================================
# 10. TABLE LAYOUT
# =====================================================================
L('css-table-layout',
  'Table Layout',
  'table-layout — टेबल रुंदी',
  'table-layout fixed टेबल नियंत्रण.',
  [
   S('1. table-layout',
     'table-layout fixed.\n\nस्तंभ समान.\n\nरुंदी नेमकी.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'table {\n  table-layout: fixed;\n  width: 100%;\n}'),
   S('2. collapse थर',
     'border-collapse collapse.\n\nरेषा दुहेरी.\n\nथर नीट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'table {\n  border-collapse: collapse;\n}'),
   S('3. स्तंभ रुंदी',
     'colgroup नियम.\n\nप्रत्येक रुंदी.\n\nheader स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'col.a { width: 40%; }\ncol.b { width: 30%; }'),
   S('4. sticky header',
     'sticky header.\n\nthead वर.\n\nscroll टेबल.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'thead th {\n  position: sticky;\n  top: 0;\n  background: white;\n}'),
   S('5. cells नियम',
     'padding योग्य.\n\nसंरेखण नीट.\n\nटेबल वाचता.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'td, th {\n  padding: 0.75rem 1rem;\n  text-align: left;\n}'),
   S('6. responsive थर',
     'small screen.\n\nscroll wrap.\n\nआराम नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.wrap {\n  overflow-x: auto;\n}\ntable {\n  min-width: 600px;\n}'),
   S('Mini Project',
     'टेबल व्यवस्थित.\n\nfixed एक.',
     'table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}'),
  ],
  ['table-layout काय?', 'collapse कुठे?', 'colgroup कधी?', 'sticky कसा?'],
  [{'q':'table-layout fixed?','o':['रुंदी नेमकी','लांब','रंग'],'c':0},
   {'q':'border-collapse?','o':['रेषा जोड','नवीन','थर'],'c':0},
   {'q':'colgroup?','o':['स्तंभ रुंदी','रेखा','क्रम'],'c':0},
   {'q':'sticky header?','o':['वर टिके','खाली','रंग'],'c':0}],
  {'prompt':'टेबल nit करा.','starterCode':'table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}','expectedOutput':'Marathi table layout fixed and clean'},
  ['fixed फायदा?', 'sticky कधी?'],
  ['css-responsive-table', 'css-overflow-deep', 'css-grid-system'],
  'css-overflow-deep', 'css-page-break')

# =====================================================================
# 11. PAGE BREAK
# =====================================================================
L('css-page-break',
  'Page Break',
  'page-break — प्रिंट नियम',
  '@page break print व्यवस्था.',
  [
   S('1. @page कल्पना',
     '@page नियम.\n\nप्रिंट आकार.\n\nमार्जिन सेट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@page {\n  size: A4;\n  margin: 2cm;\n}'),
   S('2. break नियम',
     'break-inside avoid.\n\nखंड वाचता.\n\nसूची नीट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  break-inside: avoid;\n}'),
   S('3. पान थर',
     'break-before नियम.\n\nविभाग नवीन.\n\nक्रम ठोस.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'section.new {\n  break-before: page;\n}'),
   S('4. named नियम',
     'named pages.\n\nविशेष विभाग.\n\n@page name.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@page wide {\n  size: A3 landscape;\n}\n.overview {\n  page: wide;\n}'),
   S('5. orphan widow',
     'orphan widows.\n\nओळे मतला.\n\nमजकूर सुरक्षित.\n\nवाचन नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'p {\n  orphans: 3;\n  widows: 3;\n}'),
   S('6. आधार जुना',
     'break जुने.\n\nprint साधा.\n\nfallback नीट.\n\nआधार घट्ट.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@supports (break-inside: avoid) {\n  .card {\n    break-inside: avoid;\n  }\n}'),
   S('Mini Project',
     'प्रिंट नीट.\n\nbreak एक.',
     '@media print {\n  .card {\n    break-inside: avoid;\n  }\n}'),
  ],
  ['@page काय?', 'break कुठे?', 'named कधी?', 'orphan का?'],
  [{'q':'@page?','o':['प्रिंट आकार','रंग','ध्वनी'],'c':0},
   {'q':'break-inside?','o':['खंड रोख','नवीन','रेखा'],'c':0},
   {'q':'break-before?','o':['नवीन पान','थर','क्रम'],'c':0},
   {'q':'widows?','o':['शेवट ओळ','सुरु','रंग'],'c':0}],
  {'prompt':'प्रिंट व्यवस्था करा.','starterCode':'@media print {\n  .card {\n    break-inside: avoid;\n  }\n}','expectedOutput':'Marathi cards print without splits'},
  ['@page मार्जिन?', 'named pages फायदा?'],
  ['css-print-styles', 'css-responsive-table', 'css-overflow-deep'],
  'css-table-layout', 'css-marathi-capstone13')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone13',
  'Precision Capstone',
  'Precision Bag — भाग संग्रह',
  'Level 13 साधने एकत्र शैली.',
  [
   S('1. लेआउट नकाशा',
     'areas स्पष्ट.\n\ngrid वर.\n\nमुख्य सुबक.\n\nकोड थोडा.\n\nरचना स्थिर.\n\nवापर सोपा.',
     '.page {\n  grid-template-areas: "header header" "main side" "footer footer";\n  grid-template-rows: auto 1fr auto;\n}'),
   S('2. कार्ड ग्रिड',
     'auto-fit नियम.\n\nminmax जोड.\n\nproduct नीट.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय छान.',
     '.cards {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}'),
   S('3. रंग एक',
     'currentColor साधा.\n\nicon रंगे.\n\nथर जुळतो.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर योग्य.',
     '.icon {\n  fill: currentColor;\n}'),
   S('4. लेख रुंदी',
     'ch नियम.\n\n66ch प्रमाण.\n\nवाचन आराम.\n\nकोड स्वच्छ.\n\nरचना स्थिर.\n\nसवय छान.',
     '.prose {\n  max-width: 66ch;\n}'),
   S('5. गती वक्र',
     'cubic नियम.\n\nhover मऊ.\n\nबटण सजीव.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर सोपा.',
     '.btn {\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}'),
   S('6. keyboard मदत',
     'focus-within.\n\nगट उजळ.\n\nप्रवेश नीट.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.field-group:focus-within {\n  border: 2px solid #0d9488;\n}'),
   S('Final Project',
     'Level 13 टीपा.\n\nसर्व जोड.',
     '.tabbar {\n  padding-bottom: env(safe-area-inset-bottom);\n}'),
  ],
  ['Level 13 नवे?', 'areas कुठे?', 'currentColor?', 'easing नियम?'],
  [{'q':'Level 13 थीम?','o':['Precision & Control','जुना थर','रंग रेषा'],'c':0},
   {'q':'auto-fit?','o':['कार्ड जुळणी','ध्वनी','क्रम'],'c':0},
   {'q':'focus-within?','o':['गट उजळ','रंग','शोर'],'c':0},
   {'q':'env()?','o':['safe जागा','रेखा','थर'],'c':0}],
  {'prompt':'पोर्टल नीट करा.','starterCode':'.page {\n  grid-template-areas: "header header" "main side" "footer footer";\n}','expectedOutput':'Final precision patterns assembled via Marathi portal'},
  ['तीन आवडते?', 'areas मर्यादा?'],
  ['css-marathi-capstone12', 'css-grid-template', 'css-env-function'],
  'css-page-break', 'css-grid-template')

# =====================================================================
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
    parts.append("    levelLabel: CSS13_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 13 — Precision & Control ===\n'
    header += 'export const CSS13_LABEL = "CSS · Level 13 — Precision & Control";\n'
    header += '\nexport const cssLevel13: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css13_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css13_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css13_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level13.ts')
print("WROTE css-level13.ts, lines:", len(out.split(chr(10))))