jQuery(function($){
	$('#loadmore').click(function(){
		$(this).text('Завантажую...'); // изменяем текст кнопки, вы также можете добавить прелоадер
		var data = {
			'action': 'loadmore',
			'query': news_posts,
			'page' : current_page
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) { 
					$('#loadmore').text('Завантажити ще').before(data); // вставляем новые посты
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#loadmore").remove(); // если последняя страница, удаляем кнопку
				} else {
					$('#loadmore').remove(); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});
});