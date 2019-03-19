var bar = new ProgressBar.Line(document.getElementById('skill-cpp'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: 'C++'
  });
// bar.animate(0.95); 
  
var bar1 = new ProgressBar.Line(document.getElementById('skill-java'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});
// bar1.animate(0.90);
  
var bar2 = new ProgressBar.Line(document.getElementById('skill-python'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});
// bar2.animate(0.93);
  
var bar3 = new ProgressBar.Line(document.getElementById('skill-html'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});
// bar3.animate(0.98);
  
var bar4 = new ProgressBar.Line(document.getElementById('skill-php'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});
// bar4.animate(0.75);
  
var bar5 = new ProgressBar.Line(document.getElementById('skill-sql'), {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgba(243, 168, 183, 1)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});
// bar5.animate(0.80);

var bar6 = new ProgressBar.Circle(document.getElementById('skill-django'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    svgStyle: {width: '100%', height: '100%'},
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
 });
bar6.text.style.fontFamily = '"Roboto", sans-serif';
bar6.text.style.fontSize = '20px';
// bar6.animate(0.9);
  
var bar7 = new ProgressBar.Circle(document.getElementById('skill-r'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
});
bar7.text.style.fontFamily = '"Roboto", sans-serif';
bar7.text.style.fontSize = '20px';
// bar7.animate(0.8);
  
  
var bar8 = new ProgressBar.Circle(document.getElementById('skill-javascript'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
});
bar8.text.style.fontFamily = '"Roboto", sans-serif';
bar8.text.style.fontSize = '20px';
// bar8.animate(0.7);
  
var bar9 = new ProgressBar.Circle(document.getElementById('skill-react'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      autoStyleContainer: false
    },
    from: { color: '#333', width: 4 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
});
bar9.text.style.fontFamily = '"Roboto", sans-serif';
bar9.text.style.fontSize = '20px';
// bar9.animate(0.53);
  
var bar10 = new ProgressBar.Circle(document.getElementById('skill-french'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
});
bar10.text.style.fontFamily = '"Roboto", sans-serif';
bar10.text.style.fontSize = '20px';
// bar10.animate(0.75);
  
var bar11 = new ProgressBar.Circle(document.getElementById('skill-chinese'), {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      autoStyleContainer: false
    },
    from: { color: '#333', width: 4 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
});
bar11.text.style.fontFamily = '"Roboto", sans-serif';
bar11.text.style.fontSize = '20px';
// bar11.animate(0.55);


var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var $element = $("#skills");
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);
  if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
    bar.animate(0.95);
    bar1.animate(0.90);
    bar2.animate(0.93);
    bar3.animate(0.98);
    bar4.animate(0.75);
    bar5.animate(0.80);
    bar6.animate(0.9);
    bar7.animate(0.8);
    bar8.animate(0.7);
    bar9.animate(0.53);
    bar10.animate(0.75);
    bar11.animate(0.55);
  }

}

$window.on('scroll resize', check_if_in_view);