var myScroll,scrollmenu,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 10;
function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var li="";
		el = document.getElementById('screeningList');
		for (var i=1;i<=10;i++){
			li = li + '<li style="padding-left:10px;" data-theme="h">';
			li = li + '<a href="kensindetail.html" data-ajax="false">';
			li = li + '<p>'+(++generatedCount)+'&nbsp;&nbsp;&nbsp;&nbsp;2013/5/31</p> ';
			li = li + '<p>ＸＸＸＸＸＸＸＸＸＸ検診</p>';
			li = li + '</a>';
			li = li + "</li>";
//			el.appendChild(li, el.childNodes[0]);
		}
		$("#screeningList").append(li).listview('refresh');
		myScroll.refresh();
//		$("#screeningList").append(li).listview('refresh');
	}, 500);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
//	scrollmenu = new iScroll('left-panel',{
//		hScroll:false,
//	});
	myScroll = new iScroll('wrapper', {
		useTransform:true,
		useTransition: true,
		hScroll:false,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
//				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
//				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
//				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
//				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
//				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 500);
}

//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);