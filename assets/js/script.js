(function($){
	$(document).ready(function(){
	
	//REG-AREA KEYUP
	
	$('.reg-area input').keyup(function(){
		let value= $(this).val();	
		if( value== ''){
			
			$(this).css('border-color','red');
			
			}else{
			
			$(this).css('border-color','#bdc7d8');
			
			
			}

		});
		
		//REG-AREA BLUR
		
   $('.reg-area input').blur(function(){
		let value= $(this).val();	
		if( value== ''){
			
			$(this).css('border-color','red');
			
			}else{
			
			$(this).css('border-color','#bdc7d8');
			
			
			}

		});

		// CUSTOM GENDER
		
		$('input[name="gender"]').change(function(){
			let id= $(this).attr('id')
			if( id == 'c'){
				
				$('.custom-gender').show();
				}else{
				$('.custom-gender').hide();
				};
			});
	
		
		});
})(jQuery)