define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
  
  var API = new APIConstructor();
  return stiatExtension({
    category : { 
      name : 'Black people', // Will appear in the data.
      title : {
        media : { word : 'Black people' }, // Name of the category presented in the task.
        css : { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
        height : 7 // Used to position the "Or" in the combined block.
      }, 
      media : [ // Stimuli content as words (no images here)
        { word: 'African American' },
        { word: 'Black' },
        { word: 'Person of color' },
        { word: 'Brown skin' },
        { word: 'Dark-skinned' },
        { word: 'Ebony' }
      ], 
      css : { color: '#31b404', 'font-size': '3em' } // Stimulus css (style)
    },  

    attribute1 : {
      name : 'Unpleasant', // Attribute label
      title : {
        media : { word : 'Negative' }, // Name of the category presented in the task.
        css : { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
        height : 7 // Used to position the "Or" in the combined block.
      }, 
      media : [ // Stimuli (words only)
        { word: 'Bomb' },
        { word: 'Abuse' },
        { word: 'Sadness' },
        { word: 'Pain' },
        { word: 'Poison' },
        { word: 'Grief' }
      ], 
      css : { color: '#31b404', 'font-size': '3em' } // Stimulus css (style)
    },

    attribute2 : {
      name : 'Pleasant', // Attribute label
      title : {
        media : { word : 'Positive' }, // Name of the category presented in the task.
        css : { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
        height : 7 // Used to position the "Or" in the combined block.
      }, 
      media : [ // Stimuli (words only)
        { word: 'Paradise' },
        { word: 'Pleasure' },
        { word: 'Cheer' },
        { word: 'Wonderful' },
        { word: 'Splendid' },
        { word: 'Love' }
      ], 
      css : { color: '#31b404', 'font-size': '3em' } // Stimulus css (style)
    },

    base_url : { // We no longer need this as we don't have images.
      image : ''
    }
  });
});
