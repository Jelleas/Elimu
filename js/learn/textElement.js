function TextElement(dim, text) {
   var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, 'centerAreaDiv', dim);
   var textSpan = document.createElement('p');
   textSpan.innerHTML = text;
   textSpan.className = 'centeredText';
   that.div.appendChild(textSpan);
   that.div.style.background = 'lavender';
   that.div.className = 'rounded';

   disableSelection(textSpan);

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      var centerHeight = $('#centerAreaDiv').height();
      var height = that.heightFraction * centerHeight;
      textSpan.style.fontSize = height + 'px';
      textSpan.style.lineHeight = height + 'px';
   }

   that.setText = function(text) {
      textSpan.innerHTML = text;
   }
   return that;
}
