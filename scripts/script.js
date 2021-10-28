
const contLangs = [
    // { //example:
    //     name: < 'id element by page html' >,
    //     property: < 'property name'>
    //     ENG: < 'textContent in eng lang' >,
    //     RUS: < 'textContent in ru lang' >,
    //     UKR: < 'textContent in ukr lang' >,
    // }, 
    {
        name: 'title-site',
        property:'textContent',
        ENG: 'Register particent',
        RUS: 'Регистрация участников',
        UKR: 'Рэiстрацiя участникiв',
        FRA: 'Inscrivez-vous',
    },
    {
        name: 'h1-head',
        property: 'textContent',
        ENG: 'Hello All!',
        RUS: 'Привет Всем!',
        UKR: 'Привiт усiм!',
        FRA: 'Bonjour à tous!'
    },
    {
        name: 'btn-lang-rus',
        property: 'textContent',
        ENG: 'RUS',
        RUS: 'РУС',
        UKR: 'РОС',
        FRA: 'RUS',
    },
    {
        name: 'btn-lang-ukr',
        property: 'textContent',
        ENG: 'UKR',
        RUS: 'УКР',
        UKR: 'УКР',
        FRA: 'UKR',
    },
    {
        name: 'btn-lang-eng',
        property: 'textContent',
        ENG: 'ENG',
        RUS: 'АНГ',
        UKR: 'АНГ',
        FRA: 'ANG',
    },
    // {
    //     name: 'btn-lang-fra',
    //     property: 'textContent',
    //     ENG: 'FRA',
    //     RUS: 'ФРА',
    //     UKR: 'ФРА',
    //     FRA: 'FRA',
    // },
];

function switchToLang(lang) {
    contLangs.forEach(x => {
        document.getElementById(x.name)[x.property] = x[lang]
    });
}
// init set site
 var langSite = 'RUS';
 switchToLang(langSite);



document.querySelectorAll('.btn-head').forEach(x => {
 x.addEventListener('click', function () {
     document.querySelector('.btn-head-active')
         .classList.remove('btn-head-active');
  switchToLang(x.name);
  x.classList.add('btn-head-active');
 });
});
