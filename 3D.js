
window.onload = function(){

	var N = 1;
	var mainPic3D = document.getElementById('mainPic3D');

	mainPic3D.src = '3D/3D' + N + '.jpg';

	function picRun3D(){
		if(N < 12){
			N++;
			
		}else{
			N = 1;
		}
		mainPic3D.src = '3D/3D' + N + '.jpg';
		
	}
	setInterval(picRun3D,1000);
	


}



