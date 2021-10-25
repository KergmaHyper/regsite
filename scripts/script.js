
const contLangs = [
    // { example:
    //     name: < 'id element by page html' >,
    //     property: < 'property name'>
    //     eng: < 'textContent in eng lang' >,
    //     ru: < 'textContent in ru lang' >,
    //     ukr: < 'textContent in ukr lang' >,
    // }, 
    {
        name: 'title-site',
        property:'textContent',
        eng: 'Register particent',
        ru: 'Регистрация участников',
        ukr: 'Рэiстрацiя участникiв',
    },
];

function switchToLang(lang) {
    contLangs.forEach(x => {
        document.getElementById(x.name)[x.property] = x[lang]
    });
}

var langSite = 'ru';
switchToLang(langSite);