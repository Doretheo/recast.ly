var searchYouTube = (options, callback) => {
  // console.log(key);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video'
    },

    videoEmbeddable: true,
    success: (({data}) => {
      if (callback) {
        callback(data);
        console.log('Success!', data);
      }
    }),

    error: (({data}) => {
      console.log('Couldn\'t get data', data);
    })
  });
};

// used to export a single class, function or primitive from a script file
export default searchYouTube;

// data comes back before finishes loading
// if componenet finishes mouting first, more stable outcome
// search youtube belongs in a mounting div