const container=document.querySelector(".container")
const body=document.querySelector("body")
const image=document.querySelector(".container2")
const head=document.querySelector(".head")

var timeHTML=`
    <div class="timer" id="t" >   
    </div>   `;
container.insertAdjacentHTML('afterbegin', timeHTML);


let intervalID

function answer(){
    document.getElementById('t').innerHTML="30";
    
    intervalID=setInterval(timer,1000)
    function timer(){
        if (document.getElementById('t').innerHTML>0){
            document.getElementById('t').innerHTML--;

        }
        else{
            clearInterval(intervalID, 1000);
            document.getElementById('t').innerHTML="Время вышло";
            let answer=document.querySelector(".answer");
            let quiz=document.querySelector('.head')
            quiz.remove()
            answer.remove();
        }
    }
    }

var Questions=[
        {id: 1,
        q:"Игрок, забивший больше всех голов в истории футбола в официальных матчах:",
        p: "На момент написания викторины расклад был таковым (и вряд ли изменился): Роналду- 824, Месси- 797, Пеле- 762, Ромарио- 755.",
        a:  [{text: "Лионель Месси", value:-1, img:"../img/pessi.jpg"},
            {text:"Криштиану Роналду", value:1, img:"../img/rony.jpg"},
            {text:"Ромарио", value:0, img:"../img/romario.jpg"},
            {text:"Пеле", value:0, img:"../img/pele.jpg"}]
    },
       { id:2,
        q:"Игрок, получивший Золотой Мяч в 2000 году:",
        p:"В этот год мяч взял Фигу- 197 очков. Зидан брал трофей в 98, в этом году получил 181 балл, Шевченко брал в 2004, его результат- 85 баллов. Анри не брал ЗМ вовсе- 57 баллов.", 
        a:  [{text:"Зинедин Зидан", value:0, img:"../img/zizy.jpg"},
            {text:"Андрей Шевченко", value:0, img:"../img/sheva.jpg"},
            {text:"Тьери Анри", value:0, img:"../img/henry.jpg"},
            {text:"Луиш Фигу", value:2, img:"../img/figu.jpg"},]
    },
        { id:3,
        q:"Арбитр, получивший реальный тюремный срок за получение взятки и организацию договорных матчей:",
        p:"Роберт Хойзер 21 августа 2004-го года вышел судить матч Кубка Германии между Пандерборном и Гамбургом. Учитывая, что Пандерборн представлял Региональную лигу, а Гамбург — Бундеслигу, результат матча, как говорится, был широким массам известен заранее. Судье был обещан крупный куш за нужный результат (победа Пандерборна), и он получил авансом треть суммы, которую тут же зарядил на победу хозяев. Игра началась для Пандерборна катастрофически: уже к 30-й минуте регионалы горели 0:2, и тут, под звуки невидимых, но существующих фанфар, дирижерскую палочку взял в свои твердые руки Роберт Хойзер. Защитник и полузащитник Кристиан Ран, сыгравший пять матчей за сборную Германии, так описывает то, что творилось на поле в тот вечер: После получаса игры стало понятно, что происходит что-то ненормальное. Судья начал откровенно нас душить: он свистел нам все нарушения, а в любой атаке фиксировал офсайд. Я назову это чем угодно, но только не футбольной игрой! Хойцер находился на поле для того, чтобы делать деньги и не разочаровал братьев Сапина — он поставил два левых пенальти в ворота Гамбурга, а также удалил нападающего гостей Эмиля Мпензу, который чрезвычайно громко и в крайне непечатных формулировках выражал свое отношение к тому, что происходит на газоне. Пандерборн сенсационно победил 4:2, братья Сапина сняли полмиллиона евро. После недолгого внутреннего расследования DFB подключил к делу полицию, тут же устроившую облаву и в кафе Кинг, и в доме Роберта Хойцера. Последний не стал закрываться, а сразу же решил сотрудничать со следствием, получив 28 апреля 2005-го года пожизненный футбольный бан и тюремный срок- 2 года и 5 месяцев. А самое интересное, что Феликс Цвайер, один из тех, кто сдал продажного арбитра, сам принял от Хойцера взятку в 300 евро — дабы выступить помощником главного судьи в поединке Вупперталя против Вердера, и, как говорится, не портить малину. ",
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
        q:"Чисто статистический вопрос на 5 баллов. Форвард с худшей реализацией моментов за последние 5 лет(разница между XG и реально забитыми мячами):",
        p:"Эдин Джеко - минус 16,8XG, Кристиан Бентеке - минус 11,5XG, Иньяки Уильямс - минус 10XG, Тимо Вернер - минус 8,5XG, Альваро Мората - минус 0,7XG",
        a:  [{text:"Эдин Джеко", value:5, img:"../img/dzeko.jpg"},
            {text:"Альваро Мората/Тимо Вернер", value:0, img:"../img/werner.jpg"},
            {text:"Иньяки Уильямс", value:0, img:"../img/negro.jpg"},
            {text:"Кристиан Бентеке", value:0, img:"../img/benteke.jpg"},]
    },
        { id:6,
        q:"Какое из этих событий в Лиге Чемпионов не происходило на самом деле?",
        p:"Сергей Юран с 7 забитыми в сезоне 91/92 за Бенфику становился лучшим бомбардиром ЛЧ. Андерлехт в сезоне 00/01 выигрывал группу с 14 пропущенными, финал ЛЧ 03/04 разыгрывали Монако и Порту", 
        a:  [{text:"Россиянин- лучший бомбардир розыгрыша", value:0, img:"none"},
            {text:"Команда, которая забрала 1 место в группе с разницей мячей 11-14", value:0, img:"none"},
            {text:"Финал, который разыграли 2 явных аутсайдера", value:0, img:"none"},
            {text:"Матч, закончившийся со счетом 9:0", value:5, img:"none"},]
    },]
    //     { id:7,
    //     q:"Игрок, получивший Золотой Мяч в 2000 году:",
    //     a:  [{text:"Зинедин Зидан", value:0},
    //         {text:"Андрей Шевченко", value:0},
    //         {text:"Тьери Анри", value:0},
    //         {text:"Зинедин Зидан", value:2},]
    // },
    //     { id:8,
    //     q:"Игрок, получивший Золотой Мяч в 2000 году:",
    //     a:  [{text:"Зинедин Зидан", value:0},
    //         {text:"Андрей Шевченко", value:0},
    //         {text:"Тьери Анри", value:0},
    //         {text:"Зинедин Зидан", value:2},]
    // },
    //     { id:9,
    //     q:"Игрок, получивший Золотой Мяч в 2000 году:",
    //     a:  [{text:"Зинедин Зидан", value:0},
    //         {text:"Андрей Шевченко", value:0},
    //         {text:"Тьери Анри", value:0},
    //         {text:"Зинедин Зидан", value:2},]
    // },
    //     { id:10,
    //     q:"Игрок, получивший Золотой Мяч в 2000 году:",
    //     a:  [{text:"Зинедин Зидан", value:0},
    //         {text:"Андрей Шевченко", value:0},
    //         {text:"Тьери Анри", value:0},
    //         {text:"Зинедин Зидан", value:2},]
    // }]

    var n= 0, i=0;
        game();
        function game(){
            answer();
        
        
        
        let q=Questions[i]['q']
        let p1=(Questions[i]['p'])
        let v1=(Questions[i]['a'][0]['value'])
        let a1=(Questions[i]['a']['0']['text'])
        let i1=(Questions[i]['a']['0']['img'])
        function images1(){
            let imageHTML=`
        <img class ="header__image" src="${i1}">`
            image.insertAdjacentHTML('beforeend', imageHTML)    
        }
        let p2=(Questions[i]['p'])
        let v2=(Questions[i]['a'][1]['value'])
        let a2=(Questions[i]['a']['1']['text'])
        let i2=(Questions[i]['a']['1']['img'])
        function images2(){
            let imageHTML=`
        <img class ="header__image" src="${i2}">`
            image.insertAdjacentHTML('beforeend', imageHTML)    
        }
        let p3=(Questions[i]['p'])
        let v3=(Questions[i]['a'][2]['value'])
        let a3=(Questions[i]['a']['2']['text'])
        let i3=(Questions[i]['a']['2']['img'])
        function images3(){
            let imageHTML=`
        <img class ="header__image" src="${i3}">`
            image.insertAdjacentHTML('beforeend', imageHTML)    
        }
        let p4=(Questions[i]['p'])
        let v4=(Questions[i]['a'][3]['value'])
        let a4=(Questions[i]['a']['3']['text'])
        let i4=(Questions[i]['a']['3']['img'])
        function images4(){
            let imageHTML=`
        <img class ="header__image" src="${i4}">`
            image.insertAdjacentHTML('beforeend', imageHTML)    
        }
        let qHTML=`
        <div class="head">
        <div class="header">
        <span class="header__suptitle">${q}</span>
        </div>
        <div class="suptitle">
                    <ol>
                        <li class="btns1" >${a1}</li>
                        <li class="btns2" >${a2}</li>
                        <li class="btns3" >${a3}</li>
                        <li class="btns4" >${a4}</li>
                    </ol>`
        container.innerHTML+=qHTML;
        let quiz=document.querySelector("ol")
        let quiz1=document.querySelector(".btns1")
        let quiz2=document.querySelector(".btns2")
        let quiz3=document.querySelector(".btns3")
        let quiz4=document.querySelector(".btns4")
        quiz1.addEventListener('mouseover', images1)
        quiz2.addEventListener('mouseover', images2)
        quiz3.addEventListener('mouseover', images3)
        quiz4.addEventListener('mouseover', images4)
        quiz1.addEventListener('mouseout', imagesdel)
        quiz2.addEventListener('mouseout', imagesdel)
        quiz3.addEventListener('mouseout', imagesdel)
        quiz4.addEventListener('mouseout', imagesdel)
        
        function imagesdel(){
            var imgDel=image.firstElementChild;
            imgDel.remove(); 
        }
function game__inner(){
    quiz1.removeEventListener('mouseover', images1)
    quiz1.removeEventListener('mouseout', imagesdel)
    quiz2.removeEventListener('mouseover', images2)
    quiz2.removeEventListener('mouseout', imagesdel)
    quiz3.removeEventListener('mouseover', images3)
    quiz3.removeEventListener('mouseout', imagesdel)
    quiz4.removeEventListener('mouseover', images4)
    quiz4.removeEventListener('mouseout', imagesdel)
}
quiz1.addEventListener('click',()=>{
    game__inner();
    function d1(){
    head.insertAdjacentHTML('beforeend', pHTML1)
    let answer=document.querySelector(".answer")
    let btn=document.querySelector(".btn")
    alert("Ты получил "+v1+" балл(-ов)")
    imagesdel();
    btn.addEventListener('click',()=>{
    let quiz=document.querySelector('.head')
    quiz.remove();
    i++;
    answer.remove();
    game();
})}
setTimeout(d1, 3000)
    if (v1>0){
        quiz1.className='done';
        var pHTML1=`
        <div class="answer">
        <div class="answer__suptitle">Да!
        <br>
        <br>
        <br>${p1}    
        </div>
        <button class="btn">Следующий вопрос</button>
        </div>`;
        }
    else{
        var pHTML1=`
        <div class="answer">
        <div class="answer__suptitle">Нет!
        <br>
        <br>
        <br>${p1}    
        </div>
        <button class="btn">Следующий вопрос</button>
        </div>`;
        quiz1.className='none';
 // let a=new Audio('../mp3/Fuu.mp3')
// a.play();
        }})
quiz2.addEventListener('click',()=>{
    game__inner();
    function d1(){
        head.insertAdjacentHTML('beforeend', pHTML2)
        let answer=document.querySelector(".answer")
        let btn=document.querySelector(".btn")
        alert("Ты получил "+v2+" балл(-ов)")
        imagesdel();
    btn.addEventListener('click',()=>{
        let quiz=document.querySelector('.head')
        quiz.remove();
        i++;
        answer.remove();
        game();
        })}
    setTimeout(d1, 3000)
    if (v2>0){
        quiz2.className='done';
        var pHTML2=`
    <div class="answer">
    <div class="answer__suptitle">Да!
    <br>
    <br>
    <br>${p2}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
       }
    else{
        quiz2.className='none';
        var pHTML2=`
    <div class="answer">
    <div class="answer__suptitle">Нет!
    <br>
    <br>
    <br>${p2}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
 // let a=new Audio('../mp3/Fuu.mp3')
// a.play();      
    }})
quiz3.addEventListener('click',()=>{
    game__inner();
    function d1(){
        head.insertAdjacentHTML('beforeend', pHTML3)
        let answer=document.querySelector(".answer")
        let btn=document.querySelector(".btn")
        alert("Ты получил "+v3+" балл(-ов)")
        imagesdel();
    btn.addEventListener('click',()=>{
        let quiz=document.querySelector('.head')
        quiz.remove();
        i++;
        answer.remove();
        game();
        })}
    setTimeout(d1, 3000)
    if (v3>0){
        quiz3.className='done';
        var pHTML3=`
    <div class="answer">
    <div class="answer__suptitle">Да!
    <br>
    <br>
    <br>${p3}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
       }
    else{
        quiz3.className='none';
        var pHTML3=`
    <div class="answer">
    <div class="answer__suptitle">Нет!
    <br>
    <br>
    <br>${p3}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
 // let a=new Audio('../mp3/Fuu.mp3')
// a.play();      
    }})
quiz4.addEventListener('click',()=>{
    game__inner();
    function d1(){
        head.insertAdjacentHTML('beforeend', pHTML4)
        let answer=document.querySelector(".answer")
        let btn=document.querySelector(".btn")
        alert("Ты получил "+v4+" балл(-ов)")
        imagesdel();
    btn.addEventListener('click',()=>{
        let quiz=document.querySelector('.head')
        quiz.remove();
        i++;
        answer.remove();
        game();
        })}
    setTimeout(d1, 3000)
    if (v4>0){
        quiz4.className='done';
        var pHTML4=`
    <div class="answer">
    <div class="answer__suptitle">Да!
    <br>
    <br>
    <br>${p4}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
       }
    else{
        quiz4.className='none';
        var pHTML4=`
    <div class="answer">
    <div class="answer__suptitle">Нет!
    <br>
    <br>
    <br>${p4}    
    </div>
    <button class="btn">Следующий вопрос</button>
    </div>`;
 // let a=new Audio('../mp3/Fuu.mp3')
// a.play();      
    }})
    
        
}