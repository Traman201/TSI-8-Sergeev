//цветной текст снизу
var currentStyle = 0;
(function changeColor(currentNumber){
	      currentStyle++;
	      if(currentStyle > 3){
	        currentStyle = 1;
	      }
	    document.getElementById('CreateYourMassiv').querySelector('h1').setAttribute('class', 'color' + currentStyle);
	    document.getElementById('js-more-about').setAttribute('class', 'colort' + currentStyle);
	    setTimeout(function(){
		changeColor(currentNumber)
	}, 550);
}(0));
//Цветной текст снизу
//закладки
$( document ).ready(function() {
    $('.bookmark').click(function (e) {
           e.preventDefault();
           $(this).toggleClass('added');
           var parentId = $(this).parent().attr("id");
           var bookMarks = $('.bookmark-list');
           if($(this).hasClass('added')) {
                 $(this).text("Удалить из закладок");
                  if (parentId == 'articel_1'){
                       var text = ' Зачем делать массивы;';
                        }
                  else{
                       var text = ' Какие возможности дают массивы;';
                  }
                $('<a>', {href: '#' + parentId, text: text}).appendTo(bookMarks);
           }
            else {
               $(this).text("Добавить в закладки");
               $('a[href="#'+ parentId +'"]').remove();
            }
            });
});
//


//Вызов формы для отправки сообщения
var modalButton = document.getElementById('js_open_modal');
  modalButton.onclick = modalClick;
function modalClick(e){
    e.preventDefault();
    var modalElem = document.getElementById('js-modal');
    modalElem.classList.add('active');
}

var closeButton = document.getElementById('js-close-button');
    closeButton.onclick = closeModal;
function closeModal(e){
    e.preventDefault();
    document.getElementById('js-modal').classList.remove('active');
}

var sendButton = document.getElementById('js-send-button');
    sendButton.onclick = sendModal;
function sendModal(e){
    e.preventDefault();
    document.getElementById('js-modal').classList.remove('active');
    document.getElementById('js-thanks').classList.add('active');

}

document.getElementById("js-thanks-button").onclick = hitOk;
function hitOk(e){
    e.preventDefault();
    document.getElementById('js-thanks').classList.remove('active');
}
//вызов формы для отправки сообщения

//Кнопка "Подробнее"
document.getElementById("js-more-about").onclick = moreAbout;
var isMoreAboutActive = false;
function moreAbout(e){
    if (isMoreAboutActive == false){
        document.querySelector('.more-about').classList.add('active');
        document.getElementById('js-more-about').value = 'Скрыть';
        isMoreAboutActive = true;
    }
    else{
    document.querySelector('.more-about').classList.remove('active');
    document.getElementById('js-more-about').value = 'Подробнее';
    isMoreAboutActive = false;
    }
}
//
//Фиксированное меню
jQuery("document").ready(function($){
	var FixedMenu = $('.mainmenu');
	$(window).scroll(function () {//запускается при использовании колесика мыши пользователем
		if ($(this).scrollTop() > 65) {//если пользователь опустился ниже 65 пикселей вниз
			FixedMenu.addClass("menu-fixed");//то меню "открепляется" от своего положения за счет изменения класса
			$('.backup').addClass("backup-active");//а на его место встает невидимый блок, чтобы предотвратить съезжание содержимого веб страницы
		} else {
			FixedMenu.removeClass("menu-fixed");//если пользователь возвращается на самый верх, все встает на свои места
			$('.backup').removeClass("backup-active");
		}
	});
});

//
//Модальное меню - настройка чекбоксов
jQuery("document").ready(function($){//чекбоксы сохраняют свое состояние при перезагрузке сайта, это нехорошо
    $('.js-modalcheck').prop('checked',false);//при загрузке сайта они устанавливаются на "неотмеченные"
   $('#js-close-button, #js-send-button').click(function (e) {//если пользователь нажимает "отправить" или "отмена"
   $('.js-modalcheck').prop('checked',false);//чекбоксы снова становятся неотмеченными
   $('#js-send-button').attr('disabled', true);//а также кнопка отправить становится неактивной
   });
});
//
//Модальное окно - зависимость кнопки отправить от чекбоксов
jQuery("document").ready(function($){
    $('#js-send-button').attr('disabled', true);//при загрузке страницы кнопка отправить неактивна
    $('#js-modalcheck-privacypolicy, #js-modalcheck-agreement').click(function(){//при нажатии на любой из чекбоксов
     if($('#js-modalcheck-privacypolicy').is(':checked') && $('#js-modalcheck-agreement').is(':checked')){//проверяется, выбраны ли они оба
          $('#js-send-button').attr('disabled', false);//если да, то кнопка "Отправить" становится активна
     }
     else{
        $('#js-send-button').attr('disabled', true);//если нет, то она становится неактивна
     }
    });
});
