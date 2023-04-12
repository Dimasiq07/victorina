const container=document.querySelector(".container")
const body=document.querySelector("body")
const image=document.querySelector(".container2")


let i=0, res=0, intervalID, pfinal, ph, head, answers=0, log=0, logs=""

function continue_game(){
    if (i!==Questions.length){
        game();
    }
    else{
        result()
    }
}

//Массив с вопросами
var Questions=[
    {id: 1,
    q:"Игрок, забивший больше всех голов в истории футбола в официальных матчах:",
    int_p:1,
    p: "../img/d1.png",
    a:  [{text: "Лионель Месси", value:0, img:"../img/pessi.jpg"},
        {text:"Криштиану Роналду", value:1, img:"../img/rony.jpg"},
        {text:"Ромарио", value:0, img:"../img/romario.jpg"},
        {text:"Пеле", value:0, img:"../img/pele.jpg"}]
},
   { id:2,
    q:"Игрок, получивший Золотой Мяч в 2000 году:",
    int_p:1,
    p:"../img/d2.png", 
    a:  [{text:"Зинедин Зидан", value:0, img:"../img/zizy.jpg"},
        {text:"Андрей Шевченко", value:0, img:"../img/sheva.jpg"},
        {text:"Тьери Анри", value:0, img:"../img/henry.jpg"},
        {text:"Луиш Фигу", value:2, img:"../img/figu.jpg"},]
},
    { id:3,
    q:"Арбитр, получивший реальный тюремный срок за получение взятки и организацию договорных матчей:",
    p:"Роберт Хойзер 21 августа 2004-го года вышел судить матч Кубка Германии между Пандерборном и Гамбургом. Учитывая, что Пандерборн представлял Региональную лигу, а Гамбург — Бундеслигу, результат матча был очевиден. Судье был обещан крупный куш за нужный результат (победа Пандерборна), и он получил авансом треть суммы, которую тут же зарядил на победу хозяев. Игра началась для Пандерборна катастрофически: уже к 30-й минуте регионалы горели 0:2, и тут, под звуки невидимых, но существующих фанфар, дирижерскую палочку взял в свои твердые руки Роберт Хойзер. Защитник и полузащитник Кристиан Ран, сыгравший пять матчей за сборную Германии, так описывает то, что творилось на поле в тот вечер: После получаса игры стало понятно, что происходит что-то ненормальное. Судья начал откровенно нас душить: он свистел нам все нарушения, а в любой атаке фиксировал офсайд. Я назову это чем угодно, но только не футбольной игрой! Хойцер находился на поле для того, чтобы делать деньги и не разочаровал братьев Сапина — он поставил два левых пенальти в ворота Гамбурга, а также удалил нападающего гостей Эмиля Мпензу, который чрезвычайно громко и в крайне непечатных формулировках выражал свое отношение к тому, что происходит на газоне. Пандерборн сенсационно победил 4:2, братья Сапина сняли полмиллиона евро. После недолгого внутреннего расследования DFB подключил к делу полицию, тут же устроившую облаву и в кафе Кинг, и в доме Роберта Хойзера. Последний не стал закрываться, а сразу же решил сотрудничать со следствием, получив 28 апреля 2005-го года пожизненный футбольный бан и тюремный срок- 2 года и 5 месяцев. А самое интересное, что Феликс Цвайер, один из тех, кто сдал продажного арбитра, сам принял от Хойцера взятку в 300 евро — дабы выступить помощником главного судьи в поединке Вупперталя против Вердера, и, как говорится, не портить малину. ",
    a:  [{text:"Роберт Хойзер", value:3, img:"../img/hoizer.jpg"},
        {text:"Майкл Оливер", value:0, img:"../img/ol.jpg"},
        {text:"Том Хеннинг Эвребё", value:0, img:"../img/tom.jpg"},
        {text:"Клеман Тюрпен", value:0, img:"../img/turpen.jpg"},]
},
    { id:4,
    q:"Голкипер, забивший больше всех голов среди вратарей-131:",
    p:"Роджерио Сени- 131 гол. Рекордсмен по забитым мячам среди вратарей, рекордсмен среди вратарей по голам со штрафных (61), рекордсмен среди вратарей по голам с пенальти (69), рекордсмен среди вратарей по голам за клуб (131). Хосе Луис Чилаверт- 67 голов. Рекордсмен среди вратарей по голам за сборную (9), единственный вратарь сделавший хет-трик. Рене Игита- 41 гол. Большую известность, все таки, получил благодаря своему дриблингу и акробатическим трюкам. Лев Яишин забитыми мячами не отмечался",
    a:  [{text:"Рене Игита", value:0, img:"../img/rene.jpg"},
        {text:"Лев Яшин", value:0, img:"../img/lev.jpg"},
        {text:"Хосе Луис Чилаверт", value:0, img:"../img/chil.jpg"},
        {text:"Роджерио Сени", value:4, img:"../img/seni.jpg"},]
},
    { id:5,
    q:"Форвард с худшей реализацией моментов за последние 5 лет(разница между XG и реально забитыми мячами):",
    p:"Эдин Джеко - минус 16,8XG, Кристиан Бентеке - минус 11,5XG, Иньяки Уильямс - минус 10XG, Тимо Вернер - минус 8,5XG, Альваро Мората - минус 0,7XG",
    a:  [{text:"Эдин Джеко", value:5, img:"../img/dzeko.jpg"},
        {text:"Альваро Мората/Тимо Вернер", value:0, img:"../img/werner.jpg"},
        {text:"Иньяки Уильямс", value:0, img:"../img/negro.jpg"},
        {text:"Кристиан Бентеке", value:0, img:"../img/benteke.jpg"},]
},
    { id:6,
    q:"Кто из этих игроков получил награду Молодой игрок по версии ПФА в сезоне 15/16?",
    int_p:1,
    p:"../img/d6.png", 
    a:  [{text:"Эден Азар", value:0, img:"../img/hazard.jpg"},
        {text:"Харри Кейн", value:0, img:"../img/kane.jpg"},
        {text:"Делле Алли", value:5, img:"../img/alli.jpg"},
        {text:"Гарет Бейл", value:0, img:"../img/bale.jpg"},]
},
    { id:7,
    q:"Какая из этих команд одержала больше побед в финале ЛЧ(или КЕЧ)?:",
    int_p:1,
    p:"../img/d7.png",
    a:  [{text:"Ливерпуль", value:0, img:"../img/liver.png"},
        {text:"Барселона", value:0, img:"../img/varsa.png"},
        {text:"Милан", value:3, img:"../img/milan.png"},
        {text:"Бавария", value:0, img:"../img/bav.png"},]
},
    { id:8,
    q:"Какое из этих событий в Лиге Чемпионов не происходило на самом деле?",
    p:"Сергей Юран с 7 забитыми в сезоне 91/92 за Бенфику становился лучшим бомбардиром ЛЧ. Андерлехт в сезоне 00/01 выигрывал группу с 14 пропущенными, финал ЛЧ 03/04 разыгрывали Монако и Порту, ну а рекордный разгром учинял Ливерпуль Бешикташу и Реал Мальмё (8:0)", 
    a:  [{text:"Россиянин- лучший бомбардир розыгрыша", value:0, img:"none"},
        {text:"Команда, которая забрала 1 место в группе с разницей мячей 11-14", value:0, img:"none"},
        {text:"Финал, который разыграли 2 явных аутсайдера", value:0, img:"none"},
        {text:"Матч, закончившийся со счетом 9:0", value:5, img:"none"},]
},
    { id:9,
    q:"Поговорим о трансферных переплатах. Подсчеты велись в %. Соотносится уплаченная сумма трансфера и рыночная стоимость на момент перехода:",
    p:"Марсьяль был куплен за 60млн(рыночная 8)-650%, Кэролл за 41млн(рыночная 10)-410%, Менди за 57,5млн(рыночная 13)-342%, Дембеле за 125млн(рыночная 33)-324%", 
    a:  [{text:"Бенджамин Менди в МС", value:0, img:"../img/mendy.jpg"},
        {text:"Энди Кэролл в Ливерпуль", value:0, img:"../img/karoll.jpg"},
        {text:"Энтони Марсьяль в МЮ", value:6, img:"../img/martial.jpg"},
        {text:"Усман Дембеле в Барселону", value:0, img:"../img/dembele.jpg"},]
},
]
//Сама викторина
function game(){

    let suptitleHTML=`
        <div class="suptitle">
            <ol id=suptitle__suptitle></ol> 
        </div>`;
    container.insertAdjacentHTML('afterbegin', suptitleHTML)

//Цикл с перебором вопросов
    for (var n=3; n>=0; n--){
        let element=Questions[i]
        var q=element['q']
        let p=element['p']
        let pp=element['int_p']
        let t=element['a'][n]['text']
        let img=element['a'][n]['img']
        let v=element['a'][n]['value']
        let ol=document.getElementById('suptitle__suptitle')
        
        //Таймер для вопросов
        function answer(){
            var timeHTML=`
                <div class="timer__header">
                    <div class="timer" id="t"></div>
                </div>`
            container.insertAdjacentHTML('afterbegin', timeHTML);
            let time=document.getElementById('t')
            time.innerHTML='30'
            
            function timer(){
                
                if (time.innerHTML>1){
                time.innerHTML--;
                }
                else{
                    ph=""
                    clearInterval(intervalID);
                    time.innerHTML="Время вышло";
                    document.querySelector('.header').remove();
                    document.querySelector('.suptitle').remove();
                    new Audio('../mp3/incorrect2.mp3').play();

                        if (!image.firstElementChild){
                        }
                        else{
                            img__remove();
                        }
                        log=`<div class="log">${q}- Ты не успел ответить. За это ты получил 0 баллов.</div>`
                        logs+=log
                    
                    //Вывод меню перехода к следующему вопросу
                    
                    after_click();

                    function nextQ(){
                        i++;
                        document.querySelector('.head').remove();
                        document.getElementById('t').remove();
                        document.querySelector('.timer__header').remove();
                        continue_game()
                    }  

                    let btn=document.querySelector('.btn')
                    btn.addEventListener('click', nextQ)    
                }
            }
            intervalID=setInterval(timer, 1000)
            stop.interval=timer();
        }

        function after_click(){
            if (pp==1){
                pfinal=`<img src=${p}>`
            }
            else{
                pfinal=p}
            
            pHTML=`
            <div class="answer">
                <div class="answer__suptitle">${ph}
                <br>
                <br>
                <br>
                ${pfinal}
                <div class="btn__header">    
                    <button class="btn">Следующий вопрос</button>
                </div>
                </div>
            </div>`

            const head=document.querySelector('.head')
            head.insertAdjacentHTML('afterbegin', pHTML)
            }
            
   //Варианты ответа
    var btnHTML=`
        <li id="${n}" class="btns">${t}</li>`;
    ol.insertAdjacentHTML('afterbegin', btnHTML)
    
    //Работа с img 
    let btns=document.querySelector('.btns')
    btns.addEventListener('mouseover', img__add)
    btns.addEventListener('mouseout',img__remove)
    btns.addEventListener('click', action)

    function img__add(){

    if (img==='none'||img==='undefined'){   
    } 
    else{
        let imageHTML=`
        <img class ="header__image" src="${img}">`;
        image.insertAdjacentHTML('beforeend', imageHTML)
    }
    }

    function img__remove(){
    if (img==='none'||img==='undefined'){
    }
    else{
        let imgDel=image.firstElementChild;
        imgDel.remove();}
    }
   
   //Функция после клика на кнопку
    function action(){
        clearInterval(intervalID);
        btns.removeEventListener('mouseover', img__add)
        btns.removeEventListener('mouseout',img__remove)
        btns.removeEventListener('click', action)
        
        let time=document.getElementById('t')
        time.remove(); 
        
        img__remove();

        function voice_correct(){
            if (v==1){
                new Audio('../mp3/correct0.mp3').play();
            }
            else if(v==2){
                new Audio('../mp3/correct1.mp3').play();
            }
            else if(v==3){
                new Audio('../mp3/correct2.mp3').play();
            }
            else if(v==4){
                new Audio('../mp3/correct3.mp3').play();
            }
            else {
                const correct=["../mp3/correct4.mp3", "../mp3/correct5.mp3"]
            new Audio(correct[(Math.floor(Math.random()*2))]).play().volume=0;
            }
        }
        

        function voice_incorrect(){
           
            const incorrect=["../mp3/incorrect1.mp3", "../mp3/incorrect2.mp3", "../mp3/incorrect3.mp3"]
            new Audio(incorrect[(Math.floor(Math.random()*3))]).play();
        }

        //Проверка ответа на правильность
        if (v>0){
            voice_correct();
            btns.classList='done'
            ph="Да"
            answers++;
            
            
        }   
        else{
            voice_incorrect();
            btns.classList='none'
            ph="Нет"
            
        }

            log=`<div class="log">${q}- это ${t}. За это ты получил ${v} балл-(ов).</div>`
            logs+=log

        //Переход к следующему вопросу   
        function iterator(){
            i++;
            head=document.querySelector('.head').remove()
            document.querySelector('.suptitle').remove()
            document.querySelector('.timer__header').remove()
            continue_game();
        }

        //Составление лога
        
       
        

        //После выбора варианта ответа
        function timeout(){
            alert("Ты получил "+v+" балла-(ов)")
            
            let cont=document.querySelector('.header')
            let suptitle=document.getElementById('suptitle__suptitle')
            
            cont.remove();
            suptitle.remove();

            res+=v

            after_click();

            let btn=document.querySelector('.btn')
            btn.addEventListener('click', iterator)
        }   
        setTimeout(timeout, 50)
    
   
    }
    }
    answer();

//Вывод вопроса на экран
    var headerHTML=`
    <div class="head">
        <div class="header">
        <span class="header__suptitle">${q}</span>
        </div>
    </div`;
    container.insertAdjacentHTML('afterbegin', headerHTML)

    if (i==Questions.length){
    }
}
continue_game();

