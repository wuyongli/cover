var cover={
		color:'rgba(0,0,0,0.5)',
		todo:function(){
			var color=this.color;
			$('.cover').hover(
			function(){
				$(this).css({'position':'relative'})
				$(this).append("<div class='coverDiv'></div>");
				$(this).children('.coverDiv').css({
						'background-color':color,
						'width':'100%',
						'height':'100%',
						'position':'absolute'});
			},
			function(){
				$(this).children('.coverDiv').remove();
			});
		},
		init:function(color){
			this.color=color;
			this.todo();
		}
	};