function result(){
    let res_max=34
    let res_current=Math.round(res/res_max*100)
    let answer_current=Math.round(answers/i*100)
    let res_title

    if (res>=23){
        res_title='Ты очень хорошо разбираешься в футболе, результат впечатляет!'
        new Audio('../mp3/final4.mp3').play();
    }
    else if (res>=11){
        res_title='Ты неплохо разбираешься в футболе, хороший результат.'
        new Audio('../mp3/final3.mp3').play();
    }
    else if (res>=5){
        res_title='Удовлетворительный результат. Возможно, ты недостаточно хорошо изучал футбольный бэкграунд.'
        new Audio('../mp3/final2.mp3').play();
    }
    else {
        res_title='Результат оставляет желать лучшего. Возможно, ты вообще никогда не интересовался этой чудесной игрой. Советую это исправить :)'
        new Audio('../mp3/final1.mp3').play();
    }

    let resHTML=`
    <div class="res">
        <div class="res__header">Поздравляю! Викторина подошла к концу</div>
        <div class="res__suptitle">Ты набрал ${res} балла(-ов) из ${res_max} возможных, а именно ${res_current}%. 
        Ты ответил правильно на ${answers} вопроса(-ов) из ${i}, а именно ${answer_current}%. ${res_title}</div>
    </div>

    <div class="res__btns">
        <button class="log__btns">Показать итоги</button>
        <button class="exit__btns">Выйти</button>
        <button class="support__btns">Сообщить о проблеме</button>
    </div>`

    container.insertAdjacentHTML('afterbegin', resHTML)

    let log__btn=document.querySelector('.log__btns')
    log__btn.addEventListener('click',logs__func)

    function logs__func(){
        if (image.childElementCount===0){
            image.insertAdjacentHTML('beforeend', logs)
        }
        else{
            image.innerHTML="";
            }

        }

    document.querySelector('.exit__btns').addEventListener('click', exit__func)

    function exit__func(){
        document.querySelector('body').innerHTML="<img class=end src='../img/end.jpg'>";
        
        
    }

    document.querySelector('.support__btns').addEventListener('click', support__func)

    function support__func(){
        alert("email для связи- dimakadilo@yandex.ru")
    }

    }

